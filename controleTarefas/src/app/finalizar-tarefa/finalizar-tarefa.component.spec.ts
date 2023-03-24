import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarTarefaComponent } from './finalizar-tarefa.component';

describe('FinalizarTarefaComponent', () => {
  let component: FinalizarTarefaComponent;
  let fixture: ComponentFixture<FinalizarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarTarefaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
