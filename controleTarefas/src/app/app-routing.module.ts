import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { InserirTarefaComponent } from './inserir-tarefa/inserir-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { FinalizarTarefaComponent } from './finalizar-tarefa/finalizar-tarefa.component';
import { ListaTarefaComponent } from './lista-tarefa/lista-tarefa.component';
import { HistoricoTarefaComponent } from './historico-tarefa/historico-tarefa.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  {path: '',redirectTo:'tela-inicial', pathMatch:'full'},
  {path: 'tela-inicial',component:TelaInicialComponent},
  {path: 'inserir-tarefa',component:InserirTarefaComponent},
  {path: 'editar-tarefa/:id', component:EditarTarefaComponent},
  {path: 'finalizar-tarefa/:id', component:FinalizarTarefaComponent},
  {path: 'lista-tarefas',component:ListaTarefaComponent},
  {path: 'historico-tarefas',component:HistoricoTarefaComponent},
  {path: 'login', component:TelaLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
