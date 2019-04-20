const solve = require('./solution');

test('testcase 1', () => {
    expect(solve('132')).toBe('129');
});

test('testcase 2', () => {
    expect(solve('1000')).toBe('999');
});

test('testcase 3', () => {
    expect(solve('7')).toBe('7');
});