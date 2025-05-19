import { Resend } from 'resend';
import dotenv from "dotenv"

dotenv.config()
if(!process.env.RESEND_API)
{
    console.log("Please Provide RESEND_API IN .env")

}

const resend = new Resend(process.env.RESEND_API);

const sendEmail= async (ToSend,subject,html)=>{
    try {
        const { data, error } = await resend.emails.send({
    from: 'comnatagrotech <onboarding@resend.dev>',
    to: ToSend,
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
