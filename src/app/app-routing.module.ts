import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TemplateComponent } from './template/template.component';
import { DemoComponent } from './demo/demo.component';
import { ReactComponent } from './react/react.component';

const routes: Routes = [
  {path:"basic",component:BasicComponent},
  {path:"first",component:FirstComponent},
  {
    path:"second",component:SecondComponent
  },
  {
    path:"template",component:TemplateComponent
  },
   {
    path:"demo",component:DemoComponent
  },
  {
    path:"react",component:ReactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
