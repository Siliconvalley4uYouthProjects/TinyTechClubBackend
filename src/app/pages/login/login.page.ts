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

  user: any = {};

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  adminlogin(){
    this.afAuth.signInWithEmailAndPassword(this.user.email, this.user.password).then( (res)=> {
console.log(res);
console.log("authenticated");
this.router.navigateByUrl('/stem-socials')
    }) 
    .catch( error => {
      console.log(error);
    })
  }

}
