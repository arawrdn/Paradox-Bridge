import { useState } from "react";
import { connectEvmWallet } from "../lib/evm";
import { connectSolanaWallet } from "../lib/solana";
import { googleSignIn } from "../lib/googleAuth";

export default function WalletConnector({ onConnect }: { onConnect: (addr: string) => void }) {
  const [status, setStatus] = useState("");

  async function handleEvm() {
    const addr = await connectEvmWallet();
    setStatus(`EVM connected: ${addr}`);
    onConnect(addr);
  }

  async function handleSol() {
    const addr = await connectSolanaWallet();
    setStatus(`Solana connected: ${addr}`);
    onConnect(addr);
  }

  async function handleGoogle() {
    const user = await googleSignIn();
    setStatus(`Google signed in: ${user.email}`);
  }

  return (
    <div className="flex flex-col gap-3 text-center">
      <button onClick={handleEvm} className="px-4 py-2 bg-blue-600 rounded-lg">Connect EVM Wallet</button>
      <button onClick={handleSol} className="px-4 py-2 bg-purple-600 rounded-lg">Connect Solana Wallet</button>
      <button onClick={handleGoogle} className="px-4 py-2 bg-red-500 rounded-lg">Sign In with Google</button>
      <p className="text-xs mt-2 opacity-60">{status}</p>
    </div>
  );
}
