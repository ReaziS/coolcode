import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPartyComponent } from './current-party.component';

describe('CurrentPartyComponent', () => {
  let component: CurrentPartyComponent;
  let fixture: ComponentFixture<CurrentPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
