import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaNfseComponent } from './pesquisa-nfse.component';

describe('PesquisaNfseComponent', () => {
  let component: PesquisaNfseComponent;
  let fixture: ComponentFixture<PesquisaNfseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisaNfseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaNfseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
