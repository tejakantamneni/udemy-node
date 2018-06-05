
console.log("Starting App...");

setTimeout(() => {
	console.log("setTimeout Callback Executed...");
}, 2 * 1000);

setTimeout(() => {
	console.log("Timeout with zero delay...");
}, 0)

console.log("Closing App...");