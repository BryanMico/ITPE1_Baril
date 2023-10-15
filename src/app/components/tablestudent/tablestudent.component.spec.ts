import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablestudentComponent } from './tablestudent.component';

describe('TablestudentComponent', () => {
  let component: TablestudentComponent;
  let fixture: ComponentFixture<TablestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablestudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
