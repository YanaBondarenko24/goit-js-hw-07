
const bodyEl = document.querySelector('body');
const container = document.querySelector('.widget');
const btn = document.querySelector('.change-color');
const randomColor = document.querySelector('.color');

console.log(bodyEl);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }


  
  
  
  const handler = () => {
    bodyEl.style.backgroundColor =  randomColor.textContent = getRandomHexColor(); 
    

  }
  btn.addEventListener("click", handler);