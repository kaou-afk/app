import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  checked : string;

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('theme') === 'dark'){
      this.checked = 'dark';
      document.getElementById('dark').style.setProperty('background', '#1DAEFF');
      document.getElementById('light').style.setProperty('background' , '#616161');
    }

    else if(localStorage.getItem('theme') === 'light'){
      this.checked = 'light';
      document.getElementById('light').style.setProperty('background' , '#1DAEFF');
      document.getElementById('dark').style.setProperty('background', '#616161');
    }

    else{
      this.checked = 'dark';
      document.getElementById('dark').style.setProperty('background', '#1DAEFF');
      document.getElementById('light').style.setProperty('background' , '#616161');
    }
  }

  Deconnexion(){
    localStorage.setItem('authenticated','0');
    sessionStorage.setItem('authenticated','0');
    localStorage.removeItem('id');
    sessionStorage.removeItem('id');
    this.router.navigateByUrl('/')
  }

  onDarkChange(e){
    if(e.target.checked){
      document.getElementById('dark').style.setProperty('background', '#1DAEFF');
      document.getElementById('light').style.setProperty('background' , '#616161');
      localStorage.setItem('theme','dark');
      document.body.setAttribute('color-theme','dark');
    
    }
  }
  onLightChange(e){
    if(e.target.checked){
      document.getElementById('light').style.setProperty('background' , '#1DAEFF');
      document.getElementById('dark').style.setProperty('background', '#616161');
      localStorage.setItem('theme','light');
      document.body.setAttribute('color-theme','light');
    }
  }
}





       

 