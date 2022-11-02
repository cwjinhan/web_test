//function getProductById(cw) {
function getProductByName(cw) {
		const dbData = [
		{
			id: '1',
			name: 'iPhone',
			descript: 'iPhone is...'
/*			images: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660753619946"*/
		},
		{
			id: '2',
			name: 'iPad',
			descript: 'iPad is...'
		},
		{
			id: '3',
			name: 'Mac',
			descript: 'Mac is...'
		},
		{
			id: '4',
			name: 'Macbook',
			descript: 'Macbook is...'
		},
		{
			id: '5',
			name: 'Airpod',
			descript: 'airpod is...'
		},
	];
	console.log('db data', dbData);

	if(cw) {
		return dbData.find(function(item) {
			return item.id == cw;
		});
	} else {
		return dbData;
	}
}

function getProductByName(cw) {
		const dbData = [
		{
			id: '1',
			name: 'iPhone',
			descript: 'iPhone is...'
/*			images: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660753619946"*/
		},
		{
			id: '2',
			name: 'iPad',
			descript: 'iPad is...'
		},
		{
			id: '3',
			name: 'Mac',
			descript: 'Mac is...'
		},
		{
			id: '4',
			name: 'Macbook',
			descript: 'Macbook is...'
		},
		{
			id: '5',
			name: 'Airpod',
			descript: 'airpod is...'
		},
	];
	console.log('db data', dbData);

	if(cw) {
		return dbData.find(function(item) {
			return item.name == cw;
		});
	} else {
		return dbData;
	}
}