import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ExhibitData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ExhibitService {
  
  url = 'http://192.168.82.13:81/hzgj/interface/exhibitMessageList';
  constructor(private http: Http) {}

  exhibitList(platfornId:string,menuId:string){
    let requestUrl="";
    if(!menuId){
      requestUrl = this.url+"?isPub=1";
    }else {
      requestUrl = this.url+"?platformid="+platfornId+"&menuId="+menuId;
    }
    return this.http.get(requestUrl).map(res=>res.json());
  }
}