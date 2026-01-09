import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetoListComponent } from './sujeto-list.component';

describe('SujetoListComponent', () => {
  let component: SujetoListComponent;
  let fixture: ComponentFixture<SujetoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SujetoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SujetoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
