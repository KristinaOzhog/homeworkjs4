const rl = require('readline').createInterface(process.stdin, process.stdout);

let numberToGuess = Math.floor(Math.random() * 1000)
let countTry = 0;

console.log('Загаданное число:', numberToGuess)

function questionToGuess(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (data) => {
            resolve(data);
        })
    })

}

async function guessGame() {
    while (true) {
        countTry += 1;
        console.log('Попытка №:', countTry);

        const numberFromUser = await questionToGuess('Введите число от 0 до 999 или q для выхода:')

            if (numberFromUser == 'q') {
                console.log('Пока!=)');
                rl.close();
                return;
            } else if (isNaN(numberFromUser) || !(numberFromUser >= 0 && numberFromUser <= 999)){
                console.log('Вы введи не число от 0 до 999!');
            } else if (+numberFromUser == numberToGuess) {
                console.log('Вы угадали! Количество попыток:', countTry);
                rl.close();
                return;
            } else if (+numberFromUser > numberToGuess) {
                console.log('Меньше.')
            } else if (+numberFromUser < numberToGuess) {
                console.log('Больше.')
            }
    
    }
}

guessGame();


