import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaSevice } from '../tarefa.service';



@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.component.html',
  styleUrls: ['./lista-tarefa.component.css']
})
export class ListaTarefaComponent implements OnInit{

  public tarefas: Tarefa[] = [];


  constructor(private tarefaService: TarefaSevice){ }


  ngOnInit(): void {

    this.tarefas = this.listarTarefas()   
  }

  listarTarefas(): Tarefa[]{
    return this.tarefaService.listarTarefas()
  }

  remover($event:any,tarefa:Tarefa):void{
    $event.preventDefault();
    if(confirm(`Deseja realmente remover a tarefa: ${tarefa.titulo}?`)){
      this.tarefaService.remover(tarefa.id!);
      this.tarefas = this.listarTarefas();
    }
  }









}
