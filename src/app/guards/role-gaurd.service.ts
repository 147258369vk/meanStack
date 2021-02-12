import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGaurdService implements CanActivate{

  constructor(

    private authservice:AuthService,
    private router:Router

  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {



    if(this.authservice.getUser() === "admin")
    {
      return true;
    }

    //navigate to 404 page
    this.router.navigate(['/404'])
    return false;

  }
}
