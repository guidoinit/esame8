import { Keypair ,Connection, PublicKey} from "@solana/web3.js";

import wallet from "./test.json";

import { mintTo,getOrCreateAssociatedTokenAccount, transfer } from  "@solana/spl-token";
const keypair=Keypair.fromSecretKey(new Uint8Array(wallet));
const connection= new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("jcmXoDkC46zy46ZzbEyXcXe5M2SMnXWThoVKcGKKz6H");
const fromAta=new PublicKey("5UyPkAhih8FJGZmzUyE5nu84TEEkJYoLbZHMjMYQNH1V");

const to=Keypair.generate();
console.log("To:",to.publicKey.toBase58());
(async() =>{

    const tokenAccount= await getOrCreateAssociatedTokenAccount(
        connection,
        keypair,
        mint,
        to.publicKey,


    );

    const toAta=tokenAccount.address;
    console.log("Associate tokenAccont",toAta.toBase58());

    const amount= 10e5;

    await transfer(
        connection,
        keypair,
        fromAta,
        toAta,
        keypair,
        amount
    )

    console.log("Transferred", amount, "from", fromAta.toBase58(), "to", toAta.toBase58());
})();