import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKukoldComponent } from './add-kukold.component';

describe('AddKukoldComponent', () => {
  let component: AddKukoldComponent;
  let fixture: ComponentFixture<AddKukoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKukoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKukoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
