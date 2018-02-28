import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { LoginGuardService } from './service/login-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent, canActivate: [LoginGuardService]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
