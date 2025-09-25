import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaCreditoComponent } from './pesquisa-credito.component';

describe('PesquisaCreditoComponent', () => {
  let component: PesquisaCreditoComponent;
  let fixture: ComponentFixture<PesquisaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisaCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
