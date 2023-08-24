alertify.set('notifier','position', 'top-right');   
   function validation(){
    var user=document.getElementById('user').value;
   var address=document.getElementById('address').value;
     var contact=document.getElementById('contact').value;
    var email=document.getElementById('email').value;

    if((user.length<=2) || (user.length>40)){
        alertify.error("**Name should be between 2-40 charcter");
        return false;
    }
    if(!isNaN(user))
    {
    alertify.error("**Name should be character");
    return false;  
    }
     if(isNaN(contact)){
        alertify.error("**number should be  on digit only");
   return false;
   }
   if(contact.length<=7){
    alertify.error("**number must be greater than 7digit");
     return false;
 }
   
     if(email.indexof('@')<=0){
        alertify.error("@ should be after character");
   return false;
   }
}
