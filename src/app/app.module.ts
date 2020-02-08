import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PetStoreComponent } from './pet-store/pet-store.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
=======
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './services/alert.service';
>>>>>>> fe2e636f22a7e54873630072d71279918f17eb9e

@NgModule({
   declarations: [
      AppComponent,
<<<<<<< HEAD
      HomeComponent,
      RegisterComponent,
      LoginComponent,
      PetStoreComponent,
      HeaderComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
   ],
   providers: [],
=======
      AlertComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
      AlertService
   ],
>>>>>>> fe2e636f22a7e54873630072d71279918f17eb9e
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
