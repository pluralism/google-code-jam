/** 
 * @param {string} S
 * @param {number} K
 */
function solve(S, K) {
    let count = 0;
    const arr = S.split('');

    for(let i = 0; i < arr.length - K + 1; i++) {
        if(arr[i] === '-') {
            count++;

            for(let j = 0; j < K; j++) {
                arr[i + j] = arr[i + j] === '+' ? '-' : '+';
            }
        }
    }

    return arr.findIndex(e => e === '-') > 0 ? 'IMPOSSIBLE' : count;
}

const fs = require('fs');
const filePath = process.argv[2];
const lines = fs.readFileSync(filePath, 'utf-8').split('\n').filter(String).slice(1);

lines.forEach((line, i) => {
    const parts = line.split(' ');
    const [S, K] = [parts[0], Number(parts[1])];
    console.log('Case #' + (i + 1) + ': ' + solve(S, K));
});

module.exports = solve;