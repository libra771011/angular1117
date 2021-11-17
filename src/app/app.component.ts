import { Component } from '@angular/core';

// Constant
import { stationList } from './station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MRTStationList';
  list = stationList;
  bar = '小綿羊';
  url =  "https://tip.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime";
  str = "pic title";
  imgUrl = "http://pic.616pic.com/ys_bnew_img/00/31/65/cSvzEFKxlT.jpg";

  clickBtn(){
    alert("click");
  }

  keyword = "";
  keywordReset(){
    this.keyword = ""; // 清空輸入框
  }
}
