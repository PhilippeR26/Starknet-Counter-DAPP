"use client";

import { useState } from 'react';
import { useAccount, useDisconnect } from "@starknet-react/core";
import SelectWallet from './SelectWallet';

export default function ConnectWallet() {
    const [displaySelectWalletUI,setSelectWalletUI]=useState<boolean>(false);

    const { disconnect } = useDisconnect();
    const { address, isConnected } = useAccount();


    return (
        <>
            {!isConnected ? (
                <>
                    <button
                  className='myButton'
                        onClick={() => {
                            setSelectWalletUI(true);
                        }}
                    >
                        Connect Wallet
                    </button>
                    {displaySelectWalletUI && <SelectWallet></SelectWallet>}
                </>
            ) : (
                <>
                    {address ?
                            <button className='myButton'
                                onClick={() => {
                                    disconnect();
                                    setSelectWalletUI(false)
                                }}
                            >
                                {`Your wallet : ${address?.slice(0, 7)}...${address?.slice(-4)} is connected`
                                }
                            </button>
                        : "No address"
                    }
                </>
            )
            }
        </>
    )
}
