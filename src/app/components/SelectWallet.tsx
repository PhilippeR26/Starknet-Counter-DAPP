"use client";

import { useConnect } from "@starknet-react/core";


export default function SelectWallet() {
  const { connect, connectors, status } = useConnect();

  return (
    <div >
      <div style={{ paddingTop: "10px" }}>
        {connectors.map((connector) => (
          <button
            className="walletButton"
            style={{ margin: "3px" }}
            key={connector.id}
            onClick={() => {
              connect({ connector });
            }}
            disabled={status === "pending"}
          >
            {connector.name}
          </button>
        ))}
      </div>
    </div>
  );
}

