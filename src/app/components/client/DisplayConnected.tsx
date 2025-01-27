"use client";

import { constants } from "starknet";
import { useAccount, useNetwork } from "@starknet-react/core";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import PlayWithCairo from "./Contract/PlayWithCairo";


export function DisplayConnected() {
    const { chain } = useNetwork();
    const { address } = useAccount();

    return (
        <>
            <div style={{ textAlign: "center", paddingBottom: "5px" }}>
                <ConnectWallet></ConnectWallet>
            </div>
            {address && (
                <>
                    <br />
                    {
                        chain.id === BigInt(constants.StarknetChainId.SN_SEPOLIA) ? <>
                            <PlayWithCairo></PlayWithCairo>
                        </> : <div 
                        className="textStyle"
                        style={{color:"orangered"}}
                        >
                            Wrong network. Change to Sepolia Testnet network.
                        </div>
                    }

                </>
            )
            }
        </>
    )
}