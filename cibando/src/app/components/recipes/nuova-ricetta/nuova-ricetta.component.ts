import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-nuova-ricetta',
  templateUrl: './nuova-ricetta.component.html',
  styleUrls: ['./nuova-ricetta.component.scss']
})
export class NuovaRicettaComponent implements OnInit {

  editor = ClassicEditor;

  editorConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'codeBlock',
            'undo',
            'redo',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    height: 300,
};

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    difficulty: new FormControl(0),
    published: new FormControl(false)
  })

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
    this.recipeService.insertRecipe(this.form.getRawValue()).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })
  }

}
