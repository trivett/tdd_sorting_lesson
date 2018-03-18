const { sorter } = require('../utils/sorter');

const unsorted = [100.5, -40.7, 40000, -160, 30, 7, (3 / 5), Number((6 / 7).toPrecision(2)), -0, 6e2];
const sorted = [-160, -40.7, -0, 0.6, 0.86, 7, 30, 100.5, 600, 40000];

describe('Bubble sort', () => {
  it('sorts an array in ascending order', () => {
    expect(sorter(unsorted)).toEqual(sorted);
  });

  it('sorts an array in descending order', () => {
    let descending = sorted.reverse();
    expect(sorter(unsorted, 'DESC')).toEqual(descending);
  });
});
