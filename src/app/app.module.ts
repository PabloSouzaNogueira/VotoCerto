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
import { SlidePage } from '../pages/slide/slide';
import { PerguntaServiceProvider } from '../providers/pergunta-service/pergunta-service';
import { CandidatoServiceProvider } from '../providers/candidato-service/candidato-service';
import { RespostaServiceProvider } from '../providers/resposta-service/resposta-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerguntaPage,
    ResultadoPage,
    SlidePage
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
    ResultadoPage,
    SlidePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PerguntaServiceProvider,
    CandidatoServiceProvider,
    RespostaServiceProvider
  ]
})
export class AppModule {}

