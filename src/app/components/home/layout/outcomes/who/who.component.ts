import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent implements OnInit {
  alumni = [
    {
      name: 'Tawfik',
      image: 'assets/RBK/Tawfic-150x150.jpg',
      day: 'cohort1',
      was:
        'Full Stack Developer at Souq.com before RBK, he was Designer Damascus, Syria'
    },
    {
      name: 'Fatima',
      image: 'assets/RBK/fatima-150x150.jpg',
      day: 'cohort1',
      was: 'Program manager at RBK before RBK, she was unemployed Aleppo, Syria'
    },
    {
      name: 'Mohammad',
      image: 'assets/RBK/MohamadBakri-150x150.jpg',
      day: 'cohort1',
      was:
        'Software Engineer at BriteCore before RBK, he was a cashier Amman,Jordan'
    },
    {
      name: 'Ishraq',
      image: 'assets/RBK/Ishraq-150x150.jpg',
      day: 'cohort1',
      was:
        'Software Developer at Optimiza before RBK, she was developer Amman, Jordan'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
