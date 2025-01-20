function sendMail(){
    var params={
        name:document.getElementById("Name").Value,
        email:document.getElementById("Email").Value,
        messgae:document.getElementById("Your message").Value,
          
    };
 const serviceId="service_ggshdya";
 const templateId="template_4gx0lr9"

 email.sendMail(serviceId,templateId,params)
 .then(
    res =>{
        document.getElementById("Name").Value="";
        document.getElementById("Email").Value="";
        document.getElementById("Your message").Value="";
        console.log(res);
        alert("Your message sent successfully")
        
    } )
    .catch(err =>(err));
}
    