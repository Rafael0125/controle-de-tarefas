import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { InserirTarefaComponent } from './inserir-tarefa/inserir-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { FinalizarTarefaComponent } from './finalizar-tarefa/finalizar-tarefa.component';

const routes: Routes = [
  {path:'',redirectTo:'tela-inicial', pathMatch:'full'},
  {path:'tela-inicial',component:TelaInicialComponent},
  {path:'inserir-tarefa',component:InserirTarefaComponent},
  {path:'editar-tarefa/:id', component:EditarTarefaComponent},
  {path: 'finalizar-tarefa/:id', component:FinalizarTarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
