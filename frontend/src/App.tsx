import { useState } from "react";
import WalletConnector from "./components/WalletConnector";
import BridgePanel from "./components/BridgePanel";

export default function App() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold text-center">🪞 Paradox Bridge</h1>
      <p className="text-sm opacity-75">
        An illusionary crosschain bridge where reality is just a state sync.
      </p>

      {!connected ? (
        <WalletConnector onConnect={(addr) => { setAddress(addr); setConnected(true); }} />
      ) : (
        <BridgePanel address={address} />
      )}
    </div>
  );
}
