import {Component,ViewChild,ElementRef} from '@angular/core';
import {NavController,LoadingController,ViewController,Button,ToastController} from 'ionic-angular';
import {ExhibitService} from '../../providers/exhibit/ExhibitService'
import {Utils} from '../../providers/commons/Utils'
import {ExhibitInfoPage} from './exhibitInfo'


@Component({
  templateUrl: 'build/pages/exhibit/exhibitTab.html',
  providers: [ExhibitService]
})

export class ExhibitTabPage {
  menuId = '';
  platformId='2';//平台是APP
  exhibits = [];
  didInit=true;
 

  constructor(private toastController:ToastController ,private viewController : ViewController,private loadingController : LoadingController,private navCtrl: NavController,private exhibitService: ExhibitService) {
  }
  ionViewDidEnter(){
    console.log("exhibitTab Enter");
    let _this = this;
    if(this.didInit)
      setTimeout(function() {
       _this.changeExhibitType("");   
      }, 1000);
    else
      this.changeExhibitType("");
     this.didInit=false;
  }

 
/**
 * 数据切换
 */
  changeExhibitType(menuId){
   
    this.switchBtn(menuId);
    this.menuId=menuId;
    let loading = this.loadingController.create({
      spinner:'ios'
    });
    loading.present();
    this.exhibitService.exhibitList(this.platformId,this.menuId).subscribe(res=>{
      res.map(ex=>{
        ex.cover=Utils.filterImg(ex.cover,null);
        ex.startDate = Utils.formatDate(ex.startDate);
        ex.endDate = Utils.formatDate(ex.endDate);
      })
      this.exhibits=res;
      loading.dismiss();
    },error=>{
      loading.dismiss();
      this.toastController.create({
        duration:2000,
        message:'数据加载错误',
        position:'bottom'
      }).present();
      
    }); 
  }
/**
 *  前往展览详情页面
 */
  gotoExhibitInfoPage(exhibit){
    this.navCtrl.push(ExhibitInfoPage,{exhibit:exhibit});
  }

  @ViewChild ('tjBtn',{read:Button}) tjBtn:Button;
  @ViewChild ('zzBtn',{read:Button}) zzBtn:Button;
  @ViewChild ('jjBtn',{read:Button}) jjBtn:Button;
  @ViewChild ('lsBtn',{read:Button}) lsBtn:Button;
  /**
   * 切换btn
   */
  switchBtn(menuId){
    console.log(menuId);
    this.tjBtn.color='gray';
    this.zzBtn.color='gray';
    this.jjBtn.color='gray';
    this.lsBtn.color='gray';

     switch(menuId){
        case 1:
          this.zzBtn.color='dark';
          break;
        case 2:
          this.jjBtn.color='dark';
          break;
        case 3:
          this.lsBtn.color='dark';
          break;
        default:
          this.tjBtn.color='dark';
          break
      }
  }
  

  
}
