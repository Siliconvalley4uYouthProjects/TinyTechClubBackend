import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-today',
  templateUrl: './register-today.component.html',
  styleUrls: ['./register-today.component.scss'],
})
export class RegisterTodayComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {}

  routetoRegister() {
    this.router.navigateByUrl('/stem-socials');
  }

}
