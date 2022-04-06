import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('theme')=='dark'){
        (document.getElementById('light')as HTMLInputElement).checked = false ;
        (document.getElementById('dark')as HTMLInputElement).checked = true ;
    }

    if(sessionStorage.getItem('theme')=='light'){
      (document.getElementById('dark')as HTMLInputElement).checked = false ;
      (document.getElementById('light')as HTMLInputElement).checked = true ;
    }
  }

  Deconnexion(){
    localStorage.setItem('authenticated','0');
    sessionStorage.setItem('authenticated','0');
    localStorage.clear();
    sessionStorage.clear();
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

