import { Injectable } from "@angular/core";
import { Tarefa } from "./shared/tarefa.model";

const LS_CHAVE:string = 'tarefas'
const LS_CONCLUIDAS:string = 'tarefaFinalizadas'


@Injectable({
    providedIn:'root'
})
export class TarefaSevice{
    constructor(){ }

    listarTarefas():Tarefa[]{
        const tarefas = localStorage[LS_CHAVE]
        return tarefas ? JSON.parse(tarefas) : []
    }

    inserir(tarefa:Tarefa): void{
        const tarefas = this.listarTarefas()
        tarefa.id = new Date().getTime()
        tarefas.push(tarefa)
        localStorage[LS_CHAVE] = JSON.stringify(tarefas)
    }

    buscarPorId(id:number): Tarefa | undefined{
        const tarefas:Tarefa[] = this.listarTarefas()
        return tarefas.find( tarefa => tarefa.id === id)
    }

    atualizar(tarefa:Tarefa): void{
        const tarefas: Tarefa[] = this.listarTarefas()
        tarefas.forEach((obj,index,objs) => {
            if(tarefa.id === obj.id){
                objs[index] = tarefa
            }
        })
        localStorage[LS_CHAVE] = JSON.stringify(tarefas)
    }

    remover(id:number) : void{
        let tarefas : Tarefa[] = this.listarTarefas()
        tarefas = tarefas.filter(tarefa => tarefa.id !== id)
        localStorage[LS_CHAVE] = JSON.stringify(tarefas)
    }

    listarTarefasFinalizadas():Tarefa[]{
        const tarefasFinalizadas = localStorage[LS_CONCLUIDAS]
        return tarefasFinalizadas ? JSON.parse(tarefasFinalizadas):[];
    }

    finalizar(tarefaFinalizada:Tarefa):void{
        const tarefasFinalizadas = this.listarTarefasFinalizadas()
        tarefasFinalizadas.push(tarefaFinalizada)
        localStorage[LS_CONCLUIDAS] = JSON.stringify(tarefasFinalizadas)
    }





}