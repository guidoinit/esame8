import { Keypair ,Connection, PublicKey} from "@solana/web3.js";

import wallet from "./test.json";

import { mintTo,getOrCreateAssociatedTokenAccount } from  "@solana/spl-token";
const keypair=Keypair.fromSecretKey(new Uint8Array(wallet));
const connection= new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("ACfdVhNyeXCPJ7uqMTs7LXsToxd47aEMdvs5wkquzS2");

(async() =>
    {
        
            const tokenAccount=await getOrCreateAssociatedTokenAccount(
                connection,
                keypair,
                mint,
                keypair.publicKey,
            );
            const ata=tokenAccount.address;

            console.log("TokenAccount:",  ata.toBase58());

            const amount=10e6;

            await mintTo (
                connection,
                keypair,
                mint,
                ata,
                keypair.publicKey,
                amount,
            )
           
            console.log("Minted", amount, "to", ata.toBase58());
        
    })();


