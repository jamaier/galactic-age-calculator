
export default class GalacticAge {
  constructor(pastAge, currentAge, futureAge) {
    this.pastAge = pastAge;
    this.currentAge = currentAge;
    this.futureAge = futureAge;
  }

  mercury() {
    this.pastAge = Math.round(this.pastAge / .24);
    this.currentAge = Math.round(this.currentAge / .24);
    this.futureAge = Math.round(this.futureAge / .24);
  }

  venus() {
    this.pastAge = Math.round(this.pastAge / .62);
    this.currentAge = Math.round(this.currentAge / .62);
    this.futureAge = Math.round(this.futureAge / .62);
  }

}

