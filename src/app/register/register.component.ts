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
    private registerForm: FormGroup;
    private loading = false;
    private submitted = false;
    private body;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            birthday: ['', Validators.required],
            role: ['', [Validators.required]]
        });
        console.log('register Form :', this.registerForm.value)
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.body = { 'user' : this.registerForm.value }

        console.log('body', this.body)
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