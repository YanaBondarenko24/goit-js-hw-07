const form = document.querySelector('.login-form');



const handler = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const inputEmail = elements.email.value;
    const inputPassword = elements.password.value;
   
    
    if (inputEmail === "" || inputPassword === "") {
      return  alert('All form fields must be filled in');
    }
    const userData = {
      email : inputEmail.trim(),
      password : inputPassword.trim()
    }
    console.log(userData);
    
    event.target.reset();
}


form.addEventListener("submit", handler);

