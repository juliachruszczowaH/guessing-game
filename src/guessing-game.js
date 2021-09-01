class GuessingGame {
  constructor() {
    this.minVal;
    this.maxVal;
    this.guessVal;
  }

  setRange(min, max) {
    this.minVal = min;
    this.maxVal = max;
  }

  guess() {
    return (this.guessVal = Math.round((this.minVal + this.maxVal) / 2));
  }

  lower() {
    return (this.maxVal = this.guessVal);
  }

  greater() {
    return (this.minVal = this.guessVal);
  }
}

module.exports = GuessingGame;
