const solve = require('./solution');

test('testcase 1', () => {
    const S = '---+-++-';
    const K = 3;

    expect(solve(S, K)).toBe(3);
});

test('testcase 2', () => {
    const S = '+++++';
    const K = 4;

    expect(solve(S, K)).toBe(0);
});

test('testcase 3', () => {
    const S = '-+-+-';
    const K = 4;

    expect(solve(S, K)).toBe('IMPOSSIBLE');
});