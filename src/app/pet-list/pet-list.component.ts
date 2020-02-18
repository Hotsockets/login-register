import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetStoreService } from '../services/pet-store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit, OnDestroy {
  
  private routeSub: Subscription;
  private routeId: number;
  public petIds: Object[];

  constructor(private petStoreService: PetStoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.routeId = params['id'];
    })
    this.getAllPetsInStore(this.routeId)
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getAllPetsInStore(routeId: number) {
    this.petStoreService.getAllPetsInStore(routeId).subscribe( petList => {
      this.petIds = petList['data'].petIds;
    });
  }

  buyPet(id: number) {
    console.log(`Buy pet n°${id}`)
  }
}
