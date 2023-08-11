/* This is the test enviorment for Jest, it is used for development purposes only. 
If you are looking for the meat and bones of the code, you may safely ignore this 
file unless you are interested in the complete workings of this app. Feel free install 
Jest on your own machine, and borrow the code below if you are interested in giving Jest a try */

const {sortPages} = require('./report.js');
const {test,expect} =require('@jest/globals');

// Tests sorting of pages (2 pages)
test('sortPages 2', () => {
    const input = {
        'https://github.com': 1,
        'https://github.com/PhobiaGH': 3
    };
    const actual = sortPages(input)
    const expected = [
        ['https://github.com/PhobiaGH', 3],
        ['https://github.com', 1]
    ]
    expect(actual).toEqual(expected)
});

// Tests sorting of pages (5 pages)
test('sortPages 5', () => {
    const input = {
        'https://github.com': 1,
        'https://github.com/PhobiaGH/path': 2,
        'https://github.com/PhobiaGH': 3,
        'https://github.com/path': 4,
        'https://github.com/path1': 5
    };
    const actual = sortPages(input)
    const expected = [
        ['https://github.com/path1', 5],
        ['https://github.com/path', 4],
        ['https://github.com/PhobiaGH', 3],
        ['https://github.com/PhobiaGH/path', 2],
        ['https://github.com', 1]   
    ]
    expect(actual).toEqual(expected)
});