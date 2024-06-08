import { Keypair ,Connection,LAMPORTS_PER_SOL} from "@solana/web3.js";

import wallet from "./test.json";


const keypair=Keypair.fromSecretKey(new Uint8Array(wallet));

const connection= new Connection("https://api.devnet.solana.com", "confirmed");

(async() =>
{
    try{
        const airdropSign=await connection.requestAirdrop(keypair.publicKey,LAMPORTS_PER_SOL);
        console.log("Airdrop Signature:",  airdropSign);
        console.log('SUCCESS: check your TX here: https://explorer.solana.com/tx/${airdropSign}?cluster=devnet');   


    }catch(error){
        console.log(error);

    }
})();