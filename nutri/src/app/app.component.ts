import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../pages/home/home';
import { DicasPage } from '../pages/dicas/dicas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage; //This is commented because now we verify if there is a user logged in, if yes returns to DicasPage
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afAuth: AngularFireAuth) {

    //When reload a page it returns to home, so this const ask if there is an user logged in, if is true reload a page retourn to DicaPage
    //this mean the user is logged, if there is no user logged anymore it returns to HomePage.
    const authObserver = afAuth.authState.subscribe(users => {
      if (users){
        this.rootPage = DicasPage;
        authObserver.unsubscribe();
      }
      else{
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
