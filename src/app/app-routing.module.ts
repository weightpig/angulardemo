import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GlobalManageComponent} from "./global-manage/global-manage.component";
import {ForumtypeComponent} from "./forumtype/forumtype.component";

const routes: Routes = [{
  path:"globalmanage",component:GlobalManageComponent
},{
  path:"forumtype",component:ForumtypeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
