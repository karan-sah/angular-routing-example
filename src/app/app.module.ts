import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import {Routes, RouterModule} from "@angular/router";
import { ForgotComponent } from './forgot/forgot.component'


const routes :Routes = [
  { path:'', component: MainComponent},
   { path:'signup', component: SignupComponent},
    {path:'login', component: LoginComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MainComponent,
    ProfileComponent,
    NavbarComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
