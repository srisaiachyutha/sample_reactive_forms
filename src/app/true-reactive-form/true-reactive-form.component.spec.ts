import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueReactiveFormComponent } from './true-reactive-form.component';

describe('TrueReactiveFormComponent', () => {
  let component: TrueReactiveFormComponent;
  let fixture: ComponentFixture<TrueReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
