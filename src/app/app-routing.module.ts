import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  { path : '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-store', component: AddStoreComponent},
  { path: 'store/:id', component: AddPetComponent},
  { path: 'store/:id/pets', component: AddPetComponent},
  { path: 'pet-stores/:id/pets', component: PetListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
