import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { CommunityPartner } from 'src/app/models/communityPartner.model';

import { observable, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { EventDatabaseService } from './event-database.service';
import { ChangePromptComponent } from '../../components/change-prompt/change-prompt.component'

@Component({
  selector: 'app-stem-socials',
  templateUrl: './stem-socials.page.html',
  styleUrls: ['./stem-socials.page.scss'],
})
export class StemSocialsPage implements OnInit {
  @ViewChild('changePrompt') changePrompt: ElementRef;
  // @ViewChild(ChangePromptComponent, { static: false }) changePrompt: ChangePromptComponent;

  ishidden = false;
  pastishidden = true;

  hide = true;

  
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
  

  // ngAfterViewInit() {
  //   console.log(this.changePrompt);
  //   console.log(typeof(this.changePrompt));

    
  // }

  ngOnInit() {
    
    this.eventDatabaseService.events.subscribe(events => {
      console.log("change")
      this.events = events;
    });
    this.eventDatabaseService.pastEvents.subscribe(pastEvents => {
      this.pastEvents = pastEvents;
    });

    

    this.eventDatabaseService.changedEvents.subscribe(changedEvents => {
      console.log((changedEvents))
      console.log((this.eventDatabaseService.events.getValue()))
      console.log((changedEvents != this.eventDatabaseService.events.getValue()))
      if(changedEvents != this.eventDatabaseService.events.getValue()) {
        // Show Prompt
        // this.changePrompt.nativeElement.style.display = 'block';
        console.log("unhide")
        this.hide = false;
      }else{
        // Hide Prompt
        // console.log(this.changePrompt);
        // console.log(typeof(this.changePrompt));
        // this.changePrompt.nativeElement.style.display = 'none';
        console.log("hide")
        this.hide = true;
      }
    });



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
      eventDateWritten: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
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
    console.log(this.pastEvents);
    this.eventDatabaseService.changedEvents.next(this.events);
    this.eventDatabaseService.changedPastEvents.next(this.pastEvents);
  }

  
  updateDateTime(event, i) {
    event = event.split("/");
    this.events[i]["eventDateTime"].setMonth(event[0] - 1);
    this.events[i]["eventDateTime"].setDate(event[1]);
    this.events[i]["eventDateTime"].setFullYear(event[2]);

    var dataTime = this.events[i]["eventDateTime"]
    this.events[i]["eventDateWritten"] = `${dataTime.getMonth() + 1}/${dataTime.getDate()}/${dataTime.getFullYear()}`

    this.eventsChange();
  }
  updatePastDateTime(event, i) {
    event = event.split("/");
    this.pastEvents[i]["eventDateTime"].setMonth(event[0] - 1);
    this.pastEvents[i]["eventDateTime"].setDate(event[1]);
    this.pastEvents[i]["eventDateTime"].setFullYear(event[2]);

    var dataTime = this.pastEvents[i]["eventDateTime"]
    this.pastEvents[i]["eventDateWritten"] = `${dataTime.getMonth() + 1}/${dataTime.getDate()}/${dataTime.getFullYear()}`

    this.eventsChange();
  }
  updateTime(event, i) {
    event = event.split(":");
    this.events[i]["eventDateTime"].setHours(event[0], event[1]);

    var dataTime = this.events[i]["eventDateTime"]
    this.events[i]["eventTime"] = `${dataTime.getHours()}:${dataTime.getMinutes()}`

    this.eventsChange();
  }
  updatePastTime(event, i) {
    event = event.split(":");
    this.pastEvents[i]["eventDateTime"].setHours(event[0], event[1]);

    var dataTime = this.pastEvents[i]["eventDateTime"]
    this.pastEvents[i]["eventTime"] = `${dataTime.getHours()}:${dataTime.getMinutes()}`

    this.eventsChange();
  }

  getDayFromNum(num:Number) {
    return this.eventDatabaseService.getDayFromNum(num);
  }

  getMonthFromNum(num:Number) {
    return this.eventDatabaseService.getMonthFromNum(num);
  }
}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

