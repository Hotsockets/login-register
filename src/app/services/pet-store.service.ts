import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PetStore } from '../models/pet-store.model';
import { Pet } from '../models/pet.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PetStoreService {

    constructor(private http: HttpClient, private router: Router) {
    }
    
    getAllStores() {
        return this.http.get<any>(`${environment.apiUrl}/pet-stores`);
    }

    createStore(body: Body) {
        return this.http.post<PetStore>(`${environment.apiUrl}/pet-stores`, body);
    }

    createPetInStore(body: Body, id: number) {
        return this.http.post<PetStore>(`${environment.apiUrl}/pet-stores/${id}/pets`, body);
    }

    buyPet(idStore: number, idPet: number) {
        return this.http.get<Pet>(`${environment.apiUrl}/pet-stores/${idStore}/pets/${idPet}`)
    }
}