import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PostProviders} from '../providers/providers';
import { NavController} from '@ionic/angular';
import { LoadingController} from '@ionic/angular';
 
@Component({
  selector: 'app-secteur-activite',
  templateUrl: './secteur-activite.page.html',
  styleUrls: ['./secteur-activite.page.scss'],
})
export class SecteurActivitePage implements OnInit {

  idSecteur:number = 0;
  //nomSecteur:string = "";
  searchTerm:string = "";
  endPoint:string = "secteur/secteur.php";
  endPoint2:string;
  items:any = [];
  data:object = [];

  constructor(
    private router:Router,
    private postProviders: PostProviders,
    public navCtrl: NavController,
    public loadingController:LoadingController) {
      //this.filterItem(); 
    }

  ngOnInit() {
  }

  async goToEntreprise(idSecteur,nomSecteur){
    
    const loading = await this.loadingController.create({
			message: 'Chargement en cours...'
		});
    this.presentLoading(loading);
    this.postProviders.myParams = {idSecteur:idSecteur, nomSecteur:nomSecteur}
    this.navCtrl.navigateForward('/list-entreprise');
    loading.dismiss();
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  /*getData(key){
    return this.data[key];
  }*/

  
  filteredItems(searchTerm) {
    this.filterItem();
    return this.items =  this.items.filter((item) => { 
       item =  Object.values(item)
        return (item.nomSecteur.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    });
  }


  filterItem(){
    let body = {
      searchTerm:this.searchTerm
    }
      this.postProviders.postData(body, this.endPoint).subscribe(async data => {
        this.items = Object.values(data.searchItems)
        console.log(data.searchItems)

    })
  }

}
