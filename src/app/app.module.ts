import { FeatureService } from './feature.service'; //service 新增
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { ScrollingModule } from '@angular/cdk/scrolling'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AsideComponent } from './home/aside/aside.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsideComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    MatIconModule,
    MatListModule,
    HomeModule,
    BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule
    ,MatSliderModule,MatButtonModule,MatSelectModule,FlexLayoutModule


  ], // 加入倒 imports
  providers: [FeatureService], //service用
  bootstrap: [AppComponent]
})
export class AppModule { }
