const forgotPasswordTemplet=({name,otp})=>{
    return `
    <div>
    <p>Dear,${name}</p>
    <p>You're requsted a password reset. Please use following OTP code to reset your password.</p>

    <div style="background:yellow;font-size:20px margin:20px">
    ${otp}
    </div>
        <p>This OTP is valid for 1 Hour only.Enter this otp in the CombatAgroTech website to proceed with resetting your password.  </p>
        <br/>
        </br>
        <p>Thanks</p>
        <p>Combat AgroTech</p>
        </div>

    `

}

export default forgotPasswordTemplet;