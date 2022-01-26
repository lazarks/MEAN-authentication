import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: any = [];

  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this._eventService.getEvents().subscribe(
      (res) => (this.events = res),
      (err) => console.log(err)
    );
  }
}
