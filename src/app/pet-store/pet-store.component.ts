import { Component, OnInit } from '@angular/core';
import { PetStoreService } from '../services/pet-store.service';
import { Pet } from '../models/pet.model';
import { PetStore } from '../models/pet-store.model';

@Component({
  selector: 'pet-store',
  templateUrl: './pet-store.component.html',
  styleUrls: ['./pet-store.component.css']
})
export class PetStoreComponent implements OnInit {

  private roleUserObject = JSON.parse(localStorage.getItem('roleUser'));
  public roleUser: string;
  public stores: PetStore[] = [];
  public petStore: Pet[] = [];

  constructor(private petStoreService: PetStoreService) { }

  ngOnInit() {
    this.roleUser = this.roleUserObject.role
    this.getAllStores();
  }

  getAllStores() {
    this.petStoreService.getAllStores().subscribe(data => {
      this.stores = data['data'].store;
      console.log( data['data'].store)
    })
  }

  createStore() {
    let body;
    
    this.petStoreService.createStore(body).subscribe(data => 
      console.log(data)
    )
  }

  buyPet() {
    let idStore;
    let idPet;
    this.petStoreService.buyPet(idStore, idPet).subscribe(data => {
      console.log(data);
    })
  }
}
