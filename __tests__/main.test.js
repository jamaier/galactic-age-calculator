/* eslint-disable no-undef */

import GalacticAge from './../src/js/main';

describe('GalacticAge', () => {
  
  test('display past, current and future birthdays', () => {
    const galacticAge = new GalacticAge(5, 31, 59);
    expect(galacticAge.pastAge).toEqual(5);
    expect(galacticAge.currentAge).toEqual(31);
    expect(galacticAge.futureAge).toEqual(59);
  });


});

