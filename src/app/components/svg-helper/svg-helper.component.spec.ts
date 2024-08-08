import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgHelperComponent } from './svg-helper.component';

describe('SvgHelperComponent', () => {
  let component: SvgHelperComponent;
  let fixture: ComponentFixture<SvgHelperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvgHelperComponent]
    });
    fixture = TestBed.createComponent(SvgHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
