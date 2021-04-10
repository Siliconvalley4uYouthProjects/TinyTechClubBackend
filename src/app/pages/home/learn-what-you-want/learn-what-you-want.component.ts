import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-learn-what-you-want',
  templateUrl: './learn-what-you-want.component.html',
  styleUrls: ['./learn-what-you-want.component.scss'],
})
export class LearnWhatYouWantComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {}

}

