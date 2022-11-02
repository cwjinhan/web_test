const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
//const productName = urlParams.get("product-id");
const productId = urlParams.get("product-id");

const product = getProductById(productId);
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