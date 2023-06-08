import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignateComponent } from './designate.component';

describe('DesignateComponent', () => {
  let component: DesignateComponent;
  let fixture: ComponentFixture<DesignateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
