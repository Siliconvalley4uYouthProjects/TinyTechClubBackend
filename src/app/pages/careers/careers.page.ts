import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.page.html',
  styleUrls: ['./careers.page.scss'],
})
export class CareersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  enrichmentInstructor() {
    this.router.navigateByUrl('/careers/enrichment-instructors');
  }

}
