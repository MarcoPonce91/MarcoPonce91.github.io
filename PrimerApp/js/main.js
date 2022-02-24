let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === '/PrimerApp/img/imagen-machao.jpg') {
    myImage.setAttribute('src', '/PrimerApp/img/manchao2.jpg');
  } else {
    myImage.setAttribute('src', '/PrimerApp/img/imagen-machao.jpg');
  }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bienvenido a Cumbre Cerro el Manchao :' + storedName;
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Bienvenido a Cumbre Cerro el Manchao : ' + myName;
  }
}

myButton.onclick = function () {
  setUserName();
}