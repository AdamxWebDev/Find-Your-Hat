const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const rand = Math.floor(Math.random() * 10);

class Field {
    constructor(field) {
        this._field = field;
    }
    

    print() {
        //Generate Field//
        let field = this._field;              
        for (let i=0; i<field.length; i++) {
            console.log(field[i].join(""))      
        }

        //Block Variables//
        let gameCondition = "Playing"
        const playerPos = [];
        let vertPos = playerPos[0];
        let horzPos = playerPos[1];
        let posFound = false;  
    
        //Find Player Starting Position//
        while (posFound === false) {
            for (let i=0; i < field.length; i++) {            
                let arr = field[i];
                const found = arr.indexOf("*");
                if (found !== -1) {
                    playerPos[0] = i;
                    playerPos[1] = found;
                    posFound = true;
                }
            }                            
        }

        //Gameplay// 
        while (gameCondition === "Playing") {
            const horzArr = field[playerPos[0]]
            const move = prompt("Which direction would you like to go?");
            const regex = new RegExp('down|up|left|right|[a-z]', "i");
            const found = move.match(regex);
            switch (found[0].toLowerCase()) {
                case "right":
                case "r":
                    playerPos[1] += 1;
                    if (horzArr[playerPos[1]] === undefined) {
                        gameCondition = "Game Over";
                        console.log("You Lose!");
                    } else if (horzArr[playerPos[1]] === "░") {
                        horzArr[playerPos[1]] = "*";
                        for (let i=0; i<field.length; i++) {
                            console.log(field[i].join(""));  
                        }
                    } else if (horzArr[playerPos[1]] === "^") {
                        gameCondition = "Game Over";
                        console.log("You Win!");
                    } else if (horzArr[playerPos[1]] === "O") {
                        gameCondition = "Game Over";
                        console.log("You Lose!");
                    } else if (horzArr[playerPos[1]] === "*") {
                        horzArr[playerPos[1]] = "*";
                        for (let i=0; i<field.length; i++) {
                            console.log(field[i].join(""));  
                        }
                    }                                    
                break;
                case "left":
                case "l":
                    playerPos[1] -= 1;
                    if (horzArr[playerPos[1]] === undefined) {
                        gameCondition = "Game Over";
                        console.log("You Lose!");
                    } else if (horzArr[playerPos[1]] === "░") {
                        horzArr[playerPos[1]] = "*";
                        for (let i=0; i<field.length; i++) {
                            console.log(field[i].join(""));  
                        }
                    } else if (horzArr[playerPos[1]] === "^") {
                        gameCondition = "Game Over";
                        console.log("You Win!");
                    } else if (horzArr[playerPos[1]] === "O") {
                        gameCondition = "Game Over";
                        console.log("You Lose!");
                    } else if (horzArr[playerPos[1]] === "*") {
                        horzArr[playerPos[1]] = "*";
                        for (let i=0; i<field.length; i++) {
                            console.log(field[i].join(""));  
                        }
                    }                                     
                break;
                case "down":
                case "d":
                    playerPos[0] += 1;
                    var vertArr = field[playerPos[0]]
                    if (vertArr === undefined) {
                        gameCondition = "Game Over";
                        console.log("You Lose!");
                    } else if (vertArr[playerPos[1]] === "░") {
                        vertArr[playerPos[1]] = "*";
                        for (let i=0; i<field.length; i++) {
                            console.log(field[i].join(""));  
                        }
                    } else if (vertArr[playerPos[1]] === "^") {
                        gameCondition = "Game Over";
                        console.log("You Win!");
                    } else if (vertArr[playerPos[1]] === "O") {
                        gameCondition = "Game Over";
                        console.log("You Lose!");
                    } else if (vertArr[playerPos[1]] === "*") {
                        vertArr[playerPos[1]] = "*";
                        for (let i=0; i<field.length; i++) {
                            console.log(field[i].join(""));  
                        }
                    }                                     
                break;
                case "up":
                case "u":
                    playerPos[0] -= 1;
                    var vertArr = field[playerPos[0]]
                    if (vertArr === undefined) {
                        gameCondition = "Game Over";
                        console.log("You Lose!");
                    } else if (vertArr[playerPos[1]] === "░") {
                        vertArr[playerPos[1]] = "*";
                        for (let i=0; i<field.length; i++) {
                            console.log(field[i].join(""));  
                        }
                    } else if (vertArr[playerPos[1]] === "^") {
                        gameCondition = "Game Over";
                        console.log("You Win!");
                    } else if (vertArr[playerPos[1]] === "O") {
                        gameCondition = "Game Over";
                        console.log("You Lose!");
                    } else if (vertArr[playerPos[1]] === "*") {
                        vertArr[playerPos[1]] = "*";
                        for (let i=0; i<field.length; i++) {
                            console.log(field[i].join(""));  
                        }
                    }                                     
                break;
                default:
                    console.log("Invalid input try: right, r, left, l, down, d, up, or u.");
            }
        }       
    }

    generateField(width, height) {
        const randField = [];
        while (randField <= height) {
            let tempArr = []
            for (let i=0; i <= width; i++) {
                tempArr.push(fieldCharacter);
            }
            randField.push(tempArr)
        }
        this._field = randField        
    }
}

const myField = new Field([
  ['░', '*', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.print()


const running = "running";
while (running === "running"){
const playAgain = prompt("Would you like to play again?")
const regex = new RegExp('yes|[a-z]', "i");
const found = playAgain.match(regex);    
switch (found[0].toLowerCase()) {
    case "yes":
    case "y":
    myField.generateField(rand, rand);
    myField.print();  
    break;
    default:
        process.exit();
}
}
