import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAssumptionComponent } from './sendassumption.component';

describe('SendassumptionComponent', () => {
  let component: SendAssumptionComponent;
  let fixture: ComponentFixture<SendAssumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SendAssumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAssumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
