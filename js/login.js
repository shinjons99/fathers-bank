
//* step-1: Add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    
    //* Step-2: get the email address inside the email input field
    //* Always remember to use .value to get text from an input field
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    //* step-3: get password
    //* 3.a: set id on the html element
    //*3.b: get the element
    //*3.c: get the value from the element
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    //* Do not verify email password on the client side 
    //* step-4: verify email and password and check whether valid user or not
    if(email === 'spmtam@baap.com' && password === 'secret'){
        console.log('valid user');
    }
    else{
        console.log('invalid user');
    }
})