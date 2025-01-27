"use client";

import { SquareArrowOutUpRight } from 'lucide-react';

export default function LowerBanner() {
  return (
    <div className="lowerBanner"
    >
      Powered by {" "} 
      <a style={{color:"darkblue"}} href='https://starknetjs.com' > 
      Starknet.js v6.21.0<SquareArrowOutUpRight  height={20}/>
      </a>
      {" "} and {" "}
      <a style={{color:"darkblue"}} href='https://www.starknet-react.com/docs/getting-started' > 
      starknet-react v3.7.1<SquareArrowOutUpRight height={20} />
      </a>
      . {" "}
      <a style={{color:"darkblue"}} href='https://github.com/PhilippeR26/Starknet-Counter-DAPP' > 
      Source code<SquareArrowOutUpRight  height={20}/>
      </a>
      .
    </div>
  )
}