
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // providers: [MessageService]
})
export class LoginComponent implements OnInit {
  loginError: string = '';
  user: any;

  constructor(
    private authService: AuthService,
     private router: Router,
     private messageService: MessageService
     ) { }

  ngOnInit(): void {
  }

  onSubmit(credenziali: any){
    if(credenziali.email !== '' && credenziali.password !== ''){
      this.authService.login(credenziali.email, credenziali.password).subscribe({
        next: (res) => {
          this.user = res;
          if(res) {
            this.authService.saveStorage(res);
            this.messageService.add({severity:'success', summary:'Successo', detail:'Login effettuato con successo', life: 3000});

            setTimeout(() => {
              this.router.navigate(['home']);
            }, 3000)

          } else {
            this.loginError = "email o password errati";
            this.messageService.add({severity:'error', summary:'Errore', detail:'Email o password errati'});
          }
        },
        error: (err) => {
          console.log(err);
          this.loginError = "Errore nel server: " + err;
          this.messageService.add({severity:'error', summary:'Errore', detail: "Email o password errati "});
        }
      })
    }
  }

}
