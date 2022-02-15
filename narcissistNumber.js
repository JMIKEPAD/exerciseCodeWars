


function isNarcissistic(number) {
    let stringNumber = number + "";

    let pow = stringNumber.length;

    let sum = 0;

    for (let i = 0; i < stringNumber.length; i++) {
        const char = stringNumber[i];
        const intNumber = parseInt(char)
        const result = Math.pow(intNumber,pow) 
        sum += result;
    }
    return sum === number; 
}

function isNarcissistic2(value) {
    const string = value.toString();
    const result = [];
    const len= string.length;
    for (let i = 0; i < string.length; i++) {
        const digit = string[i];  
        result.push(Math.pow(digit,len))
        
    }
    const finalrisult=result.reduce((a,b)=> a + b, 0);
    return finalrisult === value;
}

function isNarcissistic3(number) {
    return number === [...(number + "")].reduce((p,c,_,a) => p + Math.pow(c,a.length),0);
}



console.log("mi aspetto true, ho ottenuto: " + isNarcissistic3(153));
console.log("mi aspetto false, ho ottenuto: " + isNarcissistic2(151));
console.log("mi aspetto true, ho ottenuto: " + isNarcissistic2(370));
console.log("mi aspetto false, ho ottenuto: " + isNarcissistic2(1936));
console.log("mi aspetto true, ho ottenuto: " + isNarcissistic2(407));