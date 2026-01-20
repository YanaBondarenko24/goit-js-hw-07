const container = document.querySelector('.widget');
const btn = document.querySelector('.change-color');
const randomColor = document.querySelector('.color');




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }


  
  
  
  const handler = () => {
    container.style.backgroundColor =  getRandomHexColor(); 
    randomColor.textContent = getRandomHexColor();

  }
  btn.addEventListener("click", handler);