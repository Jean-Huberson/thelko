import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostProviders} from '../../providers/providers';
import {ToastController} from '@ionic/angular';
import {AuthServiceService} from '../../services/auth-service.service';
import {LoadingController} from '@ionic/angular';

const authToken = "AUTH_TOKEN";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  mdp:string = "";
  

  endPoint = "client/logClient.php";
  
  constructor(
    private router:Router,
    private postProviders: PostProviders,
    public toastController: ToastController,
    private guardlog:AuthServiceService,
    public loadingController:LoadingController) {

     }

  ngOnInit() {
  }

  

  goOnRegister(){
    this.router.navigate(['/register']);
  }

  async login(){

    const loading = await this.loadingController.create({
			message: 'Connexion en cours...'
		});
       
    this.presentLoading(loading);

    if(this.email == "" || this.mdp =="" || this.mdp.length < 4){
      if(this.email == ""){
        const toast = await this.toastController.create({
          message: 'Email invalide',
          duration: 2000
        });
        loading.dismiss();
        toast.present();

      }else if(this.mdp == ""){
        const toast = await this.toastController.create({
          message: 'Veuillez saisir un mot de passe',
          duration: 2000
        });
        loading.dismiss();
        toast.present();
        
      }else if(this.mdp.length < 4){
        console.log(this.mdp);
        const toast = await this.toastController.create({
          message: 'Mot de passe trop court',
          duration: 2000
        });
        loading.dismiss();
        toast.present();
      }

    }else{

      let body = {
        email: this.email,
        mdp: this.mdp
      }

      this.postProviders.postData(body, this.endPoint).subscribe(async data => {
          if(data.result){

            const toast = await this.toastController.create({
              message: 'Connexion établie.',
              duration: 2000
            });
            console.log(data);
            toast.present();
            //this.router.navigate(['/home']);
            this.guardlog.storage.set(authToken, data.authToken).then(() => {
            this.guardlog.authenticationState.next(true) });
            this.guardlog.storage.set('idUser', data.idUser);
            this.guardlog.storage.set('nomClient', data.nomClient);
            this.guardlog.storage.set('prenomClient', data.prenomClient);
            this.guardlog.storage.set('mdpClient', data.mdpClient);

            loading.dismiss();
  
          }else{
            const toast = await this.toastController.create({
              message: 'Echec lors de la vérification.',
              duration: 2000
            });
            loading.dismiss();
            toast.present();
        }
      });
  

    }



    
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  

 
}


