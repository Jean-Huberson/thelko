import { Component } from '@angular/core';
import { PostProviders} from '../providers/providers';
import { Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nomSecteur:string;
  searchTerm:string = "";
  endPoint:string = "secteur/secteur.php";
  items:any = [];
  
  constructor(
    private postProviders: PostProviders, 
    private router:Router, 
    private localStorage:Storage) {
    
  }


  filteredItems(searchTerm) {
    this.filterItem();
    return this.items =  this.items.filter((item) => { 
        item =  Object.values(item)
        return (item.nomEntreprise.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
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

  goToEntreprise(idSecteur, nomSecteur){
    this.postProviders.myParams = {
      idSecteur:idSecteur,
      nomSecteur:nomSecteur}
    this.router.navigate(['/list-entreprise']);
  }

}
