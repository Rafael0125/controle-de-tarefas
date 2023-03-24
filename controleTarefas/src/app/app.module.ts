import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { InserirTarefaComponent } from './tela-inicial/inserir-tarefa/inserir-tarefa.component';
import { TarefaSevice } from './tarefa.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TelaInicialComponent,
    InserirTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TarefaSevice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
