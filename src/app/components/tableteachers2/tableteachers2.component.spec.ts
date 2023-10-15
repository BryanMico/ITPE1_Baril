import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tableteachers2Component } from './tableteachers2.component';

describe('Tableteachers2Component', () => {
  let component: Tableteachers2Component;
  let fixture: ComponentFixture<Tableteachers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tableteachers2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tableteachers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
