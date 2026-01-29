import { useState } from "react";

export default function BridgePanel({ address }: { address: string }) {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  function handleBridge() {
    setMessage(`Bridging ${amount} MIRR from EVM to Solana...`);
    setTimeout(() => {
      setMessage(`State mirrored successfully! Illusion complete.`);
    }, 2000);
  }

  return (
    <div className="text-center space-y-3">
      <p className="text-sm">Connected as {address}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="px-3 py-2 rounded bg-gray-800 text-white"
        placeholder="Enter amount"
      />
      <button onClick={handleBridge} className="px-4 py-2 bg-green-600 rounded-lg">
        Bridge to Solana
      </button>
      <p className="text-xs opacity-70 mt-2">{message}</p>
    </div>
  );
}
