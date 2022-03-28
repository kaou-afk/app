import { Component, OnInit , OnDestroy} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.page.html',
  styleUrls: ['./automatic.page.scss'],
})
export class AutomaticPage implements OnInit, OnDestroy {
  score: number;
  timerRef;
  running: boolean = false;

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
    this.running = !this.running;
    if (this.running) {
      document.getElementById('start').style.setProperty('background' , '#1DAEFF');

      this.timerRef = setInterval(() => {
        this.automatic();
      }, 1000);
    } else {
      document.getElementById('start').style.setProperty('background' , '#616161');
      clearInterval(this.timerRef);
    }
  }

  automatic() {
    var nb = this.getRandomInt(4);
    switch (nb) {
      case 1:
        console.log('1');
        break;

      case 2:
        console.log('2');
        break;

      case 3:
        console.log('3');
        break;

      case 4:
        console.log('4');
        break;
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * (max - 1 + 1) + 1);;
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }
}
