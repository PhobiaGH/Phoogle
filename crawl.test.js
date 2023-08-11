const {normalizeURL} = require('./crawl.js');
const {test,expect} =require('@jest/globals');

// Tests that the protocol gets stripped
test('normalizeURL strip protocol', () => {
    const input = 'https://github.com/PhobiaGH/'
    const actual = normalizeURL(input)
    const expected = 'github.com/PhobiaGH'
    expect(actual).toEqual(expected)
});

// Tests that trailing shashes get stripped from output
test('normalizeURL strip trailing slashes', () => {
    const input = 'http://github.com/PhobiaGH/'
    const actual = normalizeURL(input)
    const expected = 'github.com/PhobiaGH'
    expect(actual).toEqual(expected)
});

// Tests that http protocol doesn't break anything
test('normalizeURL strip s from https', () => {
    const input = 'http://github.com/PhobiaGH/'
    const actual = normalizeURL(input)
    const expected = 'github.com/PhobiaGH'
    expect(actual).toEqual(expected)
});

// Tests that capitals get changed to lowercase
test('normalizeURL capitals', () => {
    const input = 'https://GITHUB.com/PhobiaGH/'
    const actual = normalizeURL(input)
    const expected = 'github.com/PhobiaGH'
    expect(actual).toEqual(expected)
});
