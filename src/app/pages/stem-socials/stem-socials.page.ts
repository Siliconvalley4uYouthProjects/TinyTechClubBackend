import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { CommunityPartner } from 'src/app/models/communityPartner.model';

@Component({
  selector: 'app-stem-socials',
  templateUrl: './stem-socials.page.html',
  styleUrls: ['./stem-socials.page.scss'],
})
export class StemSocialsPage implements OnInit {
  ishidden = false;
  pastishidden = true;



  selectedEvents: any[] = [
    {
      eventTitle: "First Event",
      eventMonth: "July",
      eventDate: 24,
      eventDay: "Friday"
    },
    {
      eventTitle: "Second Event",
      eventMonth: "Dec",
      eventDate: 12,
      eventDay: "Monday"
    },
    {
      eventTitle: "Second Event",
      eventMonth: "Dec",
      eventDate: 12,
      eventDay: "Monday"
    }
  ]


  events: any[] = [
    {
      eventTitle: "First Event",
      eventTime: "6:25 PST",
      eventLocation: "Zoom",
      eventDescription: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus velit adipiscing 
      duis suspendisse sit purus. Faucibus sodales libero integer eget mauris nibh 
      odio ullamcorper. Ac ultricies diam urna, aliquet integer. Odio feugiat quis. 
      In ac elit posuere diam, purus bibendum sed. Mattis vitae feugiat sed sit 
      cursus urna. Rhoncus vestibulum vel urna, gravida. Blandit nisl volutpat.`,
      eventMonth: "July",
      eventDate: 24,
      eventDay: "Friday",
    },
    {
      eventTitle: "Second Event",
      eventTime: "7:25 PST",
      eventLocation: "Zoom",
      eventDescription: `
      Lorem ipsum dolor sit , consectetur adipiscing elit. Purus velit adipiscing 
      duis suspendisse sit purus. Faucibus sodales libero integer  mauris nibh 
      odio ullamcorper. Ac ultricies diam urna, aliquet integer. Odio  quis. 
      In ac elit posuere , purus bibendum . Mattis vitae feugiat sed sit 
      cursus urna. Rhoncus vestibulum vel urna, gravida. Blandit nisl volutpat.`,
      eventMonth: "July",
      eventDate: 24,
      eventDay: "Friday",
    },
  ]

  pastEvents: any[] = [
    {
      eventTitle: "First Past Event",
      eventTime: "6:25 PST",
      eventLocation: "Zoom",
      eventDescription: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus velit adipiscing 
      duis suspendisse sit purus. Faucibus sodales libero integer eget mauris nibh 
      odio ullamcorper. Ac ultricies diam urna, aliquet integer. Odio feugiat quis. 
      In ac elit posuere diam, purus bibendum sed. Mattis vitae feugiat sed sit 
      cursus urna. Rhoncus vestibulum vel urna, gravida. Blandit nisl volutpat.`,
      eventMonth: "July",
      eventDate: 24,
      eventDay: "Friday",
    },
    {
      eventTitle: "Second Past Event",
      eventTime: "7:25 PST",
      eventLocation: "Zoom",
      eventDescription: `
      Lorem ipsum dolor sit , consectetur adipiscing elit. Purus velit adipiscing 
      duis suspendisse sit purus. Faucibus sodales libero integer  mauris nibh 
      odio ullamcorper. Ac ultricies diam urna, aliquet integer. Odio  quis. 
      In ac elit posuere , purus bibendum . Mattis vitae feugiat sed sit 
      cursus urna. Rhoncus vestibulum vel urna, gravida. Blandit nisl volutpat.`,
      eventMonth: "July",
      eventDate: 24,
      eventDay: "Friday",
    },
  ];
  
  segmentChanged() {
    if(this.ishidden == false){
      this.ishidden = true;
      this.pastishidden = false;
    }else{
      this.ishidden = false;
      this.pastishidden = true;
    }
  }

  communityPartnerForm: FormGroup;
  formSubmitAttempt: boolean;
  validationMessages = {
    firstName: [
      { type: 'required', message: 'First Name is required' }
    ],
    lastName: [
      { type: 'required', message: 'Last Name is required' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    message: [
      { type: 'required', message: 'Message is required' }
    ]
  };
​
  constructor(private formBuilder: FormBuilder) { }
​
  ngOnInit() {
    this.communityPartnerForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      phone: new FormControl('', null),
      linkdin: new FormControl('', null),
      textbox: new FormControl('', null),
      workexp: new FormControl('', null),
      opts: new FormControl('', null),
      message: new FormControl('', Validators.required)
    });
  }
​
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
​
  submit() {
    if (this.communityPartnerForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.communityPartnerForm);
    }
  }


}
