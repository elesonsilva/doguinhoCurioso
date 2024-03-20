import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTipoComponent } from './select-tipo.component';

describe('SelectTipoComponent', () => {
  let component: SelectTipoComponent;
  let fixture: ComponentFixture<SelectTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectTipoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
