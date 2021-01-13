import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SampleReactiveFormComponent } from './sample-reactive-form/sample-reactive-form.component';
import { TrueReactiveFormComponent } from './true-reactive-form/true-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleReactiveFormComponent,
    TrueReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
