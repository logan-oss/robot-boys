import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRobotComponent } from './list-robot.component';

describe('ListRobotComponent', () => {
  let component: ListRobotComponent;
  let fixture: ComponentFixture<ListRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRobotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
