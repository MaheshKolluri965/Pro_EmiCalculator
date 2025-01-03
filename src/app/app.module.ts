import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmicalulatorComponent } from './emicalulator/emicalulator.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmiService } from './emi.service';

@NgModule({
  declarations: [
    AppComponent,
    EmicalulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
