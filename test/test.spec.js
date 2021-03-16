const groupArrayElements = require('../index.js');
describe('groupArrayElements', () => {
    test('Returns three equal arrays', () => {
        const output =  [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
        expect(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)).toStrictEqual(output);

    });
    test('It can accept strings and floats', () => {
        const output =  [['Tim', 1000, 'John', 30], ['Bob', 'Tony', 7.6, 8.7]];
        expect(groupArrayElements(['Tim', 1000, 'John', 30, 'Bob', 'Tony', 7.6, 8.7], 2)).toStrictEqual(output);
    });
    test('It can calculate the correct remainder array', () => {
       const result = groupArrayElements(['Tim', 1000, 'John', 30, 'Bob', 'Tony', 7.6, 8.7, 23, 32], 3)
      expect(result[result.length-1]).toStrictEqual([23, 32]);
    });
    test('It returns an error when the split is not possible', () => {
        const result = groupArrayElements([], 55555)
        expect(result).toMatch(/Too few items in the array, or too many slices./);
    });
    test('It returns an error when the user inputs a string', () => {
        const result = groupArrayElements('my string', 5)
        expect(result).toMatch(/Your array is not valid- have another go/);
    });
});
