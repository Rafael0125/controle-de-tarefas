import { Component, inject, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaSevice } from '../tarefa.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTarefaComponent } from './modal-tarefa/modal-tarefa.component';

@Component({
  selector: 'app-historico-tarefa',
  templateUrl: './historico-tarefa.component.html',
  styleUrls: ['./historico-tarefa.component.css']
})
export class HistoricoTarefaComponent implements OnInit {

  public tarefasFinalizadas: Tarefa[] = []


  constructor(
    private tarefaService: TarefaSevice,
    public modalService: NgbModal
    )
  { }

  ngOnInit(): void {
    this.tarefasFinalizadas = this.listarTarefasFinalizadas()
  }

  listarTarefasFinalizadas():Tarefa[]{
    return this.tarefaService.listarTarefasFinalizadas()
  }

  abrirModalTarefa(tarefa:Tarefa){
    const modalRef = this.modalService.open(ModalTarefaComponent)
    modalRef.componentInstance.tarefa = tarefa
  }



}
