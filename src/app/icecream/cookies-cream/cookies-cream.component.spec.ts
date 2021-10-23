import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesCreamComponent } from './cookies-cream.component';

describe('CookiesCreamComponent', () => {
  let component: CookiesCreamComponent;
  let fixture: ComponentFixture<CookiesCreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiesCreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesCreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
