import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { InserirTarefaComponent } from './inserir-tarefa/inserir-tarefa.component';
import { TarefaSevice } from './tarefa.service';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { FinalizarTarefaComponent } from './finalizar-tarefa/finalizar-tarefa.component';
import { ListaTarefaComponent } from './lista-tarefa/lista-tarefa.component';
import { DescricaoReduzida } from './shared/descricao-reduzida.pipe';
import { HistoricoTarefaComponent } from './historico-tarefa/historico-tarefa.component';
import { ModalTarefaComponent } from './historico-tarefa/modal-tarefa/modal-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TelaInicialComponent,
    InserirTarefaComponent,
    EditarTarefaComponent,
    FinalizarTarefaComponent,
    ListaTarefaComponent,
    DescricaoReduzida,
    HistoricoTarefaComponent,
    ModalTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TarefaSevice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
