import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-manage',
  templateUrl: './global-manage.component.html',
  styleUrls: ['./global-manage.component.css']
})
export class GlobalManageComponent implements OnInit {
  title="基础配置";
  date = null;

  constructor() { }

  ngOnInit(): void {
  }

}
