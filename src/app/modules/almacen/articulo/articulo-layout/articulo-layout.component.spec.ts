import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloLayoutComponent } from './articulo-layout.component';

describe('ArticuloLayoutComponent', () => {
  let component: ArticuloLayoutComponent;
  let fixture: ComponentFixture<ArticuloLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticuloLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
