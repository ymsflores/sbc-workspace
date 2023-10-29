use anchor_lang::prelude::*;

declare_id!("21HZ9J3kfvAE1BSZ55Hq3RSMF1c9QpgLmESW9bm8Y73g");

#[program]
pub mod anchor_1 {
    use super::*;

    // pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
    //     Ok(())
    // }

    pub fn initialize(
        ctx: Context<Initialize>,
        first_name: String,
        last_name: String,
    ) -> Result<()> {
        let customer: &mut Account<'_, Customer> = &mut ctx.accounts.customer;
        customer.first_name = first_name;
        customer.last_name = last_name;
        Ok(())
    }
}

// 1. Create PDA (responsible for creating accounts)
// 2. Create account (think tables in mysql)
// 3. Updating the initialize function
// 4. test anchor program
// 5. deploy anchor program to devnet

#[derive(Accounts)]
pub struct Initialize<'info>{
    pub customer: Account <'info, Customer>,
    pub signer: Signer <'info, >,
    pub system_program: Program <'info, System>,
}

#[account]
pub struct Customer{
    pub first_name: String,
    pub last_name: String,
}
