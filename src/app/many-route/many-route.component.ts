import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-many-route',
  templateUrl: './many-route.component.html',
  styleUrls: ['./many-route.component.css']
})
export class ManyRouteComponent implements OnInit {
  personList=[{
    name:"老秦",sex:"男"
  },{
    name:"尚筱菊",sex:"女"
  },{
    name:"张九南",sex:"女"
  },{
    name:"孟鹤堂",sex:"女"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
