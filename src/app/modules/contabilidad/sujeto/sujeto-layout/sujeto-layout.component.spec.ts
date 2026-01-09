import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetoLayoutComponent } from './sujeto-layout.component';

describe('SujetoLayoutComponent', () => {
  let component: SujetoLayoutComponent;
  let fixture: ComponentFixture<SujetoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SujetoLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SujetoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
