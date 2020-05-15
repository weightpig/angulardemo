import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalManageComponent } from './global-manage/global-manage.component';
import { ForumtypeComponent } from './forumtype/forumtype.component';
// 国际化引入模块
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    GlobalManageComponent,
    ForumtypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({ //国际化
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent] //主视图
})
export class AppModule { }


// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
// import { FormsModule } from '@angular/forms';
// // import { Http } from '@angular/common/http';
// import {
//   TranslateModule,
//   TranslateLoader,
//   TranslateService
// } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { AppComponent } from './app.component';
// import {HttpClient, HttpClientModule} from '@angular/common/http';
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }
// import { GlobalManageComponent } from './global-manage/global-manage.component';
// import { ForumtypeComponent } from './forumtype/forumtype.component';
// @NgModule({
//   declarations: [
//     AppComponent,
//         GlobalManageComponent,
//     ForumtypeComponent,
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule,
//     TranslateModule.forRoot({
//       loader: {
//           provide: TranslateLoader,
//           useFactory: createTranslateLoader,
//           deps: [HttpClient]
//       }
//     })
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
