import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../service/post.service";

@Component({
  selector: 'app-global-manage',
  templateUrl: './global-manage.component.html',
  styleUrls: ['./global-manage.component.css']
})
export class GlobalManageComponent implements OnInit {
  title="基础配置";
  date = null;

  constructor(
    private configservice:ConfigService,
  ) { }

  // ngOnChanges(): void {  //输入属性变化时被调用  （在组件的  '@Input' 属性发生变化的时候调用）
  //   console.log("ngOnChanges");
  // }

  ngOnInit(): void {  //组件初始化时被调用
    console.log("ngOnInit");
    this.configservice.getGlobalList({});
  }

  // ngDoCheck(): void { //脏值检测时调用   (会调用多次)
  //   console.log("ngDoCheck");
  // }

  // ngAfterContentInit(): void { //内容投影ng-content完成时调用
  //   console.log("ngAfterContentInit");
  // }

  // ngAfterContentChecked(): void { //Angular检测投影内容时被调用（多次）
  //   console.log("ngAfterContentChecked");
  // }
 
  // ngAfterVierInit(): void { // 当组件视图（子视图）初始化完成时
  //   console.log("ngAfterVierInit");
  // }

  // ngAfterViewChecked(): void { // 当检测视图变化时（多次）
  //   console.log("ngAfterViewChecked");
  // }

  // ngOnDestory(): void { // 当组件销毁时
  //   console.log("ngOnDestory");
  // }

}


