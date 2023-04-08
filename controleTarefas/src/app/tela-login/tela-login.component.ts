import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate,keyframes } from '@angular/animations';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css'],
  animations:[
    trigger('animacao-painel',[
      state('criado', style({
        opacity:1
      })),
      transition('void => criado',[
        style({
          opacity:0,
          transform:'translate(50px,0)'
        }),
        // 0 void ----x-----------------x--x----x--------------x criado 1.5s //
        animate('1500ms ease-in-out', keyframes([
          style({offset:0.15, opacity:1, transform:'translateX(0)'}),

          style({offset:0.86, opacity:1, transform:'translateX(0)'}),

        ])) // duração, delay e aceleração
      ])
    ])

  ]
})
export class TelaLoginComponent implements OnInit {

  // Controle Animação
  public estadoPainel: string = 'criado'
  public cadastro:boolean = false




  constructor(
  ){ }

  ngOnInit(): void {
    
  }

  public exibirPainel(event:any):void{
    this.cadastro = event === 'cadastro' ? true : false
  }
  public inicioAnimacao():void{
    //console.log('Inicio da animação')
  }
  public fimAnimacao():void{
    //console.log('Fim da animação')
  }






}
