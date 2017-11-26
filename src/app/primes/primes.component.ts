import { Component } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-primes',
  templateUrl: './primes.component.html',
  styleUrls: ['./primes.component.css']
})
export class PrimesComponent {

  items = [];
  firstPrime: number = 1000;
  numberOfPrimes: number = 50;
  continue = true

  constructor(private mathService: MathService) { }

  computePrimeNumbers() {
    setTimeout(this.isPrime(this.firstPrime), 0);
  }


  isPrime(n) {
    return () => {
      let value = this.mathService.isPrime(n);
      this.items = [...this.items, `${n} => ${value}`];
      if (value) {
        console.log('Found prime number:', value)
      } else {
        setTimeout(this.isPrime(++n), 0);
      }
    }
  }

}
