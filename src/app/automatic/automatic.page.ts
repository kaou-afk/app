import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.page.html',
  styleUrls: ['./automatic.page.scss'],
})
export class AutomaticPage implements OnInit {
  score: number;
  start=0;

  constructor(private AppComponent: AppComponent) {
    this.score=AppComponent.getScore();
   }

  ngOnInit() {
  }

  incremente(){// incrémenter score +1
    this.score = this.score+1;
    this.AppComponent.addScore();
  }
  decremente(){// décrémenter score -1
    this.score = this.score-1;
    this.AppComponent.susScore();
  }
  startAutoMode(){
    if (this.start==0){
      document.getElementById('start').style.setProperty('background' , '#1DAEFF');
      this.start=1;
    }
    else{
      document.getElementById('start').style.setProperty('background' , '#616161');
      this.start=0;
    }

  }
}
