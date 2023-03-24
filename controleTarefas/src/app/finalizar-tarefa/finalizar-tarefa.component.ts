import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaSevice } from '../tarefa.service';

@Component({
  selector: 'app-finalizar-tarefa',
  templateUrl: './finalizar-tarefa.component.html',
  styleUrls: ['./finalizar-tarefa.component.css']
})
export class FinalizarTarefaComponent {

  @ViewChild('formTarefa') formTarefa!:NgForm
  tarefa!:Tarefa

  constructor(
    private tarefaService:TarefaSevice,
    private route: ActivatedRoute,
    private router: Router
  ){ }


  ngOnInit(): void {

    let id = +this.route.snapshot.params['id']

    const resposta = this.tarefaService.buscarPorId(id);
    if(resposta !== undefined){
      this.tarefa = resposta
    } else{
      throw new Error('Tarefa não encontrada: id = ' + id)
    }
    
  }

  finalizar($event:any,tarefa:Tarefa):void{
    if(this.formTarefa.form.valid){
      this.tarefaService.finalizar(this.tarefa)
      this.tarefaService.remover(tarefa.id!);

      
      this.router.navigate(['/tela-inicial'])
    }
  }

}










