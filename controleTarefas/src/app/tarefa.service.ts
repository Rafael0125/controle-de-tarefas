import { Injectable } from "@angular/core";
import { Tarefa } from "./shared/tarefa.model";

const LS_CHAVE:string = 'tarefas'


@Injectable({
    providedIn:'root'
})
export class TarefaSevice{
    constructor(){ }

    listarTarefa():Tarefa[]{
        const tarefas = localStorage[LS_CHAVE]
        return tarefas ? JSON.parse(tarefas) : []
    }

    inserir(tarefa:Tarefa): void{
        const tarefas = this.listarTarefa()
        tarefa.id = new Date().getTime()
        tarefas.push(tarefa)
        localStorage[LS_CHAVE] = JSON.stringify(tarefas)
    }

    buscarPorId(id:number): Tarefa | undefined{
        const tarefas:Tarefa[] = this.listarTarefa()
        return tarefas.find( tarefa => tarefa.id === id)
    }

    atualizar(tarefa:Tarefa): void{
        const tarefas: Tarefa[] = this.listarTarefa()
        tarefas.forEach((obj,index,objs) => {
            if(tarefa.id === obj.id){
                objs[index] = tarefa
            }
        })
        localStorage[LS_CHAVE] = JSON.stringify(tarefas)
    }

    remover(id:number) : void{
        let tarefas : Tarefa[] = this.listarTarefa()
        tarefas = tarefas.filter(tarefa => tarefa.id !== id)
        localStorage[LS_CHAVE] = JSON.stringify(tarefas)
    }
}