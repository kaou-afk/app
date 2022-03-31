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
    this.API()
  }

  public scoreList = [];

  API(){
    this.http.get('http://localhost/api/resultats/rechercherScore.php?idUtilisateur=1') .subscribe((data) => { 
      this.scoreList = Object.values(data['Resultats']);
      console.log(this.scoreList);
      this.barChartData = [
        {data: this.scoreList,borderColor: '#1DAEFF', pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',}
      ];
    });
  }

  public barChartData :Array<any> = [];
  public barChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public barChartType = 'line';
  public barChartLegend = false;
  public lineChartOption = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
          grid: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            color: 'red',
            max : 100,
          }
        },
      },
  
  }
   
}
