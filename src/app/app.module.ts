import { WorkerAppModule } from '@angular/platform-webworker';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FactorialComponent } from './factorial/factorial.component';
import { FactorialService } from "./factorial.service";

@NgModule({
  declarations: [
    AppComponent,
    FactorialComponent
  ],
  imports: [
    WorkerAppModule,
    FormsModule
  ],
  providers: [FactorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
