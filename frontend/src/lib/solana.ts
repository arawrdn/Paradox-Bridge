export async function connectSolanaWallet(): Promise<string> {
  const provider = (window as any).phantom?.solana;
  if (!provider?.isPhantom) throw new Error("Phantom wallet not found");
  const resp = await provider.connect();
  return resp.publicKey.toString();
}
