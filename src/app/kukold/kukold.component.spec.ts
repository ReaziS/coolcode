import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KukoldComponent } from './kukold.component';

describe('KukoldComponent', () => {
  let component: KukoldComponent;
  let fixture: ComponentFixture<KukoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KukoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KukoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
