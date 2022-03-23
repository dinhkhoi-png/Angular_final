import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from './admin/admin.component';
// import { FromComponent } from './admin/from/from.component';
import { LoginComponent } from './admin/login/login.component';
const routes: Routes = [
  //redirec ve home
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  // {
  //   path:'from',
  //   component: FromComponent
  // },
  {
    path:'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
