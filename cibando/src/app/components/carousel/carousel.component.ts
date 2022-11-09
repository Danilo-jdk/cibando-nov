import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy{
  images = [
    {id: 1,
    label: 'Spaghetti al sugo'},
    {id: 2,
    label: 'Tagliata di manzo'},
    {id: 3,
    label: 'Tiramisù classico'}
  ];

  percorso = '../assets/images/carousel-';

  constructor() {
    console.log('qui siamo nel costruttore')
  }

  ngOnInit(): void {
    console.log('qui siamo nel onInit')
  }

  ngOnDestroy(): void {
    console.log('sei uscito dal componente')
  }
}
