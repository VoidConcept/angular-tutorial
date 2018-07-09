import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formulario = {
    email: "",
    password: "",
    accept:false
  };
  constructor() { }

  ngOnInit() {

  }

  miFuncion()
  {
    console.log('Email '+ this.formulario.email);
    console.log('Password '+ this.formulario.password);
    console.log('Accept '+ this.formulario.accept);
  }
}
