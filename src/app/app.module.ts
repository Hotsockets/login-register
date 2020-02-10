import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PetStoreComponent } from './pet-store/pet-store.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { AddStoreComponent } from './add-store/add-store.component';
import { AddPetComponent } from './add-pet/add-pet.component';

@NgModule({
   declarations: [
      AppComponent,
      AddPetComponent,
      AddStoreComponent,
      HomeComponent,
      RegisterComponent,
      LoginComponent,
      PetStoreComponent,
      HeaderComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
   ],
   providers: [
      {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
