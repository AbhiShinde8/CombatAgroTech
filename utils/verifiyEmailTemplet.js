const verifiyEmailTemplet=({name,url})=>{
    return`
    <p>Dear ${name}</P>
    <p>Thank you for registering Combat Agro Tech</P>
    <a href=${url} style="color:white;background:blue;margin-top:10px">Verifiy Email</a>
    `

}

export default verifiyEmailTemplet;