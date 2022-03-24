import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeComComponent } from './large-com.component';

describe('LargeComComponent', () => {
  let component: LargeComComponent;
  let fixture: ComponentFixture<LargeComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
