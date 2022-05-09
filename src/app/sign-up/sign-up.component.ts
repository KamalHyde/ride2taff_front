import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // utilisation des reactive forms
  // initialisation de la variable de type formGroup
  signupForm!: FormGroup;

  // egex pour email
  emailRegex!: RegExp;
  constructor(private service: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Regex pattern pour les emails
    this.emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;
    // intitialisation de sign upForm
    this.signupForm = this.formBuilder.group({
      first_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      email: [null, [Validators.required], [Validators.pattern(this.emailRegex)]],
      email_validation: [null, [Validators.required], [Validators.pattern(this.emailRegex)]],
      password: [null, [Validators.required]],
      password_validation: [null, [Validators.required]]
    })
  }

  // verification des champs email et mot de passe
  // ajout d'un nouvel utilisateur
  addUser() {

    if (this.signupForm.value.email == this.signupForm.value.email_validation
       && this.signupForm.value.password == this.signupForm.value.password_validation) {
      this.service.addUser(this.signupForm.value).subscribe(() => {
        console.log("Succès");
      })  
    } else {
      console.log("l'email et/ou le mot de passe de validation sont différents");
    }
    
  }

}
