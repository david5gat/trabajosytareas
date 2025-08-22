import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDialog } from './tarea-dialog';

describe('TareaDialog', () => {
  let component: TareaDialog;
  let fixture: ComponentFixture<TareaDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
