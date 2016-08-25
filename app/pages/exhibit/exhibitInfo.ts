import { Component,ViewChild,ElementRef} from '@angular/core';
import { NavController,NavParams,Button } from 'ionic-angular';
import {Utils} from '../../providers/commons/Utils'

/*
  Generated class for the ExhibitPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/exhibit/exhibitInfo.html',
})
export class ExhibitInfoPage {
  exhibit;
  constructor(private navCtrl: NavController,private navParams : NavParams) {
    
    this.exhibit= navParams.data.exhibit;
    //this.exhibit.cover = Utils.filterImg(this.exhibit.cover,null);
    console.log(this.exhibit);
  }
  @ViewChild("descElement",{read:ElementRef})descElement:ElementRef;
  moreText='更多展览介绍';
  beMore:boolean;

  /**
   * 展览介绍的收起与展开
   */
  toogleMoreDesc(){
    if(this.beMore){
      this.descElement.nativeElement.style.height='50px';
       this.moreText='更多展览介绍';
    }else {
       this.descElement.nativeElement.style.height='auto';
       this.moreText='收起';
    }
    this.beMore=!this.beMore;
  }

}
