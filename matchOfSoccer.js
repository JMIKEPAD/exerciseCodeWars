

const score = ["2:4","3:2", "1:1", "3:5" ]

const score2 = ["4:4","3:1", "1:1", "3:5", "2:4", "2:1" ]

function points(games) {
    let scores=0;
    for (const game of games) {
        const number = game.split(":");
        const numberOne = parseInt(number[0]);
        const numberTwo=parseInt(number[1])
        if (numberOne > numberTwo) {
            scores+=3
        } else if (numberOne === numberTwo) {
            scores += 1
        }
        
    }

    return scores;

}

function points2(games) {
    let newArray=[];
    for (const game of games) {
        let x = game[0];
        let y = game[2];

       
        if (x > y) {
           newArray.push(3)
        } else if (x === y) {
            newArray.push(1)
        }else{
            newArray.push(0)
        }

        
    }

    return newArray.reduce((p,c)=> p+c)

}

const point3 = (games) => games.reduce((p,c)=> (c[0] > c[2]) ? (p + 3) : (c[0] === c[2]) ? (p + 1) : p, 0);



console.log(" mi aspetto 4, ho ottenuto: " + point3(score));

console.log(" mi aspetto 8, ho ottenuto: " + point3(score2));