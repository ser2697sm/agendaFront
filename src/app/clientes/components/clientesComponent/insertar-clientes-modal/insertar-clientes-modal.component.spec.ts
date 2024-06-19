import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarClientesModalComponent } from './insertar-clientes-modal.component';

describe('InsertarClientesModalComponent', () => {
  let component: InsertarClientesModalComponent;
  let fixture: ComponentFixture<InsertarClientesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertarClientesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertarClientesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
