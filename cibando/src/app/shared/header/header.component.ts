import { Component, OnInit, DoCheck } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { faRegistered } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
user: any;

  iconaHome = faHouzz;
  iconaScheda = faNewspaper;
  iconaMail = faMailBulk;
  iconaRegistrati = faRegistered;
  testo: string;
  isCollapsed = true;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    public authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  cerca(){
    this.recipeService.cerca.next(this.testo)
    this.router.navigate(['ricette/result/']);
  }

}
