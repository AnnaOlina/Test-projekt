// Funktion som returnerer resultatet af a + b
function addNumbers(a, b) {
    let result = a + b
    return result
}

let x = addNumbers(10, 4)

// Sammenlign størrelse på a og b
let a = 100
let b = 200

if (b > a){
    console.log("Hvis b er større end a")
}
if (a > b) {
    console.log("Hvis a er større end b")
}
console.log("")


// Udskriv tekst som fortæller hvilken parameter der har den største værdi
function compare(a, b) {
    if (b > a) {
        console.log("Andet tal er størst")
    }
    if (a > b) {
        console.log("Første tal er størst")
    }
    if (a === b) {
        console.log("Tallene er ens")
    }
}

// Tests:
compare(90, 100) // skal vise "Andet tal er størst"
compare(2, -17) // skal vise "Første tal er størst"
compare(2.65, 2.66) // skal vise "Andet tal er størst"
compare(10, 10) // skal vise "Tallene er ens"
