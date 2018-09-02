import { BrowserModule } from '@angular/platform-browser';
import { HttpModule  } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerguntaPage } from '../pages/pergunta/pergunta';
import { ResultadoPage } from '../pages/resultado/resultado';
import { PerguntaServiceProvider } from '../providers/pergunta-service/pergunta-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerguntaPage,
    ResultadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerguntaPage,
    ResultadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PerguntaServiceProvider
  ]
})
export class AppModule {}

