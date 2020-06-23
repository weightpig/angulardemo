import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalManageComponent } from './global-manage/global-manage.component';
import { ForumtypeComponent } from './forumtype/forumtype.component';
// 国际化引入模块
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ManyRouteComponent } from './many-route/many-route.component';
import { RouteChild1Component } from './route-child1/route-child1.component';
import { RouteChild2Component } from './route-child2/route-child2.component';
import { Son1Component } from './son1/son1.component';
import { Son2Component } from './son2/son2.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { LoginComponent } from './login/login.component';

registerLocaleData(zh);
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    GlobalManageComponent,
    ForumtypeComponent,
    ManyRouteComponent,
    RouteChild1Component,
    RouteChild2Component,
    Son1Component,
    Son2Component,
    // LoginComponent,
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
    }),
    FormsModule,
    BrowserAnimationsModule,
    NzDatePickerModule,
    NzLayoutModule,
    NgZorroAntdModule,
    NzTableModule,
    NzButtonModule,
    NzDropDownModule,
    NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent] //主视图
})
export class AppModule { }


