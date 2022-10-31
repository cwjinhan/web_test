console.log("테스트");
const myImage = document.querySelector('img');
console.log(myImage);


myImage.onclick = function() {
	console.log("이미지를 클릭했다");
	let src = myImage.getAttribute('src');
	if(src === 'images/apple-01.jpg') {
		myImage.setAttribute ('src', 'images/apple-02.jpg');
	} else {
		myImage.setAttribute ('src', 'images/apple-01.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}