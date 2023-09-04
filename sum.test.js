const sum = require('./sum');

test('teste de soma 5+8 tem que ser igual a 13 ', () => {
    expect(sum(5,8)).toBe(13);
});