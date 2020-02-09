import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PetStore } from '../models/pet-store.model';
import { Pet } from '../models/pet.model';

@Injectable({ providedIn: 'root' })
export class PetStoreService {

    private urlBack = 'http://127.0.0.1:6686';

    constructor(private http: HttpClient, private router: Router) {
    }
    
    getAllStores() {
        return this.http.get<any>(`${this.urlBack}/pet-stores`);
    }

    createStore(body) {
        return this.http.post<PetStore>(`${this.urlBack}/pet-stores`, body);
    }

    buyPet(idStore: number, idPet: number) {
        return this.http.get<Pet>(`${this.urlBack}/pet-stores/${idStore}/pets/${idPet}`)
    }
}