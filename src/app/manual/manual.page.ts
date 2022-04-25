import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.page.html',
  styleUrls: ['./manual.page.scss'],
})
export class ManualPage implements OnInit {
  score: number;
  sMax: number;
  ratio: number;
  constructor(private http: HttpClient,private AppComponent: AppComponent) {
    this.score=AppComponent.getScore();
    this.sMax=AppComponent.getSMax();
    this.ratio=AppComponent.getRatio();
    console.log(this.ratio);
  }

  ngOnInit() {
  }

  incremente(){// incrémenter score +1
    this.score = this.score+1;
    this.AppComponent.addScore();
    if (this.score >= 0){
      this.ratio=this.score/this.sMax;
    }
    else{
      this.ratio=0;
    }
  }

  decremente(){// décrémenter score -1
    this.score = this.score-5;
    this.AppComponent.susScore();
    if (this.score >= 0){
      this.ratio=this.score/this.sMax;
    }
    else{
      this.ratio=0;
    }
  }
  
  cible1_1(){
    this.sMax++;
    this.AppComponent.addSMax();
    if (this.score >= 0){
      this.ratio=this.score/this.sMax;
    }
    else{
      this.ratio=0;
    }
    return this.http.get('http://192.168.1.22?cible1=1').subscribe((data) => {
    });
  
  }

  cible1_2(){
    return this.http.get('http://192.168.1.22?cible1=2').subscribe((data) => {});
  }

  cible2_1(){
    this.sMax++;
    this.AppComponent.addSMax();
    if (this.score >= 0){
      this.ratio=this.score/this.sMax;
    }
    else{
      this.ratio=0;
    }
    return this.http.get('http://192.168.1.22?cible2=1').subscribe((data) => {

    });
    
  }
  
  cible2_2(){
    return this.http.get('http://192.168.1.22?cible2=2').subscribe((data) => {});
  }


}
