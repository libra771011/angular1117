import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home.component';
const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'info', component: InfoComponent },
      { path: 'calendar', component: CalendarComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
