
var getUser = (id, callback) => {
	var user = {
		id,
		name: 'Teja Kantamneni'
	};

	setTimeout(() => {
		var userObj = user;
		callback(userObj);
	}, 3000);
};

getUser(40, (data) => {
	console.log(data);
});