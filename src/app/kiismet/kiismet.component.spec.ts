import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiismetComponent } from './kiismet.component';

describe('KiismetComponent', () => {
  let component: KiismetComponent;
  let fixture: ComponentFixture<KiismetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiismetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiismetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
