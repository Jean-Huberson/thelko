import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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

}
