var Button = document.querySelector('button');
var Heading = document.querySelector('h1');

function setHeading() {
    var newHeading = prompt('Please choose a new heading');
    localStorage.setItem('myHeading', newHeading);
    Heading.textContent = myHeading;
}

if(localStorage.getItem('myHeading')) { 
    Heading.textContent = myHeading;
};

Button.onclick = function() {
    setHeading();
};