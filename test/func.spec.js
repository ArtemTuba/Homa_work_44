const { getDiagonalAndTriangles, getDeterminant, replaceRow, kramarMethod} = require('../index')

describe('getDiagonalAndTriangles', () => {
    it('returns correct value for provided matrix', () => {
        const matrix = [[3,1,-7],[4,5,-2],[1,9,5]];
        const result = getDiagonalAndTriangles(matrix);
        expect(result).toBe(-179);
    });
});

describe('getDeterminant', () => {
    test('returns correct determinant for provided matrix', () => {
        const matrix = [[3,1,-7],[4,5,-2],[1,9,5]];
        const result = getDeterminant(matrix);
        expect(result).toBe(-110);
    });
});

describe('kramarMethod', () => {
    test('returns correct values for provided matrix', () => {
      const matrix = [[3,1,-7,28],[4,5,-2,19],[1,9,5,-14]];
      const result = kramarMethod(matrix);
      expect(result).toEqual({ X1: 5, X2: -1, X3: -2 });
    });
  
    test('throws error if determinant of main matrix is 0', () => {
      const matrix = [[3,1,-7,28],[6,2,-14,56],[1,9,5,-14]];
      expect(() => kramarMethod(matrix)).toThrow(Error);
    });
});
  
describe('replaceRow', () => {
    test('returns matrix with swapped rows', () => {
        const matrix = [[1,2,3],[4,5,6],[7,8,9]];
        const result = replaceRow(matrix, 0, 2);
        expect(result).toEqual([[3,2,1],[6,5,4],[9,8,7]]);
    });
});
