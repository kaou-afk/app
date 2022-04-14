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
  constructor(private http: HttpClient,private AppComponent: AppComponent) {
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
  
  cible1_1(){
    return this.http.get('http://192.168.1.22?cible1=1').subscribe((data) => {});
  }

  cible1_2(){
    return this.http.get('http://192.168.1.22?cible1=2').subscribe((data) => {});
  }

  cible2_1(){
    return this.http.get('http://192.168.1.22?cible2=1').subscribe((data) => {});
  }
  
  cible2_2(){
    return this.http.get('http://192.168.1.22?cible2=2').subscribe((data) => {});
  }


}
