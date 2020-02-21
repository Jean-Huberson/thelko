import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostProviders} from '../providers/providers';

@Component({
  selector: 'app-review-service',
  templateUrl: './review-service.page.html',
  styleUrls: ['./review-service.page.scss'],
})
export class ReviewServicePage implements OnInit {

  idEntreprise;
  idSecteur;
  nomSecteur;
  nomEntp;
  idProduits;
  nomProduits;
  nbreCment;
  commentaire;
  vote;

  constructor(private router: Router, private prv:PostProviders) { }

  ngOnInit() {
   
      this.idEntreprise = this.prv.myParams.idEntreprise;
      this.idSecteur = this.prv.myParams.idSecteur;
      this.nomSecteur = this.prv.myParams.nomSecteur;
      this.nomEntp = this.prv.myParams.nomEntreprise;
      this.idProduits = this.prv.myParams.idProduits;
      this.nomProduits = this.prv.myParams.nomProduits
      this.nbreCment = this.prv.myParams.nbreCment;
      this.commentaire = this.prv.myParams.commentaireItems;
      this.vote = this.prv.myParams.voteItems;
    
  }

  
  newMessage(){
    this.router.navigate(['/send']);
  }

  viewStatistic(){
    this.router.navigate(['/statistics-service']);
  }

  reviewService(){
    this.router.navigate(['/review-service']);
  }

  messageBox(){
    this.router.navigate(['/message-box']);
  }

  viewMore(){
    
  }

}
