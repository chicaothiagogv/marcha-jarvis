import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoCartesianoComponent } from './plano-cartesiano.component';

describe('PlanoCartesianoComponent', () => {
  let component: PlanoCartesianoComponent;
  let fixture: ComponentFixture<PlanoCartesianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoCartesianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoCartesianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
