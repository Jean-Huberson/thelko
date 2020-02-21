import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {AuthServiceService} from '../services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})


export class SendPage implements OnInit {

  constructor(storage:Storage, private router:Router, private authServ:AuthServiceService) { }

  ngOnInit() {
  }

  send(){
    console.log(this.authServ.getData());
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
