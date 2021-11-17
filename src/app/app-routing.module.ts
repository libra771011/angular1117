import { Home2Component } from './home/home2/home2.component';
import { Home1Component } from './home/home1/home1.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { observable } from 'rxjs';
//自動新增
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'home1',
        component: Home1Component
      },
      {
        path: 'home2',
        component: Home2Component,
      },
    ],
  },
  {
    path: 'second',
    component: SecondComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full", // 當路徑是空的時候轉址到 home
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"second",
    component:SecondComponent
  },
  {
    path: "**",
    component: HomeComponent, // 萬用路徑，路由沒有比對到，永遠會執行
  },
]; //主要寫其他路由的地方

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
