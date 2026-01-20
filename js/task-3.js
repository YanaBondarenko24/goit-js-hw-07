const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');


const handler = (event) => {
    if(event.target.value.trim() === ""){
     return textOutput.textContent = "Anonymous";
    } 
    textOutput.textContent = event.target.value.trim();
}
 
textInput.addEventListener("input", handler);

