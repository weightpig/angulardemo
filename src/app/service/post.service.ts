import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseUrl='http://dev.bbs.deepin.org/admin/admin/api';
  constructor(
    private http: HttpClient,
  ) { }

  // 全局配置列表
  getGlobalList(opt){
    return this.http.get<any>(this.baseUrl+"/config/list", { observe: 'response', params: opt as any }).toPromise();
  }

  //是否已登陆
  getIsLogin(){
    return this.http.get<any>(this.baseUrl+"/manager/is_login", { observe: 'response' }).toPromise();
  }

}