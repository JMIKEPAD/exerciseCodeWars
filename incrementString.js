

// ciclare al contrario sulla stringa 
// Controllo l'ultimo carattere della stringa.
// se non è un numero return la string + "1"
// se invece è un numero devo contrallare il penultimo e così via
// quando trovo il primo carattere non numero taglio la sotto stringa da indice + 1;
// parso la sotto stringa 
// aumento il valore parsato di 1
// return una string composta dalla sotto stringa da 0 a indice + il numero incrementato  



function incrementString(string) {
    let lastChar=string[string.length - 1];
    if (isNaN(lastChar)) {
        return string + 1;
    }

    let indexNaN;
    for (let i = string.length - 2; i >= 0; i--) {
        if (isNaN(string[i])) {
            indexNaN = i;
            break;
        }
        
    }

    let partialString = string.substring(0, indexNaN + 1);
    let stringNumber = string.substring(indexNaN + 1);
    const number = parseInt(stringNumber);
    const incrementedNumber = number + 1;
    return partialString + incrementedNumber;


}

function incrementString(string) {

    const regex = RegExp(/\d+$/);

    const searchResult = regex.exec(string);

    let numberFoundString;

    if (!searchResult) {

        return string + 1;

    } else {

        numberFoundString = searchResult[0];

    }

const numberInt = parseInt(numberFoundString);

return string.substring(0, string.length-numberFoundString.length) + (numberInt + 1);
}



console.log("mi aspetto 'montagna89', ho ottenuto: " + incrementString("montagna88"));
console.log("mi aspetto 'montagna1', ho ottenuto: " + incrementString("montagna"));
console.log("mi aspetto '55montagna1', ho ottenuto: " + incrementString("55montagna"));