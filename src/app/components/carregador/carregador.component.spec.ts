import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarregadorComponent } from './carregador.component';

describe('CarregadorComponent', () => {
  let component: CarregadorComponent;
  let fixture: ComponentFixture<CarregadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarregadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarregadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
