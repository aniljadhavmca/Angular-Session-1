import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { InnerSampleCompComponent } from './inner-sample-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    InnerSampleCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
