import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsdetalheComponent } from './catsdetalhe.component';

describe('CatsdetalheComponent', () => {
  let component: CatsdetalheComponent;
  let fixture: ComponentFixture<CatsdetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatsdetalheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatsdetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
