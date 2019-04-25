var SortedMap = require('collections/sorted-map');

function solve(N, K) {
    const map = new SortedMap();
    map.set(N, 1);

    let l, r;

    while(K > 0) {
        const keys = [...map.keys()];
        const maxKey = keys[keys.length - 1];
        const spaces = map.get(maxKey);
        map.delete(maxKey);

        l = Math.floor((maxKey - 1) / 2);
        r = Math.floor(maxKey / 2);

        map.set(l, (map.get(l) || 0) + spaces);
        map.set(r, (map.get(r) || 0) + spaces);
        K -= spaces;
    }

    return [Math.max(l, r), Math.min(l, r)];
}

const fs = require('fs');
const filePath = process.argv[2];
const lines = fs.readFileSync(filePath, 'utf-8').split('\n').filter(String).slice(1);

lines.forEach((line, i) => {
    const parts = line.split(' ').map(Number);
    const [max, min] = solve(parts[0], parts[1]);
    console.log('Case #' + (i + 1) + ': ' + max + ' ' + min);
});