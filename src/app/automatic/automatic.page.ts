import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.page.html',
  styleUrls: ['./automatic.page.scss'],
})
export class AutomaticPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  score = 0;
  start=0;

  incremente(){// incrémenter score +1
    this.score = this.score+1;
  }
  decremente(){// décrémenter score -1
    this.score = this.score-1;
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
