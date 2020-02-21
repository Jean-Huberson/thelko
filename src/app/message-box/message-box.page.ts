import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.page.html',
  styleUrls: ['./message-box.page.scss'],
})
export class MessageBoxPage implements OnInit {

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

  viewMessage(){
    this.router.navigate(['/view-message']);
  }
}
