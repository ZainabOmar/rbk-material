import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-hiring',
	templateUrl: './hiring.component.html',
	styleUrls: ['./hiring.component.css']
})
export class HiringComponent implements OnInit {

	arr: string [] = ["#company1", "#company2"]
	arrN = 0;

	goRight() {
		var choose = this.arr[this.arrN];
		$(choose).addClass( "animated slideOutRight" );
		$(choose).removeClass( "animated slideOutRight" );
		$(choose).hide();
		this.arrN++;
		if(this.arrN > this.arr.length-1){
			this.arrN = 0;
		}
		choose = this.arr[this.arrN];
		$(choose).show()
		$(choose).addClass( "animated slideInLeft" );
		$(choose).removeClass( "animated slideInLeft" );
	}
	goLeft() {
		var choose = this.arr[this.arrN];
		$(choose).addClass( "animated slideOutLeft" );
		$(choose).removeClass( "animated slideOutLeft" );
		$(choose).hide()
		this.arrN--;
		if(this.arrN < 0){
			this.arrN = this.arr.length-1
		}
		choose = this.arr[this.arrN];
		$(choose).show()
		$(choose).addClass( "animated slideInRight" );
		$(choose).removeClass( "animated slideInLeft" );
	}
	constructor() { }

	ngOnInit() {
	}

}
