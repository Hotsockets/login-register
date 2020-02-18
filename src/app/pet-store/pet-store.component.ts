import { Component, OnInit } from '@angular/core';
import { PetStoreService } from '../services/pet-store.service';
import { Pet } from '../models/pet.model';
import { PetStore } from '../models/pet-store.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  constructor(private petStoreService: PetStoreService, private router: Router) { }

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

  goToPetList(id: number) {
    this.router.navigate([`${environment.apiUrl}/pet-stores/${id}/pets`])
  }
}
