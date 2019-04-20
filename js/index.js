const input = document.querySelector('#GetStart');
const titleText = document.querySelector('#titleText')
const firstDisplay = document.querySelector('#first')
const secondDisplay = document.querySelector('#second')
const footerDisplay = document.querySelector('#footer')

const firstStep = document.querySelector('#one')
const secondStep = document.querySelector('#two')
const thirdStep = document.querySelector('#three')
const fourthStep = document.querySelector('#four')

const firstButton = document.querySelector('#firstButton')
const secondButton = document.querySelector('#secondButton')
const thirdButton = document.querySelector('#thirdButton')
const fourthButton = document.querySelector('#fourthButton')

const firstButtonLeft = document.querySelector('#firstButtonLeft')
const secondButtonLeft = document.querySelector('#secondButtonLeft')
const thirdButtonLeft = document.querySelector('#thirdButtonLeft')

var pages = new Array(firstStep, secondStep, thirdStep, fourthStep);


function nextPage(){
  dissapear(firstButton)
  dissapear(firstStep)
  appear(secondButton)
  appear(firstButtonLeft)
  appear(secondStep)
}

function nextPage1(){
  dissapear(secondButton)
  dissapear(secondStep)
  dissapear(firstButtonLeft)
  appear(thirdButton)
  appear(secondButtonLeft)
  appear(thirdStep)
}

function nextPage2(){
  dissapear(thirdButton)
  dissapear(thirdStep)
  dissapear(secondButtonLeft)
  appear(fourthButton)
  appear(thirdButtonLeft)
  appear(fourthStep)
}

function lastPage(){
  appear(firstButton)
  appear(firstStep)
  dissapear(secondButton)
  dissapear(firstButtonLeft)
  dissapear(secondStep)
}

function lastPage1(){
  appear(secondButton)
  appear(secondStep)
  appear(firstButtonLeft)
  dissapear(thirdButton)
  dissapear(secondButtonLeft)
  dissapear(thirdStep)
}

function lastPage2(){
  appear(thirdButton)
  appear(thirdStep)
  appear(secondButtonLeft)
  dissapear(fourthButton)
  dissapear(thirdButtonLeft)
  dissapear(fourthStep)
}

function nextPage3(){
  console.log('done my nigga');
}

function start() {
  let circle = document.createElement("DIV");
  let welcome = document.createElement("P");
  let texto = document.createTextNode("Welcome");

  welcome.appendChild(texto);
  circle.appendChild(welcome);

  circle.classList.add("circle");

  document.getElementById('body').appendChild(circle);

  setTimeout(dissapear, 3000, firstDisplay);
  setTimeout(dissapear, 3000, footerDisplay);
  setTimeout(appear, 3000, secondDisplay);
}


function dissapear(param) {
  param.style.display = 'none';
  console.log('desaparecio');
}

function appear(element) {
  element.style.display = "block";
  console.log('aparecio');
}

// document.onload = dissapear(firstDisplay);
