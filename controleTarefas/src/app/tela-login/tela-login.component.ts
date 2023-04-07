import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css'],
  animations:[
    trigger('formularios',[
      state('oculto',style({
        //opacity:0,
        transform:'scale(1.2)'
      })),
      state('visivel',style({
        //opacity:1,
        transform:'scale(1)'

      })),
      transition('oculto <=> visivel',animate('1s ease-in'))
    ])
  ]
})
export class TelaLoginComponent implements OnInit {

  // Controle Animação
  public formLogin:string ='visivel'
  public formCadastro:string ='oculto'

  public formAtivo:boolean = true




  constructor(
    public modalService: NgbModal
  ){ }

  ngOnInit(): void {
    
  }

  public logicaAnimacao():void{
    if(this.formLogin === 'visivel'){
      this.formLogin = 'oculto'
      this.formCadastro = 'visivel'
      //this.formAtivo = false
      
    } else {
      this.formLogin = 'visivel'
      this.formCadastro = 'oculto'
      //this.formAtivo = true
    }
  }


  abrirModalCadastro(){
    const modalRef = this.modalService.open(FormCadastroComponent)
  }





}
