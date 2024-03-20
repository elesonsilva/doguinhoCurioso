import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogdetalhesComponent } from './dogdetalhes.component';

describe('DogdetalhesComponent', () => {
  let component: DogdetalhesComponent;
  let fixture: ComponentFixture<DogdetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogdetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogdetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
