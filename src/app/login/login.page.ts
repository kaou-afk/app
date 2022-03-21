import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as Pbkdf2 from 'pbkdf2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient,private router: Router) { 
  }
  ngOnInit() {  
  }

  movieData = {
    password: '',
  };
  login: string = '';
  password: string = '';

  onNativeChange(e) { // fonction afficher icon checkbox
    if(e.target.checked){
      document.getElementById('test').style.setProperty('display' , 'block');
    }
    else{
      document.getElementById('test').style.setProperty('display' , 'none');
    }
  }

  readAPI(URL: string) { // fonction resquette http get
    return this.http.get(URL);
  }

  chiffrer(mdp: string) { // fonction chifrer mots de passe
    var derivedKey = Pbkdf2.pbkdf2Sync(mdp, 'salt', 1, 32, 'sha512');
    return derivedKey.toString('hex');
  }

  verifier(){ // fonction vérifier mots et email
    if(this.movieData.password==this.chiffrer(this.password) && this.movieData.password!=null){
      console.log('ok');
      localStorage.setItem('authenticated','1');
      this.router.navigateByUrl('/home')
    }
    if(this.movieData.password!=this.chiffrer(this.password) && this.movieData.password!=null){
      console.log('password incorecte');
      
    }
    if(this.movieData.password==null){
      console.log('utilisateur non connue');
    }
  }

  Connexion(){
    this.readAPI('http://localhost/api/utilisateur/rechercherUser.php?email='+ this.login )
    .subscribe((data) => {
    this.movieData.password = data['password'];
    this.verifier();
  });
  }
  
}


