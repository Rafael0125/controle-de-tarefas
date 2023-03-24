import { Component,OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaSevice } from '../tarefa.service';


@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  public tarefas: Tarefa[] = [];

  constructor( private tarefaService: TarefaSevice){ }

  ngOnInit(): void {
    this.tarefas = this.listarTarefas()
  }

  listarTarefas(): Tarefa[]{
    //return this.tarefaService.listarTarefas()
    return [ 
      new Tarefa(1,'Tarefa hardcode 1 ','25/04/2023','Meu aniversario'),
      new Tarefa(2,'Tarefa hardcode 2 ','25/01/2023','Aniversario do meu pai'),
      new Tarefa(3,'Tarefa hardcode 3 ','25/11/2023','Aniversario da Dani'),
      new Tarefa(4,'Tarefa hardcode 4 ','29/07/2023','Aniversario da minha mãe e da Paula'),
    ]
  }

}
