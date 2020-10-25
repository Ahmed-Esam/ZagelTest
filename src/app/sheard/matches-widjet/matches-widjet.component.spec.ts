import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesWidjetComponent } from './matches-widjet.component';

describe('MatchesWidjetComponent', () => {
  let component: MatchesWidjetComponent;
  let fixture: ComponentFixture<MatchesWidjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesWidjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesWidjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
