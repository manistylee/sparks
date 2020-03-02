import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=false;
  constructor() { }

  ngOnInit(): void {
  }

  onLogin(form:NgForm){
    if(form.invalid){
      return;
    }
    console.log(form.value);
    if(form.value.username == "demo" && form.value.password == "demo"){
      this.login = true;
    }
    form.resetForm();
    
  }

  onLogout(){
    this.login = false;
    console.log(this.login);
  }

}



export class SidenavModeExample {
    mode = new FormControl('over');
    shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  }
