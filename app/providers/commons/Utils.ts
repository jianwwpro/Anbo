import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ExhibitData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Utils {
  
  constructor(){

  }

/**
 * 过滤图片
 */
static filterImg(url:string,size:string){
	if(url==null||url==''){
		return '';
	}	
	if(size==null){
		size="414x414";
	}
	var index = url.indexOf('/',7)
	var pre = url.substring(0,index)
	var fix =url.substring(index);
	return pre+'/resize_'+size+fix;
}
/**
 * 格式化时间
 */
static formatDate (str) {
	if(str==null)
		return str;
	else 
		return str.substring(0,10);
}

}