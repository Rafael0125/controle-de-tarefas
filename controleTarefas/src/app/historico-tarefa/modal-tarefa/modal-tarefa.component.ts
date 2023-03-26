import { Component,OnInit,Input } from '@angular/core';
import { Tarefa } from '../../shared/tarefa.model';
import { TarefaSevice } from '../../tarefa.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-tarefa',
  templateUrl: './modal-tarefa.component.html',
  styleUrls: ['./modal-tarefa.component.css']
})

export class ModalTarefaComponent implements OnInit {

  @Input() tarefa!:Tarefa

  constructor( 
    public activeModal: NgbActiveModal,
    private tarefaService: TarefaSevice,
    private router : Router
    )
    { }

  ngOnInit(): void {
  }


  remover($event:any,tarefa:Tarefa):void{
    $event.preventDefault();
    if(confirm(`Deseja realmente remover a tarefa: ${tarefa.titulo}, do Histórico de Tarefas?
    (Essa ação é irreversivel)`)){
      this.tarefaService.removerTarefasFinalizadas(tarefa.id!);
      this.activeModal.close()
      this.router.navigate(['/tela-inicial'])
    }
  }






}
