import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalManageComponent } from './global-manage/global-manage.component';
import { ForumtypeComponent } from './forumtype/forumtype.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalManageComponent,
    ForumtypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //主视图
})
export class AppModule { }
