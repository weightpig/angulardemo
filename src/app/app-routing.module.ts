import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GlobalManageComponent} from "./global-manage/global-manage.component";
import {ForumtypeComponent} from "./forumtype/forumtype.component";
import {ManyRouteComponent} from "./many-route/many-route.component";
import {RouteChild1Component} from "./route-child1/route-child1.component";
import {RouteChild2Component} from "./route-child2/route-child2.component";
import {Son1Component} from "./son1/son1.component";
import {Son2Component} from "./son2/son2.component";

const routes: Routes = [{
  path:"globalmanage",component:GlobalManageComponent
},{
  path:"forumtype",component:ForumtypeComponent
},{
  path:"manyroute",component:ManyRouteComponent,
  children: [
    {
      path: 'child1',
      component: RouteChild1Component,
      children:[{
        path: 'son1',
        component: Son1Component,
      },{
        path: 'son2',
        component: Son2Component,
      }]
    },
    {
      path: 'child2',
      component: RouteChild2Component,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
