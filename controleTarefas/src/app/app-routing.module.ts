import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { InserirTarefaComponent } from './inserir-tarefa/inserir-tarefa.component';

const routes: Routes = [
  {path:'',redirectTo:'tela-inicial', pathMatch:'full'},
  {path:'tela-inicial',component:TelaInicialComponent},
  {path:'inserir-tarefa',component:InserirTarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
