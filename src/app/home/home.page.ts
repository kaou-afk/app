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
  
    this.API();
    this.getPrenom();
  }
 
  private idUtilisateur;
  private prenom;
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

  getPrenom(){
    this.http.get('http://localhost/api/utilisateur/rechercherPrenom.php?id='+ this.idUtilisateur) .subscribe((data) => {
      this.prenom = data['prenom'];
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
          color: '#8c8e91',
        },
        ticks: {
          color: '#8c8e91',
        },
      },
      y:
        {
          min: 0,
          max: 100,
          position: 'left',
          grid: {
            color: '#8c8e91',
          },
          
          ticks: {
            color: '#8c8e91',
          },
        },
      },
  
  }
   
}
