
var somePromise = new Promise((resolve, reject) => {
	//resolve("It worked!!")
	reject("failed");
});

somePromise.then((message) => {
	console.log("Success:", message);
})
.catch((error) => {
	console.log(error);
})