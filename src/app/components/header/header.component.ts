import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  headerClicked = false;

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {}

  logOut(){
    console.log("signed out");
    this.afAuth.signOut();
    this.router.navigateByUrl('/login')
    

  }

}
