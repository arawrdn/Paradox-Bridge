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

## Roadmap

1. **Foundation and MVP**
   - Finalize core smart contracts for mirrored token logic
   - Deploy EVM contracts on Base Mainnet
   - Implement Solana program for mirrored state sync
   - Build basic frontend with wallet support (MetaMask, Phantom)
   - Establish Google Sign-In integration

2. **User Experience Improvements**
   - Improve UI/UX and state sync feedback
   - Add real-time balance updates and network status
   - Provide error handling and clear user messaging

3. **Bridge Simulation Enhancements**
   - Expand simulated crosschain flows (deposit, withdrawal)
   - Add history and event logs for user transactions
   - Improve state reconciliation between EVM and Solana

4. **Token and Economy Features**
   - Design utility token for user engagement
   - Introduce bridge usage rewards or incentives
   - Add analytics dashboard for usage metrics

5. **Security and Testing**
   - Write comprehensive test suites (Hardhat / Anchor)
   - Perform internal audits on contract logic
   - Establish monitoring and alerting for state sync

6. **Expansion**
   - Support additional EVM chains (test crosschain logic)
   - Add community governance features
   - Extend documentation and developer guides
