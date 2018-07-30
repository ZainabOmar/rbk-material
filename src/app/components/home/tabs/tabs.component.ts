import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }


}
