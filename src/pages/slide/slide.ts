import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides  } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})


export class SlidePage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    
    if(currentIndex == 3){
      this.navCtrl.setRoot(HomePage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }

}
