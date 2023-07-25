function isAdult(age) {
	return age > 17
}

function isChild(age) {
	return age < 18
}

function randomInteger(max) {
	let randomNumber = Math.random() // get a random number between 0 and 1
	let biggerNumber = randomNumber * max // multiply by max to get a number between 0 and max
	let integer = Math.floor(biggerNumber) // round down to nearest whole number
	return integer
}

function rollDie() {
	return randomInteger(6) + 1
}