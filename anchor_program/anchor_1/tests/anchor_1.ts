import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Anchor1 } from "../target/types/anchor_1";
import { keypairIdentity } from "@metaplex-foundation/js";

describe("anchor_1", () => {
  // Configure the client to use the local cluster.
 //const my_keypair = new ed
  anchor.setProvider(anchor.AnchorProvider.env());
  const provider = anchor.getProvider();
  const program = anchor.workspace.anchor_1 as Program<Anchor1>;
  const keypair = anchor.web3.Keypair.generate();


  //   pub fn initialize(
  //     ctx: Context<Initialize>,
  //     first_name: String,
  //     last_name: String,
  // ) -> Result<()> {
  //     let customer: &mut Account<'_, Customer> = &mut ctx.accounts.customer;
  //     customer.first_name = first_name;
  //     customer.last_name = last_name;
  //     Ok(())
  // }

  // pub customer: Account <'info, Customer>,
  // pub signer: Signer <'info, >,
  // pub system_program: Program <'info, System>,

  it("Is initialized!", async () => {
    const firstName = "John"
    const lastName = "Doe"

    // Add your test here.

    console.log("The provider is:", provider);
    const tx = await program.methods.initialize(firstName, lastName).accounts({
      customer: keypair.publicKey,
      signer: provider.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    }).signers([keypair]).rpc();

    const customerAccount = await program.account.customer.all();
    console.log("Customer accs inside my program {customerAccount}");
    // console.log("Your transaction signature", tx);
  });
});
