import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey('2wErTyZ61qgNJ3Bx6msHBijwjLhfsSczWxae9rFFZmkj')
const decoded = base58.decode('3PxcsrsGjjocSkGprAGG6N4Tx5HoWAyiMVGbppS54Y6S2h31QUH2Z2iiMW1AatQNzMXECE8MQQ1GenXbdPw5Sy43')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();