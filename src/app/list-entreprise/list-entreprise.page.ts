import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {NavController, NavParams} from '@ionic/angular';
import {PostProviders} from '../providers/providers';

 
@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.page.html',
  styleUrls: ['./list-entreprise.page.scss'],
})
export class ListEntreprisePage implements OnInit {
  idSecteur:number = 0;
  searchTerm:string = "";
  endPoint:string = "entreprise/entreprise.php";
  endPoint2:string;
  items:any = [];
  data:object = [];
  nomSecteur:string;

  constructor(private router:Router, 
              public navCtrl:NavController, 
              private postProviders: PostProviders) {

              
    //this.nomSecteur = this.navParams.get('nomsecteur');

  }

  ngOnInit() {
    this.nomSecteur = this.postProviders.myParams.nomSecteur;
    this.idSecteur = this.postProviders.myParams.idSecteur;
    //console.log(this.nomSecteur);

  }
  

  goToService(idEntp, nomEntreprise){
    this.postProviders.myParams = {
      idEntreprise:idEntp, 
      idSecteur:this.idSecteur, 
      nomSecteur:this.nomSecteur, 
      nomEntreprise:nomEntreprise}

    this.router.navigate(['/services-entreprises']);
  }

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
       // console.log(data.searchItems)

    })
  }

}
