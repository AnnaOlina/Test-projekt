let listA = ["rend", "og", "hop", "hest"]
let listB = ["en", "ny", "liste", "med", "ord"]
let list = listB

let counter = 0


while (counter < list.length) {
	console.log(list[counter])
	counter = (counter + 1)
}

console.log("hest")
console.log(list[3])

console.log("hop")
console.log(list[2])

console.log("hest" + "hop")
console.log(list[3] + " " + list[2])

let tekst = list[3] + " " + list[2]
console.log(tekst)

let sætning = "" // definer/opret variablen "sætning" og giv den værdien "" (tom tekst)

let index = 0 // definer/opret variablen "index" og giv den værdien 0
while (index < list.length) { // start en while løkke. Så længe "index < list.length" evaluerer til true, så kører den koden i { }
	sætning = sætning + list[index] + " " // evaluer "værdi + list[index] + " "" og gem det i variablen "sætning"
	index = index + 1 // evaluer "index + 1" og gem det i variablen "index"
}

console.log(sætning) // hent værdien fra variablen "sætning" og log det i konsollen