import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

// import { AlertService, UserService, AuthenticationService } from '@/_services';

@Component({
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    body: Body;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
    ) { 
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            birthday: ['', Validators.required],
            role: ['', [Validators.required]]
        });
        this.registerForm.valueChanges.subscribe(data => {
            this.body = data;
            console.log(this.body)
        })
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
        
        this.loading = true;
        this.userService.register(this.body)
        .subscribe(
        data => {
            console.log('data: ', data);
            this.router.navigate(['/']);
        },
        error => {
            throwError(error)
            this.loading = false;
        });
    }
}