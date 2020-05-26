import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { ConfigService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angulardemo';
  language = true; //true 中文  false 英文
  personText = '未登录';
  baseUrl='http://dev.bbs.deepin.org/admin/admin/api';
  host='http://localhost:4300';
  // host="http://dev.bbs.deepin.org/admin/";

  constructor(
    //国际化
    private translate: TranslateService,
    private i18n: NzI18nService,
    private configservice: ConfigService,
  ) {
    this.translate.use('zh_cn');
    this.i18n.setLocale(zh_CN);
  }

  //国际化转换
  // changeLan(){
  //   if(this.language){
  //     this.translate.use("en_us");
  //     this.i18n.setLocale(en_US);
  //   }else{
  //     this.translate.use("zh_cn");
  //     this.i18n.setLocale(zh_CN);
  //   }
  //   this.language=!this.language;
  // }
  ngOnInit(): void {
    //组件初始化时被调用
    const that=this;
    // this.configservice.getIsLogin().then(function (res) {
      // if (res.body.code == 200) {
      //   this.personText=res.body.username;
      // } else {
      //   that.loginout();
      // }
    // });
  }

  // 退出
  loginout() {
    // 退出后重新登录需要返回的地址
    var return_url = this.baseUrl + '/manager?return_url=' + this.host;
    window.location.href = this.baseUrl + '/manager/logout?return_url=' + return_url;
  }
}
