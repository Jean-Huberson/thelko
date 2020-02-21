import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Platform} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';
 
const authToken = "AUTH_TOKEN";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authenticationState = new BehaviorSubject(false);
  data:string;
  
    constructor(
        public storage:Storage,
        public plt:Platform){

          this.plt.ready().then(() => {
            this.checkToken();
            this.getData();
          });
    }

    checkToken(){
        this.storage.get(authToken).then(res => {
          if(res) {
            this.authenticationState.next(true);
            
          }
        })
      }

      getData():string {
        this.storage.get(authToken).then(res => {
          if(res) {
            this.data = JSON.stringify(res)
            //console.log(this.data);
            
          }
        })
        return this.data;
      }
    
      logout() {
        return this.storage.remove(authToken).then(() => {
          this.authenticationState.next(false);
        });
      }
    
      isAuthenticated() {
        return this.authenticationState.value;
      }

      setStorage(key, value){
        this.storage.set(key, value);
      }
}
