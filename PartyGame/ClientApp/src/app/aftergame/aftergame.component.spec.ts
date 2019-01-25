import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AftergameComponent } from './aftergame.component';

describe('AftergameComponent', () => {
  let component: AftergameComponent;
  let fixture: ComponentFixture<AftergameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AftergameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AftergameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
