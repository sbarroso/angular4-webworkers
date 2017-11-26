import { WorkerAppModule } from '@angular/platform-webworker';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FactorialComponent } from './factorial/factorial.component';
import { MathService } from "./math.service";
import { PrimesComponent } from './primes/primes.component';

@NgModule({
  declarations: [
    AppComponent,
    FactorialComponent,
    PrimesComponent
  ],
  imports: [
    WorkerAppModule,
    FormsModule
  ],
  providers: [MathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
