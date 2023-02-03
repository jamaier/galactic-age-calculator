/* eslint-disable no-undef */

import GalacticAge from "./../src/js/main";

describe("GalacticAge", () => {
  let galacticAge;
  beforeEach(() => {
    galacticAge = new GalacticAge(10, 31, 59);
  });

  test("display current age", () => {
    // expect(galacticAge.pastAge).toEqual(10); //comment out for refactoring
    expect(galacticAge.currentAge).toEqual(31);
    // expect(galacticAge.futureAge).toEqual(59); //comment out for refactoring
  });

  test("should convert to current murcurian age.", () => {
    galacticAge.mercury();
    // expect(galacticAge.pastAge).toEqual(42); //comment out for refactoring
    expect(galacticAge.currentAge).toEqual(129);
    // expect(galacticAge.futureAge).toEqual(246); //comment out for refactoring
  });

  test("should convert to current Venusian age.", () => {
    galacticAge.venus();
    // expect(galacticAge.pastAge).toEqual(16); //comment out for refactoring
    expect(galacticAge.currentAge).toEqual(50);
    // expect(galacticAge.futureAge).toEqual(95); //comment out for refactoring
  });

  test("should convert to current Martian age.", () => {
    galacticAge.mars();
    // expect(galacticAge.pastAge).toEqual(5); //comment out for refactoring
    expect(galacticAge.currentAge).toEqual(16);
    // expect(galacticAge.futureAge).toEqual(31); //comment out for refactoring
  });

  test("should convert to current Jupiterian age.", () => {
    galacticAge.jupiter();
    // expect(galacticAge.pastAge).toEqual(1); //comment out for refactoring
    expect(galacticAge.currentAge).toEqual(3);
    // expect(galacticAge.futureAge).toEqual(5); //comment out for refactoring
  });

  test("should show the difference between ages since current age", () => {
    let futureAge = galacticAge.yearsUntil();
    expect(futureAge).toEqual(117); //using mercury for the first test
  });
});