import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { en_US, NzI18nService,zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemo';
  language=true; //true 中文  false 英文

  constructor( //国际化
    private translate: TranslateService,
    private i18n: NzI18nService
  ){
    this.translate.use("zh_cn");
    this.i18n.setLocale(zh_CN);
  }

  changeLan(){
    if(this.language){
      this.translate.use("en_us");
      this.i18n.setLocale(en_US);
    }else{
      this.translate.use("zh_cn");
      this.i18n.setLocale(zh_CN);
    }
    this.language=!this.language;
  }

}
