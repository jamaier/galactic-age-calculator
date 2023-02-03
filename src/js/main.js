export default class GalacticAge {
  constructor(pastAge, currentAge, futureAge) {
    this.pastAge = pastAge;
    this.currentAge = currentAge;
    this.futureAge = futureAge;
    this.mercurianAge = 0;
    this.venusianAge = 0;
    this.martianAge = 0;
    this.jupiterianAge = 0;
  }

  mercury() {
    this.currentAge = Math.round(this.currentAge / 0.24);
  }

  venus() {
    this.currentAge = Math.round(this.currentAge / 0.62);
  }

  mars() {
    this.currentAge = Math.round(this.currentAge / 1.88);
  }

  jupiter() {
    this.currentAge = Math.round(this.currentAge / 11.86);
  }

  yearsUntil() {

  }
}
