
var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(typeof a === 'number' && typeof b === 'number'){
				resolve(a + b);
			}else{
				reject("values to add should be numbers.")
			}
		}, 1500);
	});
}

asyncAdd(3, 4).then((value) => {
	console.log("Sum:", value);
})
.catch((error) => {
	console.error(error);
});


asyncAdd(3, 'b').then((value) => {
	console.log("Sum:", value);
})
.catch((error) => {
	console.error(error);
});



// var somePromise = new Promise((resolve, reject) => {
// 	//resolve("It worked!!")
// 	reject("failed");
// });

// somePromise.then((message) => {
// 	console.log("Success:", message);
// })
// .catch((error) => {
// 	console.log(error);
// })