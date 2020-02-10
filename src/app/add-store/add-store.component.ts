import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PetStoreService } from '../services/pet-store.service';

@Component({
  selector: 'add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

  storeForm: FormGroup;
  body: Body;

  constructor(private formBuilder: FormBuilder, private petStoreService: PetStoreService) { }

  ngOnInit() {
    this.storeForm = this.formBuilder.group({
      owner: ['', Validators.required],
    });
    this.storeForm.valueChanges.subscribe(data => this.body = data)
  }

  get f() { return this.storeForm.controls; }

  onSubmit() {
    this.petStoreService.createStore(this.body).subscribe(data => console.log(data));
  }
}
