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


function lottotal() {
	let tal1 = randomInteger(36) + 1
	let tal2 = randomInteger(36) + 1
	let tal3 = randomInteger(36) + 1
	let tal4 = randomInteger(36) + 1
	let tal5 = randomInteger(36) + 1
	let tal6 = randomInteger(36) + 1
	let tal7 = randomInteger(36) + 1
	return "lottotal: " + tal1 + ", " + tal2 + ", " + tal3 + ", " + tal4 + ", " + tal5 + ", " + tal6 + ", " + tal7 
}