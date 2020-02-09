import { Component, OnInit } from '@angular/core';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'login-register';

  ngOnInit() {
    // if(localStorage) {

    // }
  }
}
