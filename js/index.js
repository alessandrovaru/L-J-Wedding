const input = document.querySelector('#GetStart');
const titleText = document.querySelector('#titleText')
const firstDisplay = document.querySelector('#first')
const secondDisplay = document.querySelector('#second')
const footerDisplay = document.querySelector('#footer')

const firstStep = document.querySelector('#one')
const secondStep = document.querySelector('#two')
const thirdStep = document.querySelector('#three')
const fourthStep = document.querySelector('#four')



function presentationSteps() {

  if (firstStep.style.display === 'block') {
    firstStep.style.display = 'none';
    secondStep.style.display = 'block';
    console.log('sisa');
  }else {
    console.log('nolsa');
  }

  if (secondStep.style.display === 'block') {
    secondStep.style.display = 'none';
    thirdStep.style.display = 'block';
    console.log('sisa');
  }else {
    console.log('nolsa');
  }

  if (thirdStep.style.display === 'block') {
    thirdStep.style.display = 'none';
    fourthStep.style.display = 'block';
    console.log('sisa');
  }else {
    console.log('nolsa');
  }





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

document.onload = dissapear(firstDisplay);
