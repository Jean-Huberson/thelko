import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthServiceService} from '../services/auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuarService implements CanActivate {

  constructor(public authServ: AuthServiceService) {
    
   }

  canActivate(): boolean {
    return this.authServ.isAuthenticated();
  }
}
