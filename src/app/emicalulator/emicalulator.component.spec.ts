import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmicalulatorComponent } from './emicalulator.component';

describe('EmicalulatorComponent', () => {
  let component: EmicalulatorComponent;
  let fixture: ComponentFixture<EmicalulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmicalulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmicalulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
