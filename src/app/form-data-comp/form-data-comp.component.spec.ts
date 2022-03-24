import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataCompComponent } from './form-data-comp.component';

describe('FormDataCompComponent', () => {
  let component: FormDataCompComponent;
  let fixture: ComponentFixture<FormDataCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDataCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
