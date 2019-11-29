import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalletitasPage } from './galletitas.page';

describe('GalletitasPage', () => {
  let component: GalletitasPage;
  let fixture: ComponentFixture<GalletitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalletitasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalletitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
