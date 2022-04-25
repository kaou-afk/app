import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {
  private score: number;
  private ratio: number;
  private sMax: number;

  constructor() {
    this.score= 0;
    this.sMax = 0;
    this.ratio= 0;
    if(localStorage.getItem('theme') === 'dark'){
      document.body.setAttribute('color-theme','dark');
    }

    else if(localStorage.getItem('theme') === 'light'){
      document.body.setAttribute('color-theme','light');
    }

    else{
      document.body.setAttribute('color-theme','dark');
    }
   
  }
  ngOnInit() {}

  getScore(){
    return this.score;
  }

  addScore(){
    this.updateRatio()
    this.score++;
  }

  susScore(){
    this.updateRatio()
    this.score = this.score-5;
  }

  reset(){
    this.score=0;
    this.sMax=0;
    this.ratio=0;
  }

  getSMax(){
    return this.sMax;
  }

  addSMax(){
    this.updateRatio()
    this.sMax++;
  }

  getRatio(){
    if (this.score >= 1){
      return this.score/this.sMax;
    }
    else{
      return 0;
    }
  }

  updateRatio(){
    this.ratio=this.score/this.sMax;
  }

}
