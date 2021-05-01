import { Component, OnInit } from '@angular/core';
import { EventDatabaseService } from '../../pages/stem-socials/event-database.service';

@Component({
  selector: 'app-change-prompt',
  templateUrl: './change-prompt.component.html',
  styleUrls: ['./change-prompt.component.scss'],
})
export class ChangePromptComponent implements OnInit {

  constructor(private eventDatabaseService: EventDatabaseService) { }

  ngOnInit() {}

  submit() {
    this.eventDatabaseService.submit();
  }

  revert() {
    this.eventDatabaseService.getEventData();
  }

}
