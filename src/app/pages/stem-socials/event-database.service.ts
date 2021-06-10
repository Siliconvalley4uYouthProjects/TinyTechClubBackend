import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventDatabaseService {
  events = new BehaviorSubject([]);
  pastEvents = new BehaviorSubject([]);
  changedEvents = new BehaviorSubject([]);
  changedPastEvents = new BehaviorSubject([]);
  // pastEvents = new BehaviorSubject<any[]>();
  // changedEvents = new BehaviorSubject<any[]>();

  constructor(public db: AngularFirestore) {
    this.getEventData();
  }

  getEventData() {
    var collectionRef = this.db.collection("/pageData/SteamSocials/events", ref => ref.orderBy("time").where("time", ">=", new Date()));
    var eventsListRef = collectionRef.valueChanges({idField: 'id'});
    eventsListRef.subscribe(eventsList => {
      
      var eventsInPro = [];
      eventsList.forEach(event => {
        var eventTime = event['time'].toDate()
      
        
        var appendEvent = {
          eventID: event['id'],
          eventTitle: event["title"],
          eventTime: `${eventTime.getHours()}:${eventTime.getMinutes()}`,
          eventDateWritten: `${eventTime.getMonth() + 1}/${eventTime.getDate()}/${eventTime.getFullYear()}`,
          eventDateTime: eventTime,
          eventLocation: event["location"],
          eventDescription: event["description"]
        }

        eventsInPro.push(appendEvent);
      });
      this.events.next(eventsInPro);
    });



    var collectionRef = this.db.collection("/pageData/SteamSocials/events", ref => ref.orderBy("time").where("time", "<", new Date()));
    var eventsListRef = collectionRef.valueChanges({idField: 'id'});
    eventsListRef.subscribe(eventsList => {
      
      var eventsInPro = [];
      eventsList.forEach(event => {
        var eventTime = event['time'].toDate()
      
        
        var appendEvent = {
          eventID: event['id'],
          eventTitle: event["title"],
          eventTime: `${eventTime.getHours()}:${eventTime.getMinutes()}`,
          eventDateWritten: `${eventTime.getMonth() + 1}/${eventTime.getDate()}/${eventTime.getFullYear()}`,
          eventDateTime: eventTime,
          eventLocation: event["location"],
          eventDescription: event["description"]
        }

        eventsInPro.push(appendEvent);
      });
      this.pastEvents.next(eventsInPro);
    });
  }

  submit() {
    console.log(this.changedEvents.getValue());
    console.log(this.changedPastEvents.getValue());
    
    var colRef = this.db.collection("/pageData/SteamSocials/events");

    var deleteIDs = [];
    colRef.get().subscribe(docs => {
      docs.forEach(doc => {
        deleteIDs.push(doc.id);
      });


      this.changedEvents.getValue().forEach(eventObj => {
        var eventID = eventObj["eventID"];
  
        var dbEvent = {
          time: eventObj["eventDateTime"],
          title: eventObj["eventTitle"],
          location:  eventObj["eventLocation"],
          description: eventObj["eventDescription"]
        }
        
        if(eventID != "") {
          console.log(eventID);
          deleteIDs = deleteIDs.filter(function(value){ 
            return value != eventID;
          });
          var docRef = colRef.doc(eventID);
          docRef.set(dbEvent);
        }
        else {
          colRef.add(dbEvent);
        }
        console.log(deleteIDs);
        deleteIDs.forEach(deleteID => {
          colRef.doc(deleteID).delete();
        });
      });

      this.changedPastEvents.getValue().forEach(eventObj => {
        var eventID = eventObj["eventID"];
  
        var dbEvent = {
          time: eventObj["eventDateTime"],
          title: eventObj["eventTitle"],
          location:  eventObj["eventLocation"],
          description: eventObj["eventDescription"]
        }
        
        if(eventID != "") {
          console.log(eventID);
          deleteIDs = deleteIDs.filter(function(value){ 
            return value != eventID;
          });
          var docRef = colRef.doc(eventID);
          docRef.set(dbEvent);
        }
        else {
          colRef.add(dbEvent);
        }
        console.log(deleteIDs);
        deleteIDs.forEach(deleteID => {
          colRef.doc(deleteID).delete();
        });
      });


    });

    
  }

  getDayFromNum(num:Number) {
    switch(num){
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuseday";
      case 3:
        return "Wensday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saterday";
    }
  }

  getMonthFromNum(num:Number) {
    switch(num){
      case 0:
        return "Jan";
      case 1:
        return "Feb";
      case 2:
        return "Mar";
      case 3:
        return "Apr";
      case 4:
        return "May";
      case 5:
        return "Jun";
      case 6:
        return "Jul";
      case 7:
        return "Aug";
      case 8:
        return "Sep";
      case 9:
        return "Oct";
      case 10:
        return "Nov";
      case 11:
        return "Dec";
    }
  }
}
