import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

	@Input() btn = true;

  constructor() { }

  ngOnInit() {
  }

}
