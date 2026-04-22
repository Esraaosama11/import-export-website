import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportEgypt } from './export-egypt';

describe('ExportEgypt', () => {
  let component: ExportEgypt;
  let fixture: ComponentFixture<ExportEgypt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportEgypt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportEgypt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
