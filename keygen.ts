import { Keypair } from "@solana/web3.js";

// Genera una nuova Keypair
const keypair = Keypair.generate();

console.log("Public key:",keypair.publicKey.toBase58());
console.log("Private Key:",keypair.secretKey.toString());