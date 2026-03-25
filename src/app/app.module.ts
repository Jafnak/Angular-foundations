import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { Pipe1Pipe } from './pipe1.pipe';
import { MaskphonePipe } from './maskphone.pipe';
import { Pipe2Pipe } from './pipe2.pipe';
import { TemplateComponent } from './template/template.component';
import { DemoComponent } from './demo/demo.component';
import { ReactComponent } from './react/react.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    FirstComponent,
    SecondComponent,
    Pipe1Pipe,
    MaskphonePipe,
    Pipe2Pipe,
    TemplateComponent,
    DemoComponent,
    ReactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
