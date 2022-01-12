import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifRobotComponent } from './modif-robot.component';

describe('ModifRobotComponent', () => {
  let component: ModifRobotComponent;
  let fixture: ComponentFixture<ModifRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifRobotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
