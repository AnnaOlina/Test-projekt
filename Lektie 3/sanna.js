// Opsætning:
function test(result, expected) {
	if (result === expected) {
		console.log("Test klaret - " + result)
	}
	else {
		console.log("Test fejlet. Fik: " + result)
	}
}

// ---------------
// Opgaveeksempel: Lav en funktion, isLeapYear(year), der returnerer sand, når året er et skudår.
// Det er skudår, når året er deleligt med 4, bortset fra hvis det også er deleligt med 100, men ikke 400.

function isLeapYear(year) {
	if (year % 400 === 0)
		return true
	if (year % 100 === 0)
		return false
	return year % 4 === 0
}

// Opgaveeksempel tests:
console.log("Opgaveeksempel - isLeapYear")
test(isLeapYear(2023), false)
test(isLeapYear(2024), true)
test(isLeapYear(2001), false)
test(isLeapYear(2000), true)
test(isLeapYear(1900), false)
test(isLeapYear(1960), true)
test(isLeapYear(1967), false)

// ---------------
// Opgave 1: Lav en funktion, getFullName(firstName, lastName), der returnerer det fulde navn.


// Opgave 1 tests:
console.log("Opgave 1 - getFullName:")
test(getFullName("Jens", "Jensen"), "Jens Jensen")
test(getFullName("John", "John"), "John John")
test(getFullName("Karina Mariette", "Øllebølle"), "Karina Mariette Øllebølle")

// ---------------
// Opgave 2: Lav en funktion, isPositive(number), som returnerer true, hvis tallet er positivt 


// Opgave 2 tests
console.log("Opgave 2 - isPositive")
test(isPositive(-1), false)
test(isPositive(0), true)
test(isPositive(1), true)
test(isPositive(317.23), true)
test(isPositive(-999.999), false)

// ---------------
// Opgave 3: Lav en funktion, isEven(number), som returnerer true, hvis tallet er lige, ellers false.


// Opgave 3 tests
console.log("Opgave 3 - isEven")
test(isEven(0), true)
test(isEven(1), false)
test(isEven(2), true)
test(isEven(9), false)
test(isEven(678), true)
test(isEven(679), false)

// ---------------
// Opgave 4: Lav en funktion, randomNumber(max), der returnerer et tilfældigt tal mellem 0 og max
// I får brug for Math.random()


// Opgave 4 tests
console.log("Opgave 4 - randomNumber")
function testOpgave4(result, max){
	test(result < max, true)
	test(0 <= result, true)
}
testOpgave4(randomNumber(10), 10)
testOpgave4(randomNumber(789), 789)
testOpgave4(randomNumber(2), 2)

// ---------------
// Opgave 5: Lav en funktion, randomInteger(max), der returnerer et tilfældigt heltal mellem 0 og max
// I får brug for Math.random() og Math.floor()


// Opgave 5 tests
console.log("Opgave 5 - randomInteger")
function testOpgave5(result, max){
	test(result, Math.floor(result))
	test(result < max, true)
	test(0 <= result, true)
}
testOpgave5(randomInteger(10), 10)
testOpgave5(randomInteger(789), 789)
testOpgave5(randomInteger(2), 2)

// ---------------
// Opgave 6: Lav en funktion, rollDie(), der returnerer et tilfældigt tal mellem 1 og 6
// Gør brug af randomInteger() fra sidste opgave


// Opgave 6 tests
console.log("Opgave 6 - rollDie")
function testOpgave6(result){
	test(result, Math.floor(result))
	test(result < 7, true)
	test(1 <= result, true)
}
testOpgave6(rollDie())
testOpgave6(rollDie())
testOpgave6(rollDie())
testOpgave6(rollDie())

// ---------------
// Opgave 7: Lav en funktion, isTooLong(message), som returner om noget tekst er længere end 10 tegn.
// I får nok brug for at søge på hvordan man tjekker længden af en string


// Opgave 7 tests
console.log("Opgave 7 - isTooLong")
test(isTooLong("hej du"), false)
test(isTooLong("der var engang en gang"), true)
test(isTooLong(""), false)
test(isTooLong("abcdefghijklmnopqrstuvwxyzæøå"), true)

// ---------------
// Opgave 8: Lav en funktion, dayName(dayOfWeek), som får et tal mellem 0-6 som input, og returnerer navnet på den dag i ugen.
// Se testene nedenunder for hvordan outputtet skal se ud.


// Opgave 8 tests
console.log("Opgave 8 - dayName")
test(dayName(0), "Mandag")
test(dayName(2), "Onsdag")
test(dayName(4), "Fredag")
test(dayName(5), "Lørdag")

// ---------------
// Opgave 9: Lav en funktion, isMonday(daysSinceFirstMonday), som returnerer om det er Mandag efter et givet antal dage
// I får brug for at bruge % operatoren (modulus)


// Opgave 9 tests
console.log("Opgave 9 - isMonday")
test(isMonday(0), true)
test(isMonday(1), false)
test(isMonday(6), false)
test(isMonday(7), true)
test(isMonday(8), false)
test(isMonday(14), true)
test(isMonday(15), false)
test(isMonday(69), false)
test(isMonday(70), true)
