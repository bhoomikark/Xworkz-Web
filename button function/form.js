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

    if (phoneValue.length != 10) {

        isValid = false;
        
    }
    if (ageValue < 18) {
        isValid = false;
       
    }
    
    if (nameValue.length<3 || nameValue.length>20){
    onClick();
    isValid=false;
        
        
    }
        return isValid;

}

