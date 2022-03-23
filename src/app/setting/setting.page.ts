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
  }

  Deconnexion(){
    localStorage.setItem('authenticated','0');
    this.router.navigateByUrl('/')
  }

  onDarkChange(e){
    if(e.target.checked){
      document.getElementById('dark').style.setProperty('background', '#1DAEFF')
      document.getElementById('light').style.setProperty('background' , '#616161');
    }
  }
  onLightChange(e){
    if(e.target.checked){
      document.getElementById('light').style.setProperty('background' , '#1DAEFF');
      document.getElementById('dark').style.setProperty('background', '#616161')
    }
  }
}

