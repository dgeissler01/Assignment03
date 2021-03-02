let coinFlip;

do {
    coinFlip = Math.round(Math.random()) + 0;
    if (coinFlip === 0) {
        console.log('Heads');
    } else if (coinFlip === 1) {
        console.log('Tails');
        break;
    }
} while (coinFlip !== 'Tails') ;