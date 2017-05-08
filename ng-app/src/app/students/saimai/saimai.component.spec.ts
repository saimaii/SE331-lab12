import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaimaiComponent } from './saimai.component';

describe('SaimaiComponent', () => {
  let component: SaimaiComponent;
  let fixture: ComponentFixture<SaimaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaimaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaimaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
