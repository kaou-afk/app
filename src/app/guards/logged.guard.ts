import { Injectable } from '@angular/core';
import { CanLoad, Route, ActivatedRouteSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanLoad {

    constructor(private router: Router) {}

  canLoad(){
    const isAuthenticated = (+localStorage.getItem('authenticated'));
    const isAuthenticated2 = (+sessionStorage.getItem('authenticated'));

    if(isAuthenticated || isAuthenticated2){
      this.router.navigateByUrl("/home");
      return false;
    }
    else{
     
      return true;
    }
  }
}
