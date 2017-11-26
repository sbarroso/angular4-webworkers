import { Component } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {

  items = [];
  progress: number = 0;
  computingFactorials: boolean = false;
  firstFactorial: number = 700;
  numberOfFactorials: number = 50;


  constructor(private mathService: MathService) { }


  public computeFactorials() {
    // clear list, reset progress indicator and show progress bar
    //this.items = [];
    this.progress = 0;
    this.computingFactorials = true;

    // perform tasks
    for (let i = this.firstFactorial; i < this.firstFactorial + this.numberOfFactorials; i++) {
      // call setTimeout to allow to refresh the UI    
      setTimeout(this.getFactorialForN(i), 0);
    }

  }


  /* get factorial of a specific number and update interface*/
  private getFactorialForN(i: number) {
    return () => {
      let startTime = new Date().getTime()
      let value = this.mathService.factorial(i);
      let endTime = new Date().getTime()
      let duration = (endTime - startTime) / 1000
      this.items = [...this.items, `${i}! (${duration} seconds) - ${value}`];
      this.progress += 100.0 / this.numberOfFactorials;
      console.log('progress: ', this.progress);

      // end
      if (i === this.firstFactorial + this.numberOfFactorials - 1 ) {
        this.computingFactorials = false;
      }
    };
  }

  public cleanResults() {
    this.items = [];
    this.progress = 0;
  }

}
