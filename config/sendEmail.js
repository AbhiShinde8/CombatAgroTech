import { Resend } from 'resend';
import dotenv from "dotenv"

dotenv.config()
if(!process.env.RESEND_API)
{
    console.log("Please Provide RESEND_API IN .env")

}

const resend = new Resend(process.env.RESEND_API);

const sendEmail= async ({to,subject,html})=>{
    try {
        const { data, error } = await resend.emails.send({
    from: 'Combat AgroTech <onboarding@resend.dev>',
    to: to,
    subject: subject,
    html: html
});
if (error) {
    return console.error({ error });
  }
        
    } catch (error) {
        console.log(error)
        
    }




}
export default sendEmail;
