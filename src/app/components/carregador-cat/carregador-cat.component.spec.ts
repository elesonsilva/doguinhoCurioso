import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarregadorCatComponent } from './carregador-cat.component';

describe('CarregadorCatComponent', () => {
  let component: CarregadorCatComponent;
  let fixture: ComponentFixture<CarregadorCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarregadorCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarregadorCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
