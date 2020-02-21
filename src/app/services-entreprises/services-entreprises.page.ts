import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostProviders} from '../providers/providers';

@Component({
  selector: 'app-services-entreprises',
  templateUrl: './services-entreprises.page.html',
  styleUrls: ['./services-entreprises.page.scss'],
})
export class ServicesEntreprisesPage implements OnInit {

  nomSecteur:string;
  nomEntp:string;
  idSecteur:number;
  idEntreprise:number;
  produitItems:any = [];
  voteItems:any;
  endPoint:string = "produit/produit.php";
  commentaireItems:any;
  nbreComent:any;

  constructor(private router:Router, 
    private prv:PostProviders) {
        this.idEntreprise = this.prv.myParams.idEntreprise;
        this.loadData();
     }

  ngOnInit() {
    this.nomSecteur = this.prv.myParams.nomSecteur;
    this.idSecteur = this.prv.myParams.idSecteur;
    this.nomEntp = this.prv.myParams.nomEntreprise;
    console.log(this.nomSecteur, this.nomEntp);
  }

  goToReview(idProduits, nomProduits, nbreComent, commentaireItems, voteItems){
    this.prv.myParams = {
      idEntreprise:this.idEntreprise, 
      idSecteur:this.idSecteur, 
      nomSecteur:this.nomSecteur, 
      nomEntreprise:this.nomEntp,
      idProduits:idProduits,
      nomProduits:nomProduits,
      nbreCment:nbreComent,
      commentaire:commentaireItems,
      vote:voteItems
    
    }
    this.router.navigate(['/review-service']);
  }

  loadData(){
    let body = {
      searchTerm:this.idEntreprise
    }
      this.prv.postData(body, this.endPoint).subscribe(async data => {
        this.produitItems = data.produitItems
        this.voteItems = Object.values(data.voteItems)
        if(data.nbreComent == null){
          this.nbreComent = 0;
        }else{
          this.nbreComent = Object.values(data.nbreComent)
        }
        this.commentaireItems = Object.values(data.commentaireItems)
        console.log(this.produitItems);

    })
  }


}
