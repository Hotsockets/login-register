import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './services/alert.service';

@NgModule({
   declarations: [
      AppComponent,
      AlertComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
      AlertService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
