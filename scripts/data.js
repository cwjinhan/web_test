function getProductById(cw) {
		const dbData = [
		{
			id: '1',
			name: 'iPhone',
			descript: 'iPhone is...'
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