"use server";

import Image from 'next/image'
import * as CSS from 'csstype';
import "./custom.css";

import starknetReactImg from "./Images/starknet-logo.svg";
import { DisplayConnected } from './components/client/DisplayConnected';
import LowerBanner from './components/client/LowerBanner';

export default async function Page() {
    const align: "left" | "center" | "right" = "center";
    const titleStyle: CSS.Properties = {
        color: 'rgb(20, 14, 75)',
        fontSize: "24px",
        fontFamily: 'sans-serif',
        fontWeight: '500',
        textAlign: align,
        padding: "20px",
    }


    return (
        <div>
            <div className='titleBar' style={titleStyle}>
                <div>
                    <Image
                        src={starknetReactImg}
                        alt='starknet.js'
                        height={40}
                    />
                </div>
                counter APP
            </div>
            <div className="textStyle">
                Please connect to Sepolia Testnet network
                
            </div>
            <DisplayConnected></DisplayConnected>
                
                <LowerBanner></LowerBanner>
        </div >
    )
}

