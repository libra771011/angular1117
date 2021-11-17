import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  run(){
    console.log("featureservice");
  }
  close = false; // nav 是否關閉
  show = false; // 是否出現選單
  constructor() {}

  asideToggle() {
    return this.close; //回傳點擊後布林值
  }

  asideSwitch() {
    this.close = !this.close; //側欄選單開關
  }

  showList() {
    return this.show; //回傳 nav 選單點擊後的布林值
  }

  toggleList() {
    this.show = !this.show; //nav 選單開關
  }

}
