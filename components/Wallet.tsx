import {
    ConnectionProvider,
    WalletProvider
  } from "@solana/wallet-adapter-react";
  import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter
  } from "@solana/wallet-adapter-wallets";
  import React, { FC, useMemo } from "react";
  
  export const DEFAULT_ENDPOINT = "https://young-frequent-dew.solana-mainnet.discover.quiknode.pro/b44da91d54de9da418f9579d6fbed5cf8d3d787d/"
  
  // Default styles that can be overridden by your app
  require("@solana/wallet-adapter-react-ui/styles.css");
  
  export const Wallet: FC = ({ children }) => {
 
    const wallets = useMemo(
      () => [
        new PhantomWalletAdapter(),
        // new SlopeWalletAdapter(),
        // new SolflareWalletAdapter(),
        // new TorusWalletAdapter(),
        // new LedgerWalletAdapter(),
        // new SolletWalletAdapter({}),
        // new SolletExtensionWalletAdapter({}),
      ],
      []
    );
  
  
    return (
      <ConnectionProvider endpoint={DEFAULT_ENDPOINT}>
        <WalletProvider wallets={wallets} autoConnect>
          {children}
        </WalletProvider>
      </ConnectionProvider>
    );
  };
  