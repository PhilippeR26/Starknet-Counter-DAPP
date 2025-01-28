"use client";

import { useEffect, useState } from 'react';
import { type Call } from "starknet";
import { useContract, useReadContract, useSendTransaction } from '@starknet-react/core';
import TransactionStatus from './TransactionStatus';
import { test1Abi } from "../contracts/counter-abi";
import { addrTestContract, qtyForIncrease } from '@/app/utils/constants';


export default function PlayWithCairo() {
    const [transactionHash, setTransactionHash] = useState<string>("");
    const [getCounter, setCounter] = useState<bigint | undefined>(undefined);

    const { contract } = useContract({ abi: test1Abi, address: addrTestContract });
    const { sendAsync, data, status, isSuccess } = useSendTransaction({ calls: [] });
    const { data: counter } = useReadContract({
        address: addrTestContract,
        abi: test1Abi,
        functionName: "get_counter",
        args: [],
        // watch: true, // refreshed each block, or `refetchInterval`
        refetchInterval: 30_000 // ms
    });

    async function increaseCounter() {
        if (contract) {
            const myCall: Call = contract.populate("increase_counter", [qtyForIncrease]);
            const response = await sendAsync([myCall]);
            setTransactionHash(response.transaction_hash);
            // Do not wait to update the display
            setCounter((getCounter ?? 0n) + BigInt(qtyForIncrease));
        }
    }

    useEffect(
        () => {
            setCounter(typeof counter === undefined ? undefined : BigInt(counter ?? 0n));
            return () => { }
        },
        [counter]
    );


    return (
        <div style={{
            backgroundColor: 'mediumaquamarine',
            color: 'black',
            borderWidth: '1px',
            borderRadius: 'md',
            paddingBottom: '3px',
            marginBottom: 20,
        }}
        >
            {
                typeof getCounter === undefined ? (
                    <div className='normalTextBlack' style={{ textAlign: "center" }}>
                        Fetching data ...
                    </div>
                ) : (
                    <>
                        <div
                            className='normalTextBlack'
                            style={{
                                textAlign: "center",
                                paddingTop: "4px",
                                paddingBottom: "2px",
                            }}>
                            <p style={{ fontSize: "19px" }}>
                                Counter = {(getCounter ?? "???").toString()}
                            </p>
                            <div style={{ textAlign: "center", paddingBottom: "6px" }}>
                                <button
                                    className='myButton'
                                    style={{ marginTop: "6px" }}
                                    onClick={() => {
                                        increaseCounter();
                                    }}
                                >
                                    Increase counter (+{qtyForIncrease.toString()})
                                </button>
                            </div>
                        </div>
                        {!!transactionHash && (
                            <div style={{
                                textAlign: "center",
                                backgroundColor: 'rgb(162, 244, 172)',
                                color: "black",
                                border: "3px solid rgb(29, 113, 34)",
                                borderRadius: "9px",
                                padding: 1,
                                margin: 2,
                            }}
                            >
                                <TransactionStatus transactionHash={transactionHash}></TransactionStatus>
                            </div>
                        )
                        }
                    </>
                )
            }
        </div>
    )
}
