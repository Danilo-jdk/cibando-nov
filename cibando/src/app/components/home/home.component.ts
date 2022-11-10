import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  evidenziato = false;

  constructor() { }

  ngOnInit(): void {
    console.log('sei entrato nella home');
  }

  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }

  ngOnDestroy(): void {
    console.log('sei uscito dalla home');
  }
}
