"use client";

export default function LowerBanner() {
  return (
    <div className="lowerBanner"
    >
      Powered by {" "} 
      <a style={{color:"darkblue"}} href='https://starknetjs.com' > 
      Starknet.js v6.21.0
      </a>
      {" "} and {" "}
      <a style={{color:"darkblue"}} href='https://www.starknet-react.com/docs/getting-started' > 
      starknet-react v3.7.1
      </a>
      . {" "}
      <a style={{color:"darkblue"}} href='https://github.com/PhilippeR26/Starknet-Counter-DAPP' > 
      Source code
      </a>
      .
    </div>
  )
}
