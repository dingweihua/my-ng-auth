import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './service/auth.service';
import { LoginGuardService } from './service/login-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
