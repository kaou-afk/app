import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {
  private score: number;

  constructor() {
    this.score= 0;
  }
  ngOnInit() {}

  getScore(){
    return this.score;
  }

  addScore(){
    this.score++;
  }

  susScore(){
    this.score--;
  }

  reset(){
    this.score=0;
  }
}
