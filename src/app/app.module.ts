import { WorkerAppModule } from '@angular/platform-webworker';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FactorialService } from "app/factorial.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WorkerAppModule,
    FormsModule
  ],
  providers: [FactorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
