import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
	password: string = ""

  constructor(private router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  adminLogin(){
    //
  }

}
