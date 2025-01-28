"use client";

import { GetTransactionReceiptResponse, json, type RejectedTransactionReceiptResponse, type RevertedTransactionReceiptResponse, type SuccessfulTransactionReceiptResponse } from "starknet";
import { useTransactionReceipt } from '@starknet-react/core';

type Props = { transactionHash: string };

export default function TransactionStatus({ transactionHash }: Props) {
    const { data: txR } = useTransactionReceipt({ hash: transactionHash, refetchInterval: 5_000 });

    function formatTxR(txR: GetTransactionReceiptResponse): string {
        let finality: string = "";
        txR.match({
            success: (txR: SuccessfulTransactionReceiptResponse) => {
                finality = txR.finality_status;
            },
            rejected: (txR: RejectedTransactionReceiptResponse) => {
                finality = json.stringify(txR.transaction_failure_reason);
            },
            reverted: (txR: RevertedTransactionReceiptResponse) => {
                finality = txR.finality_status;
            },
            error: (err: Error) => {
                finality = err.message;
            },
            _: () => {
                console.log('Unsuccess');
            },
        });
        return txR.statusReceipt + "→" + finality;
    }


    return (
        <>
            <div 
            className="normalTextBlack" 
            style={{
                padding:"4px", 
                margin:"5px",
            }}>Transaction is : {" "}
                {!txR ?
                    <>Processing</>
                    : formatTxR(txR)}
            </div>
        </>
    )
}
