import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';




import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './shared/route-guard.service';


const routes: Routes = [
  
 
  { path:'login',component:LoginComponent},
  { path:'dashboard/:name',component:DashboardComponent,canActivate: [RouteGuardService]},
  { path:'logout',component:LogoutComponent, canActivate: [RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }