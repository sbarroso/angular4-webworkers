import { Injectable } from '@angular/core';

let Big = require('big.js');

@Injectable()
export class MathService {


  constructor() {
    // start using scientific notation if exponent is greater than or equal to 5
    Big.E_POS = 5;
  }


  private factorialize(n: number) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
      let bigNum = new Big(n);
      return bigNum.mul(this.factorialize(n - 1));
    }
  }


  public factorial(n: number) {
    return this.factorialize(n).toPrecision(5);
  }


  public isPrime(n) {

    n = new Big(n)
    let limit = Math.floor(Math.sqrt(n));

    for (let i=new Big(2);i.lt(limit);i=i.add(1)) {
      if (n.mod(i).toString() === '0') {
        return false
      }
    }
    return true
  }


}