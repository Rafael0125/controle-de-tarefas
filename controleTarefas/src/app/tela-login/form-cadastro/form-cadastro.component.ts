import { Component, OnInit, ViewChild } from '@angular/core';

import { Usuario } from 'src/app/shared/usuario.model';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit{
  @ViewChild('formCadastro') formCadastro! : NgForm

  public usuario!:Usuario

  constructor(
    public activeModal: NgbActiveModal,

  ){}

  ngOnInit(): void {
    this.usuario = new Usuario()
    
  }

}
