import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})

export class ScorePage implements OnInit {

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  }

  public codeValue: string;

  public tireurList =  {
    id: 0,
    nom: '',
    prenom: '',
  };

  idUtilisateur: number;
  score: string = '42';

  API(){
    this.http.get('http://localhost/api/utilisateur/rechercherTous.php') .subscribe((data) => { 
      this.tireurList.id = data['id'];
      this.tireurList.nom = data['nom'];
      this.tireurList.prenom = data['prenom'];
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


}
