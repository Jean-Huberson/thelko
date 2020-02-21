import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostProviders} from '../../providers/providers';
import {ToastController} from '@ionic/angular';
import {AuthServiceService} from '../../services/auth-service.service';
import {LoadingController} from '@ionic/angular';

const authToken = "AUTH_TOKEN";


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nom:string = "";
  prenom:string = "";
  email:string = "";
  mdp:string = "";
  mdpConfirm:string = "";


  endPoint = "client/createClient.php";


  constructor(
    private router:Router, 
    private postProviders:PostProviders,
    private toastController: ToastController,
    private guardlog:AuthServiceService,
    public loadingController:LoadingController) { 
   
  }

  ngOnInit() {
  }

  async register(){

    const loading = await this.loadingController.create({
			message: 'Inscription en cours...'
		});
       
    this.presentLoading(loading);

    if(this.nom =="" || this.prenom =="" || this.email == "" || this.mdp =="" || this.mdpConfirm == "" || this.mdp != this.mdpConfirm || this.mdp.length < 4 || this.mdpConfirm.length < 4){
      
      if(this.nom == ""){
        const toast = await this.toastController.create({
          message: 'Nom invalide',
          duration: 2000
        });
        loading.dismiss();
        toast.present();

      }else if(this.nom.length < 3){
        const toast = await this.toastController.create({
          message: 'Nom trop court',
          duration: 2000
        });
        loading.dismiss();
        toast.present();
  
      }else if(this.prenom == ""){
        const toast = await this.toastController.create({
          message: 'Prenom invalide',
          duration: 2000
        });
        loading.dismiss();
        toast.present();

      }else if(this.email == ""){
        const toast = await this.toastController.create({
          message: 'Email invalide.',
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

      }else if(this.mdpConfirm == ""){
        const toast = await this.toastController.create({
          message: 'Veuillez confirmer le mot de passe.',
          duration: 2000
        });
        loading.dismiss();
        toast.present();

      }else if(this.mdp.length < 4){
        const toast = await this.toastController.create({
          message: 'Mot de passe trop court',
          duration: 2000
        });
        loading.dismiss();
        toast.present();

      }else if(this.mdpConfirm.length < 4){
        const toast = await this.toastController.create({
          message: 'Mot de passe trop court',
          duration: 2000
        });
        loading.dismiss();
        toast.present();

      }else if(this.mdp != this.mdpConfirm){
        const toast = await this.toastController.create({
          message: 'Les mots de passe ne correspondent pas',
          duration: 2000
        });
        loading.dismiss();
        toast.present();
      }

    }else{

      let body = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        mdp: this.mdp,
        mdpConfirm: this.mdpConfirm
      }

      this.postProviders.postData(body, this.endPoint).subscribe(async data => {
          if(data.result){
            const toast = await this.toastController.create({
              message: 'Enregistrement effectué.',
              duration: 2000
            });
            
            toast.present();
            
            this.guardlog.storage.set(authToken, data.authToken).then(() => {
            this.guardlog.authenticationState.next(true) });
            this.guardlog.storage.set('idUser', data.idUser);
            this.guardlog.storage.set('nomClient', data.nomClient);
            this.guardlog.storage.set('prenomClient', data.prenomClient);
            this.guardlog.storage.set('mdpClient', data.mdpClient);
            loading.dismiss();
  
          }else{
            const toast = await this.toastController.create({
              message: 'Echec lors de l\'enregistrement.',
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

  goOnLogin(){
    this.router.navigate(['/login']);
  }


}

/*export function emailValide(emai){
  this.emai =  new FormControl('', Validators.compose([
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ]))

  return true;
}*/



