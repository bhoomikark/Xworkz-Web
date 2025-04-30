function onClick()
{
    let doThis=document.getElementsByClassName('nameErrorClass')[0].innerHTML;
    console.log('doThis>>doThis',doThis);
    //document.getElementById('id1').innerHTML='Please provide min 10 digits';
    //console.log(id1)
}
function submitForm() {
    let isValid = true;
    let nameValue = document.registration.nameName.value;
    let emailValue = document.registration.emailName.value;
    let phoneValue = document.registration.phoneName.value;
    let ageValue = document.registration.ageName.value;
    let genderValue = document.registration.genderName.value;

    alert("Name: " + nameValue +
        "\nEmail: " + emailValue +
        "\nPhone: " + phoneValue +
        "\nAge: " + ageValue +
        "\nGender: " + genderValue);
        if (nameValue.length<3 || nameValue.length>20){
            onClick();
            isValid=false;
            setError("nameErrorId",'The name should be min 3 abd max 20');
        
            }
            else{
                clearForm("nameErrorId");
            }

    if (phoneValue.length != 10) {

        isValid = false;
        setError("numberErrorId",'The length should be 10 digits');
        
        
    }
    else{
        clearForm('numberErrorId');
    }
    //if (ageValue < 18) {
        //isValid = false;
       // setError("numberErrorId",'The age should be above 18');
       
    //}
    
   
        return isValid;


}
function setError(id,message)
{
    console.log(id);
    console.log(message);
    document.getElementById(id).innerHTML=message;
}
function clearForm(id)
{
    document.getElementById(id).innerHTML='';
}

