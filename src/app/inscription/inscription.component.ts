import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    ReactiveFormsModule,
     ReactiveFormsModule
  ],
 })
export class YourModule { }
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
title="CodeSandbox";

onSubmit(form: NgForm) {
  if (form.valid) {
    console.log("Données du formulaire :", form.value);
  } else {
    console.log("Le formulaire n'est pas valide");
  }
}

passwordsMatch(form: NgForm) {
  const password = form.value['password'];
  const passwordConfirm = form.value['passwordconfirm'];
  return password === passwordConfirm;
}

  constructor() { }

  ngOnInit(): void {
  }

}
