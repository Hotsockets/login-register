import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PetStoreService } from '../services/pet-store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  pet:FormGroup;
  body;
  storeId: number;

  constructor(
    private petStoreService: PetStoreService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }
    
  ngOnInit() {
    this.pet = this.formBuilder.group({
      type : ['', Validators.required],
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      availability: [true, Validators.required]
    });

    this.pet.valueChanges.subscribe(toto => {
      this.body = {
        "pet" : toto
      }
      console.log(this.body);
    });

    this.route.params.subscribe(routeParams => {
      this.storeId = routeParams.id;
    })
  }

  get f() { return this.pet.controls; }

  onSubmit() {
    this.petStoreService.createPetInStore(this.body, this.storeId).subscribe(data => console.log(data));
    this.router.navigate(['/home'])
  }
}
