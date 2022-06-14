var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/123.jpg') {
      myImage.setAttribute ('src','images/s1.jpg');
    } else {
      myImage.setAttribute ('src','images/123.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Введите свое имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добро пожаловать ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Привет ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
