


function primeTo(number) {

    const primeNumbers = [2]
    
    for (let i = 3; i <= number; i++) {
        let numberToCheck = i;
        let isPrime = true;
        for (const prime of primeNumbers) {
            if (numberToCheck % prime === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeNumbers.push(numberToCheck);
        }
        
    }

    return primeNumbers;
}


function primeTo3(number) {
    return [...new Array (number + 1 ).keys()].filter(function(x) {     
        let counter = 2;
        for (let i = 2; i <= x; i++) {
            if (x % i !== 0) {
                counter++
            }
            
        }
        if (counter === x && x !==0) {
            return true;
        }
    })
}

function primeTo4(number) {
   let array = Array.from({length: number - 2}, (v,i)=> i + 3);
   return array.reduce(( p, c) => p.some(e => c % e === 0) ? p : [...p, c],[2]);
}

function primeTo5(number) {
    let array = Array.from({length: number - 1}, (v,i)=> i + 2);
   return array.filter(c => !array.some(e => (c % e ===0 && c !== e)));

}

console.log("mi aspetto [2,3], ho ottenuto: ", primeTo5(3));
console.log("mi aspetto [2,3,5], ho ottenuto: ", primeTo5(5));
console.log("mi aspetto [2,3,5,7,11], ho ottenuto: ", primeTo5(11));
