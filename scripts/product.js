const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
//const productName = urlParams.get("product-id");
const productName = urlParams.get("product-name");

const product = getProductByName(productName);
console.log('find product', product);

const {
	name,
	descript,
} = product;

console.log('before document.querySelector("#h1").innertext', document.querySelector("#h1").innertext);

document.querySelector("#title").innerText = name;
document.querySelector("h1").innerText = name;

console.log('before document.querySelector("#descript").innertext', document.querySelector("#descript").innertext);

document.querySelector("#descript").innerHTML = descript;