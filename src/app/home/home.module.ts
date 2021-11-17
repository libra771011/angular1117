import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLineModule } from '@angular/material/core';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home.component';
import { InfoComponent } from './info/info.component';
import { CalendarComponent } from './calendar/calendar.component';1
import { MaterialModule } from 'src/shared/shared-module';



@NgModule({
  declarations: [
  InfoComponent,
  CalendarComponent],
  imports: [
    FlexLayoutModule,
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ],
  exports: [

  ],

})
export class HomeModule { }
