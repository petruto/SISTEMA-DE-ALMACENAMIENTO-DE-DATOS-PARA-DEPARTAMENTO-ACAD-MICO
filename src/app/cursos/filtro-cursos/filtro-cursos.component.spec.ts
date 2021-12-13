import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCursosComponent } from './filtro-cursos.component';

describe('FiltroCursosComponent', () => {
  let component: FiltroCursosComponent;
  let fixture: ComponentFixture<FiltroCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
