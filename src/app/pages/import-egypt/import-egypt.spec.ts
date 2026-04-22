import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportEgypt } from './import-egypt';

describe('ImportEgypt', () => {
  let component: ImportEgypt;
  let fixture: ComponentFixture<ImportEgypt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportEgypt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportEgypt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
