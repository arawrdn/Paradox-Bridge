# Paradox Bridge

An illusionary crosschain bridge where reality is just a state sync.

Paradox Bridge is an experimental dApp that connects EVM and Solana networks, creating a mirrored token system. When a user “bridges” tokens, their balance is updated across both chains as a synchronized illusion — no real asset transfer occurs. It demonstrates a conceptual bridge between two decentralized realities.

## Features
- Connect EVM wallet (MetaMask, WalletConnect)
- Connect Solana wallet (Phantom)
- Simulated crosschain token bridge
- Google Sign-In for user identity binding
- Real-time mirrored state display

## Tech Stack
- Frontend: React + Vite + Tailwind
- EVM: Hardhat + Solidity
- Solana: Anchor placeholder (state sync)
- Auth: Firebase Google Sign-In
- Styling: Tailwind CSS + Framer Motion

## Smart Contracts
- EVM: MirrorToken.sol — handles mirrored token mint/burn
- Solana: mirror_program.rs — stores mirrored balance state
