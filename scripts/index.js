const productList = getProductById();
		// ul 태그 렌더링을 위한 값 초기화
	let productHtml = "";
	productList.forEach(function(product) {

		console.log('product', product);
		productHtml = productHtml + `
			<li><a href="product.html?product-id=${product.id}">${product.name}</a></li>`;
	//	console.log('product.id', product.id);
	//	console.log('product.name', product.name);
	//	html = "<li><a href=''>iphone</a></li>"

	});

	document.getElementById("list").innerHTML = productHtml;