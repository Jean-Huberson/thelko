import { Component } from '@angular/core';
import {AuthServiceService} from './services/auth-service.service';
import {Router} from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    
    {
      title: 'Secteurs d\'activité',
      url: '/secteur-activite',
      icon: 'wifi'
    },
    {
      title: 'Entreprises',
      url: '/list-entreprise',
      icon: 'list'
    },
    /*{
      title: 'Mon compte',
      url: '/compte',
      icon: 'md-contact'
    }*/
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthServiceService,
    private router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.splashScreen.hide();

    this.authenticationService.authenticationState.subscribe(state => {
      if (state) {
        this.router.navigate(['/home']);
        this.splashScreen.hide();
      } else {
        this.router.navigate(['/login']);
        this.splashScreen.hide();
      }
    });

    this.statusBar.styleDefault();

    });
  }
}
