import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DicasPage } from '../pages/dicas/dicas';
import { RegistroPage } from '../pages/registro/registro';
import { RecuperarPage } from '../pages/recuperar/recuperar';
import { PerfilPage } from '../pages/perfil/perfil';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth = {
    apiKey: "AIzaSyAb_svM7jnreAukz4LNjT0IR03sT88Y_0Y",
    authDomain: "nutri-230217.firebaseapp.com",
    databaseURL: "https://nutri-230217.firebaseio.com",
    projectId: "nutri-230217",
    storageBucket: "nutri-230217.appspot.com",
    messagingSenderId: "518519572647"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DicasPage,
    RegistroPage,
    RecuperarPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseAuth)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DicasPage,
    RegistroPage,
    RecuperarPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
