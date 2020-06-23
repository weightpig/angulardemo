import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test.component';
import {LoginComponent} from "../login/login.component";

const routes: Routes = [
  { path: '', component: TestComponent },
  {path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
