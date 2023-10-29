import * as Web3 from '@solana/web3.js'
import base58 from 'bs58';
async function main() {
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: new Web3.PublicKey('2wErTyZ61qgNJ3Bx6msHBijwjLhfsSczWxae9rFFZmkj'),
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId: new Web3.PublicKey('46so8a7pLMNDJ3JuM45Ucr4UnfzoRscs5asYJfb3NG5U'),
    });

    const signature = await Web3.sendAndConfirmTransaction(
        new Web3.Connection(Web3.clusterApiUrl('devnet')),
        new Web3.Transaction().add(instruction),
        [Web3.Keypair.fromSecretKey(base58.decode('3PxcsrsGjjocSkGprAGG6N4Tx5HoWAyiMVGbppS54Y6S2h31QUH2Z2iiMW1AatQNzMXECE8MQQ1GenXbdPw5Sy43'))]
    )
    
    console.log('SIGNATURE', signature)
}

main()
.then(() => process.exit(0))
.catch(err => {
    console.error(err)
});