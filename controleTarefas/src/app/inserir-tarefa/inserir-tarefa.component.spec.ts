import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirTarefaComponent } from './inserir-tarefa.component';

describe('InserirTarefaComponent', () => {
  let component: InserirTarefaComponent;
  let fixture: ComponentFixture<InserirTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirTarefaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
