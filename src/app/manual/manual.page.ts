import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.page.html',
  styleUrls: ['./manual.page.scss'],
})
export class ManualPage implements OnInit {
  score: number;
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
}
