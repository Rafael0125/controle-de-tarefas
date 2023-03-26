import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaSevice } from '../tarefa.service';

@Component({
  selector: 'app-historico-tarefa',
  templateUrl: './historico-tarefa.component.html',
  styleUrls: ['./historico-tarefa.component.css']
})
export class HistoricoTarefaComponent implements OnInit {

  public tarefasFinalizadas: Tarefa[] = []


  constructor(private tarefaService: TarefaSevice){ }

  ngOnInit(): void {
    this.tarefasFinalizadas = this.listarTarefasFinalizadas()
  }

  listarTarefasFinalizadas():Tarefa[]{
    return this.tarefaService.listarTarefasFinalizadas()
  }

}
