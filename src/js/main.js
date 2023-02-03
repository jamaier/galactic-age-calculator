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
    let futureYears = this.futureAge - this.currentAge;
    let futureMurcury = Math.round(futureYears / 0.24);
    this.mercurianAge += futureMurcury;
    let futureVenus = Math.round(futureYears / 0.62);
    this.venusianAge += futureVenus;
    let futureMars = Math.round(futureYears / 1.88);
    this.martianAge += futureMars;
    let futureJupiter = Math.round(futureYears / 11.86);
    this.jupiterianAge += futureJupiter;
  }

  yearsSince() {
    let pastYears = this.currentAge - this.pastAge;
    let pastMurcury = Math.round(pastYears / 0.24);
    this.mercurianAge += pastMurcury;
    let pastVenus = Math.round(pastYears / 0.62);
    this.venusianAge += pastVenus;
    let pastMars = Math.round(pastYears / 1.88);
    this.martianAge += pastMars;
    let pastJupiter = Math.round(pastYears / 11.86);
    this.jupiterianAge += pastJupiter;
  }
}
