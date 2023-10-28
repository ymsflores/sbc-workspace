import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('2wErTyZ61qgNJ3Bx6msHBijwjLhfsSczWxae9rFFZmkj')
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main()