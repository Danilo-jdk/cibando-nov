import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  percorsoDifficolta = "../../../../assets/images/difficolta-";
  cliccato = false;

  @Input() recipes: Recipe[];

  @Output() messaggio = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  inviaTitolo(titolo: string){
    if(!this.cliccato){
      this.messaggio.emit(titolo);
      this.cliccato = true;
    } else {
      this.messaggio.emit('');
      this.cliccato = false;
    }

  }


}
