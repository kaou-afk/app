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
    if(localStorage.getItem('theme')=='dark'){
      document.body.setAttribute('color-theme','dark');
    }

    else if(sessionStorage.getItem('theme')=='light'){
      document.body.setAttribute('color-theme','light');
    }

    else{
      document.body.setAttribute('color-theme','dark');
      console.log(localStorage.getItem('theme'));
    }
   
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
