const product = getProductById(1);
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