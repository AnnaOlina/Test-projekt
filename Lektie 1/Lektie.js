// Opsætningsfunktioner:
function getValueOf(id){
    return document.getElementById(id)?.value
}

function getFirstValueAsNumber() {
    return +getValueOf("first-value")
}

function getSecondValueAsNumber() {
    return +getValueOf("second-value")
}

function writeToElement(value) {
    document.getElementById("result").innerHTML = value
}

// Opgaveeksempel:
// lav en funktion 'writeAdditionOf', som lægger to tal sammen og udskriver resultatet vha. writeToElement()

function writeAdditionOf(a, b) {
    let result = a + b
    writeToElement("Resultatet er " + result)
}

// Opgave 1:
// lav en funktion 'writeSubtractionOf', som trækker tal fra hinanden, og udskriver resultatet vha. writeToElement()


// Opgave 2:
// lav en funktion 'writeMultiplicationOf', som ganger to tal med hinanden, og udskriver resultatet vha. writeToElement()


// Opgave 3:
// lav en funktion 'writeDivisionOf', som deler et tal med at andet, og udskriver resultatet vha. writeToElement()


// Bonus opgave:
// lav en funktion 'writePowerOf', som opløfter et tal i et andet, og udskriver resultatet vha. writeToElement()