import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-statistics-service',
  templateUrl: './statistics-service.page.html',
  styleUrls: ['./statistics-service.page.scss'],
})
export class StatisticsServicePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
