import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalletitaPage } from './galletita.page';

describe('GalletitaPage', () => {
  let component: GalletitaPage;
  let fixture: ComponentFixture<GalletitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalletitaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalletitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
