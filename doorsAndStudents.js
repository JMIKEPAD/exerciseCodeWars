function doors(studentAndDoors) {
    const doorStates = new Array(studentAndDoors).fill(false);
    for (let i = 1; i <= doorStates.length; i++) {
        for (let j = 1 * i; j <= studentAndDoors; j+=i) {
            doorStates[j-1] = !doorStates[j-1];
            
        }
        
    }
    return doorStates.reduce((p,c) => c ? p + 1 : p,0);
}

function doors2(studentAndDoors) {

    let array=[];
    let doors=false;
    let result=0;
    
    for (let i = 0; i < studentAndDoors; i++) {

        array.push(doors);     
    }

    for (let i = 0; i < studentAndDoors; i++) {
        let counter = i;
        while (counter < studentAndDoors) {
            // if (array[counter]) {
            //     array[counter]= false;
            // } else if (!array[counter]) {
            //     array[counter]=true;
            // }
            array[counter] = !array[counter];
            counter = (i + 1);
        }
        
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            result++;
        }
    }

    return result;
}

function doors3(studentAndDoors) {
    return Math.floor(Math.sqrt(studentAndDoors))
}



console.log("ci aspettiamo 2, ho ottenuto: " + doors2(5));