import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})

export class ScorePage implements OnInit {

  constructor(private http: HttpClient, private AppComponent: AppComponent) { 
  }

  ngOnInit() {
    this.API()
  }

  public tireurList = [];

  idUtilisateur: number;
  score: number = this.AppComponent.getScore();

  API(){
    this.http.get('http://localhost/api/utilisateur/rechercherTous.php') .subscribe((data) => { 
      this.tireurList = Object.values(data['Utilisateurs']);;
      console.log(this.tireurList);
    });
  }


  readAPI() { // fonction resquette http get
    return this.http.get('http://localhost/api/resultats/ajouter.php?idUtilisateur='+ this.idUtilisateur +'&score='+this.score).subscribe((data) => {});
  }

  Envoyer(){
    this.readAPI();
  }

  public saveCode(e): void {  //afficher les nom dans la data list
    let find = this.tireurList.find(
      (x) => x?.prenom + ' ' + x?.nom === e.target.value);
    console.log(find?.id);
    this.idUtilisateur = find?.id;
  }

  Reinitialiser(){
    this.score=0;
    this.AppComponent.reset();
  }


}
