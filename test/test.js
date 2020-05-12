const {expect} = require('chai');
const {performance} = require('perf_hooks');
const antennaCoverage = require('../src/index');

describe('Antenna Coverage', () => {
  it('Test case #1', () => {
    let start = performance.now()
    const result = antennaCoverage(3, 595,
      [43, 2],
      [300, 4],
      [554, 10])
    let end = performance.now()
    t1 = end - start;
    expect(result).equal(281);
  });

  it('Test case #2', () => {
    let start = performance.now()
    const result = antennaCoverage(1, 1,
      [1, 1])
    let end = performance.now()
    t2 = end - start;
    expect(result).equal(0);
  });

  it('Test case #3', () => {
    let start = performance.now()
    const result = antennaCoverage(2, 50,
      [20, 0],
      [3, 1])
    let end = performance.now()
    t3 = end - start;
    expect(result).equal(30);
  });

  it('Test case #4', () => {
    let start = performance.now()
    const result = antennaCoverage(5, 240,
      [13, 0],
      [50, 25],
      [60, 5],
      [155, 70],
      [165, 70])
    let end = performance.now()
    t4 = end - start;
    expect(result).equal(26);
  });

  it('Test case #5', () => {
    let start = performance.now()
    const result = antennaCoverage(1, 100000,
      [99998, 0])
    let end = performance.now()
    t5 = end - start;
    expect(result).equal(99997);
  });

  it('Test case #6', () => {
    let start = performance.now()
    const result = antennaCoverage(1, 100000,
      [100000, 0])
    let end = performance.now()
    t6 = end - start;
    expect(result).equal(99999);
  });

  it('Test case #7', () => {
    let start = performance.now()
    const result = antennaCoverage(1, 100000,
      [1, 0])
    let end = performance.now()
    t7 = end - start;
    expect(result).equal(99999);
  });

  it('Test case #8', () => {
    let start = performance.now()
    const result = antennaCoverage(2, 100000,
      [1, 0],
      [100000, 0])
    let end = performance.now()
    t8 = end - start;
    expect(result).equal(99999);
  });

  it('Test case #9', () => {
    let start = performance.now()
    const result = antennaCoverage(25, 100000,
      [59300, 1],
      [69213, 4],
      [76932, 3],
      [84327, 3],
      [93894, 2],
      [64725, 1],
      [87331, 1],
      [58612, 3],
      [79789, 1],
      [93768, 3],
      [59583, 5],
      [50523, 3],
      [97497, 4],
      [3051, 1],
      [79960, 0],
      [776, 5],
      [36189, 1],
      [15585, 5],
      [6881, 0],
      [54720, 0],
      [30083, 4],
      [4470, 3],
      [77336, 2],
      [96150, 1],
      [59705, 3])
    let end = performance.now()
    t9 = end - start;
    expect(result).equal(49963);
  });

  it('Test case #10', () => {
    let start = performance.now()
    const result = antennaCoverage(25, 100000,
      [3174, 736],
      [88732, 1969],
      [61424, 1015],
      [77143, 1483],
      [56805, 2063],
      [25558, 249],
      [48637, 2511],
      [68912, 63],
      [27671, 733],
      [60995, 2972],
      [6179, 2108],
      [8416, 702],
      [50179, 1554],
      [37107, 2862],
      [21129, 2673],
      [45776, 2144],
      [67145, 1674],
      [94506, 1588],
      [25711, 345],
      [46646, 2072],
      [86481, 2761],
      [60011, 2644],
      [20236, 2068],
      [52333, 1034],
      [60023, 2496])
    let end = performance.now()
    t10 = end - start;
    expect(result).equal(26632);
  });

  it('Test case #11', () => {
    let start = performance.now()
    const result = antennaCoverage(25, 100000,
      [67601, 52855],
      [66459, 75276],
      [53190, 93454],
      [5275, 6122],
      [32094, 97379],
      [17446, 70386],
      [56808, 9614],
      [55202, 88461],
      [92365, 45788],
      [2628, 72300],
      [9441, 59772],
      [9639, 14290],
      [58057, 92489],
      [97535, 38675],
      [32763, 11599],
      [33911, 80066],
      [57681, 95815],
      [68874, 34661],
      [7976, 42928],
      [95943, 72831],
      [50029, 47657],
      [99199, 86401],
      [12561, 24225],
      [23715, 50617],
      [81108, 29201])
    let end = performance.now()
    t11 = end - start;
    expect(result).equal(0);
  });

  after(function () {
    let sumTime = t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9 + t10 + t11
    console.log(' Algorithm running time = ' + sumTime)
  });
});
