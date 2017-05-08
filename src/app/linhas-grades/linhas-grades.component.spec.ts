import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhasGradesComponent } from './linhas-grades.component';

describe('LinhasGradesComponent', () => {
  let component: LinhasGradesComponent;
  let fixture: ComponentFixture<LinhasGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhasGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhasGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
