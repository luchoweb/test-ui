import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousRulingComponent } from './previous-ruling.component';

describe('PreviousRulingComponent', () => {
  let component: PreviousRulingComponent;
  let fixture: ComponentFixture<PreviousRulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousRulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousRulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
