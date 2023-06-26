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
// Opgaveeksempel: Lav en funktion, getGreetingFor(person), der returnerer en hilsen til en person.
// Se testene nedenunder for hvordan hilsnerne skal se ud.

function getGreetingFor(person) {
	if (person !== "Daniel") {
		return "Hej " + person
	}
	if (person === "Daniel") {
		return "Du lugter"
	}
}

// Opgaveeksempel tests:
console.log("Opgaveeksempel - getGreetingFor")
test(getGreetingFor("Kristjan"), "Hej Kristjan")
test(getGreetingFor("Lasse"), "Hej Lasse")
test(getGreetingFor("Daniel"), "Du lugter")
test(getGreetingFor("asdf2341"), "Hej asdf2341")

// ---------------
// Opgave 1: Lav en funktion, getGreeting(), der returnerer "hejsa"

// Opgave 1 tests:
console.log("Opgave 1 - getGreeting:")
test(getGreeting(), "hejsa")

// ---------------
// Opgave 2: Lav en funktion, multiply(a, b), der ganger to tal sammen

// Opgave 2 tests
console.log("Opgave 2 - multiply")
test(multiply(2, 2), 4)
test(multiply(5, 10), 50)
test(multiply(-3, 4), -12)

// ---------------
// Opgave 3: Lav en funktion, getNiceGreeting(person), der returnerer en hilsen til en person
// Se testene nedenunder for hvordan hilsnerne skal se ud.

// Opgave 3 tests
console.log("Opgave 3 - getNiceGreeting")
test(getNiceGreeting("Sanna"), "Godt at se dig, Sanna!")
test(getNiceGreeting("Mamma"), "Godt at se dig, Mamma!")
test(getNiceGreeting("Farmor"), "Godt at se dig, Farmor!")
test(getNiceGreeting(""), "Godt at se dig, !")

// ---------------
// Opgave 4: Lav en funktion, sum(a,b,c), der lægger tre tal sammen

// Opgave 4 tests
console.log("Opgave 4 - sum")
test(sum(1, 1, 1), 3)
test(sum(1, 2, 3), 6)
test(sum(-1002, 647, 355), 0)

// ---------------
// Opgave 5: Lav en funktion, getSecret(password), der giver en hemmelighed, hvis den får koden '008'
// Se testene nedenunder for hvordan outputtet skal se ud.

// Opgave 5 tests
console.log("Opgave 5 - getSecret")
test(getSecret("kode"), "Forkert kode")
test(getSecret("1234"), "Forkert kode")
test(getSecret("008"), "Julemanden findes ikke")
test(getSecret(876543), "Forkert kode")

// ---------------
// Opgave 6: Lav en funktion, kilometersFromMeters(meters), der konverterer meter til kilometer

// Opgave 6 tests
console.log("Opgave 6 - kilometersFromMeters")
test(kilometersFromMeters(1000), 1)
test(kilometersFromMeters(200), 0.2)
test(kilometersFromMeters(3403), 3.403)
test(kilometersFromMeters(0), 0)
test(kilometersFromMeters(2400000), 2400)

// ---------------
// Opgave 7: Lav en funktion, describeAge(age), som returner "barn" eller "voksen",
// alt efter om alderen er under 18 eller ej

// Opgave 7 tests
console.log("Opgave 7 - describeAge")
test(describeAge(2), "barn")
test(describeAge(83), "voksen")
test(describeAge(18), "voksen")
test(describeAge(17), "barn")

// ---------------
// Opgave 8: Lav en funktion, describePerson(person, age), som beskriver om en person er barn eller voksen.
// Gør brug af describeAge() funktionen fra før til at løse opgaven.
// Se testene nedenunder for hvordan outputtet skal se ud. 

// Opgave 8 tests
console.log("Opgave 8 - describePerson")
test(describePerson("Bjørn", 26), "Bjørn er voksen")
test(describePerson("Annika", 14), "Annika er barn")
test(describePerson("Far", 63), "Far er voksen")
test(describePerson("adsgtr", 0), "adsgtr er barn")
test(describePerson("Akhzul-Molaar, Første Kejser-Konge af det Intergalaktiske Emperie,", 2004103), "Akhzul-Molaar, Første Kejser-Konge af det Intergalaktiske Emperie, er voksen")

// ---------------
// Opgave 9: Lav en funktion, ageFromBirthYear(birthYear, currentYear),
// som regner en omtrent alder ud, ud fra et fødselsår og det nuværende år.

// Opgave 9 tests
console.log("Opgave 9 - ageFromBirthYear")
test(ageFromBirthYear(1990, 2023), 33)
test(ageFromBirthYear(1960, 2023), 63)
test(ageFromBirthYear(2001, 2023), 22)

// ---------------
// Opgave 10: Lav en funktion, getOldest(personA, ageA, personB, ageB),
// som returnerer navnet på den ældste af to personer, eller "Lige gamle", hvis det er ens

// Opgave 10 tests
console.log("Opgave 10 - getOldest")
test(getOldest("Bjørn", 26, "Lasse", 29), "Lasse")
test(getOldest("Mamma", 56, "Hanne", 51), "Mamma")
test(getOldest("Val", 31, "Daniel", 31), "Lige gamle")
test(getOldest("Julemanden", 1753, "Far", 834214), "Far")
