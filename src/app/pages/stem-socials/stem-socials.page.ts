import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { CommunityPartner } from 'src/app/models/communityPartner.model';

import { observable, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { EventDatabaseService } from './event-database.service';

@Component({
  selector: 'app-stem-socials',
  templateUrl: './stem-socials.page.html',
  styleUrls: ['./stem-socials.page.scss'],
})
export class StemSocialsPage implements OnInit {
  ishidden = false;
  pastishidden = true;

  
  events: any[];
  pastEvents: any[];

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
  constructor(private formBuilder: FormBuilder, private eventDatabaseService:EventDatabaseService) { }
​
  ngOnInit() {
    
    this.eventDatabaseService.events.subscribe(events => {
      this.events = events;
    });
    this.eventDatabaseService.pastEvents.subscribe(pastEvents => {
      this.pastEvents = pastEvents;
    });

    // this.eventDatabaseService.getEventData();

    // console.log(this.pastEvents);


    // Sub to events
    // events



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

  editEvent(event) {
    event.target.parentElement.getElementsByClassName("displayText").item(0).style.display = "none";
    event.target.parentElement.getElementsByClassName("editText").item(0).style.display = "block";
    event.target.parentElement.getElementsByClassName("calendar-div").item(0).getElementsByClassName("calender").item(0).getElementsByClassName("dateInput").item(0).style.display = "block";

    event.target.parentElement.getElementsByClassName("fromEdit").item(0).style.display = "none";
    event.target.parentElement.getElementsByClassName("toEdit").item(0).style.display = "block";
  }

  stopEditEvent(event) {
    event.target.parentElement.getElementsByClassName("displayText").item(0).style.display = "block";
    event.target.parentElement.getElementsByClassName("editText").item(0).style.display = "none";
    event.target.parentElement.getElementsByClassName("calendar-div").item(0).getElementsByClassName("calender").item(0).getElementsByClassName("dateInput").item(0).style.display = "none";

    event.target.parentElement.getElementsByClassName("fromEdit").item(0).style.display = "block";
    event.target.parentElement.getElementsByClassName("toEdit").item(0).style.display = "none";
  }

  
  deleteEvent (event){
    console.log(event);
    
    this.events = this.events.filter(function(value){ 
      return value != event;
    });

    this.eventsChange();
  }


  addEvent() {
    console.log("adding Event");
    this.events.unshift({
      eventID: '',
      eventTitle: 'Untitled Event',
      eventTime: 'TBA',
      eventDay: 'TBA',
      eventDate: 'TBA',
      eventMonth: 'TBA',
      eventDateTime: new Date(),
      eventLocation: 'TBA',
      eventDescription: 'None'
    });

    this.eventsChange();
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
  
  eventsChange() {
    console.log(this.events);
    this.eventDatabaseService.changedEvents.next(this.events);

    // if(this.events)
  }

}
