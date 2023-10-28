import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey('2wErTyZ61qgNJ3Bx6msHBijwjLhfsSczWxae9rFFZmkj')
const decoded = base58.decode('3PxcsrsGjjocSkGprAGG6N4Tx5HoWAyiMVGbppS54Y6S2h31QUH2Z2iiMW1AatQNzMXECE8MQQ1GenXbdPw5Sy43')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = 'FL9dLVXTA1gruQEpe7Jbv1hiMV3bd3UXMj79rPgNpynq'

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();