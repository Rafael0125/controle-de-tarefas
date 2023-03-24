import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaSevice } from '../tarefa.service';

@Component({
  selector: 'app-inserir-tarefa',
  templateUrl: './inserir-tarefa.component.html',
  styleUrls: ['./inserir-tarefa.component.css']
})
export class InserirTarefaComponent implements OnInit {
  @ViewChild('formTarefa') formTarefa! : NgForm
  tarefa!:Tarefa

  constructor(
    private tarefaService : TarefaSevice,
    private router : Router){ }

  ngOnInit(): void {
    this.tarefa = new Tarefa()
  }

  inserir():void{
    if(this.formTarefa.form.valid){
      this.tarefaService.inserir(this.tarefa);
      this.router.navigate(['/tela-inicial'])
    }
  }
  

}
