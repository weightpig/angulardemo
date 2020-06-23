import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() title:string;
  @Output() change:EventEmitter<any>;
  constructor() { }
  login={list:{
    sex:"男"
  }}

  ngOnInit(): void {
    delete this.login.list;
    console.log(this.title)

  }

}
