import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Usuario } from 'src/app/shared/usuario.model';

import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit{

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>

  constructor(
  ){}

  ngOnInit(): void {
    
  }

  public exibirPainelLogin():void{
    this.exibirPainel.emit('login')

  }


}
