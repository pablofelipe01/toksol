import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset, Text, Image } from "@chakra-ui/react";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Lbc } from "@strata-foundation/marketplace-ui";



export function SwapComponent() {
  const { id: idRaw } = useVariables();
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();


  const id = usePublicKey(idRaw);

  return <div>
      { publicKey ?
        <Swap id={id} />

        : <Image 
        src='https://i.imgur.com/uxR5RCe.png'
        alt='Tok_Sol'>
          </Image>
          
      }
          
  </div>
}

function useVariables(): { id: any; } {
  return { id: "AA9vYGyEHh6USRB98Ry3rVdYtXW9pNas9z4xj1zFVa6j"}
} 

