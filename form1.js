function validate()
{
    let value=true;
    names=document.formName.nameName.value;
    email=document.formName.emailName.value;
    address=document.formName.addressName.value;
    phone=document.formName.phoneName.value;
    password=document.formName.passwordNum.value;
    confirmPassword=document.formName.confirmpasswordNum.value;
   

    if(names.length>10)
    {
       
        alert('not successful')
        value=false;

    }
   if(email.length > 25)
   {
    alert("Email too long")
    value=false;
   }
   if(address.length>50)
   {
    alert('Address too long')
    value=false;
   }
    if (phone.length !== 10) {
        alert('Phone number must be 10 digits');
        isValid = false;
    }


    if (password !== confirmPassword) {
        alert('Passwords do not match');
        isValid = false;
    }
    return value;
    
}