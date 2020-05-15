import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemo';
  language=true; //true 中文  false 英文

  constructor( //国际化
    private translate: TranslateService
  ){
    this.translate.use("zh_cn");
  }

  changeLan(){
    console.log(this.language);
    if(this.language){
      this.translate.use("en_us");
    }else{
      this.translate.use("zh_cn");
    }
    this.language=!this.language;
  }
}
