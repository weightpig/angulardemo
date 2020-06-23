import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import {LoginComponent} from "../login/login.component"


@NgModule({
  declarations: [TestComponent,LoginComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
