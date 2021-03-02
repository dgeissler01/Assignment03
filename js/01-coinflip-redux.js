let coinFlip;
let games = window.prompt('How many times would you like to play?');

for (let i = 0; i < games; i++) {
    coinFlip = Math.round(Math.random()) + 0;
    if (coinFlip === 0) {
        console.log('Heads');
    } else if (coinFlip === 1) {
        console.log('Tails');
    }
}