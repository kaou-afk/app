import { Component} from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if(localStorage.getItem('id')!=null){
      this.idUtilisateur = localStorage.getItem('id');
    }
    if(sessionStorage.getItem('id')!=null){
      this.idUtilisateur = sessionStorage.getItem('id');
    }
    console.log(this.idUtilisateur);
    this.API();
  }
 
  private idUtilisateur;
  public scoreList = [];

  API(){
    this.http.get('http://localhost/api/resultats/rechercherScore.php?idUtilisateur='+ this.idUtilisateur) .subscribe((data) => { 
      this.scoreList = Object.values(data['Resultats']);
      console.log(this.scoreList);
      this.ChartData = [
        {data: this.scoreList,borderColor: '#1DAEFF', pointRadius: 0,}
      ];
    });
  }

  public ChartData :Array<any> = [];
  public ChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public ChartType = 'line';
  public ChartLegend = false;
  public ChartOption = {
    responsive: true,
    elements: {
      line: {
          tension: 0.3,
      }
  },

    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
      },
      y:
        {
          min: 0,
          max: 100,
          position: 'left',
          grid: {
            color: 'rgba(255, 255, 255, 0.2)',
          },
          
          ticks: {
            color: 'rgba(255, 255, 255, 0.5)',
          },
        },
      },
  
  }
   
}
