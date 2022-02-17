// width sempre dispari
///root è la width

// 3       
// 121     
// => 7

// 5       
// 343     
// 12321   
// =>24

// 7       
// 565     
// 34543   
// 1234321 
//=> 58


function mountainsOfAhoiyama(width) {
    
    let startingNumber = 0;

    let actualWidth = width;

    let array = [];

    

while (actualWidth > 0) {

    let actualNumber = startingNumber;

    for (let i = 0; i < actualWidth; i++) {

       if (i <= actualWidth / 2) {
           actualNumber++;
       } else{
           actualNumber--;
       }
        array.push(actualNumber);
    }
    actualWidth = actualWidth - 2;
    startingNumber = startingNumber + 2;


}
return array.reduce(( p, c ) => p + c);
}


function mountainsOfAhoiyama2(width) {
   
return (width+1) * (width ** 2 + 2 + width)/8
}



console.log("mi aspetto 7, ho ottenuto: ", mountainsOfAhoiyama2(3));
console.log("mi aspetto 24, ho ottenuto: ", mountainsOfAhoiyama2(5));
console.log("mi aspetto 58, ho ottenuto: ", mountainsOfAhoiyama2(7));