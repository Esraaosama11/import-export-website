import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-import-egypt',
  imports: [CommonModule, TranslateModule],
  templateUrl: './import-egypt.html',
  styleUrl: './import-egypt.css',
})
export class ImportEgypt implements AfterViewInit {
  importServices = [
    { title: 'IMPORT_PAGE.SERVICES.S1_TITLE', icon: 'fas fa-search-location', desc: 'IMPORT_PAGE.SERVICES.S1_DESC' },
    { title: 'IMPORT_PAGE.SERVICES.S2_TITLE', icon: 'fas fa-handshake',       desc: 'IMPORT_PAGE.SERVICES.S2_DESC' },
    { title: 'IMPORT_PAGE.SERVICES.S3_TITLE', icon: 'fas fa-check-double',    desc: 'IMPORT_PAGE.SERVICES.S3_DESC' },
    { title: 'IMPORT_PAGE.SERVICES.S4_TITLE', icon: 'fas fa-ship',            desc: 'IMPORT_PAGE.SERVICES.S4_DESC' },
    { title: 'IMPORT_PAGE.SERVICES.S5_TITLE', icon: 'fas fa-file-contract',   desc: 'IMPORT_PAGE.SERVICES.S5_DESC' },
    { title: 'IMPORT_PAGE.SERVICES.S6_TITLE', icon: 'fas fa-truck-loading',   desc: 'IMPORT_PAGE.SERVICES.S6_DESC' },
  ];
  workSteps = [
    'IMPORT_PAGE.STEPS.STEP1',
    'IMPORT_PAGE.STEPS.STEP2',
    'IMPORT_PAGE.STEPS.STEP3',
    'IMPORT_PAGE.STEPS.STEP4',
    'IMPORT_PAGE.STEPS.STEP5',
    'IMPORT_PAGE.STEPS.STEP6',
  ];

  productCatalog = [
    {
      name: 'IMPORT_PAGE.CATALOG.CAT1_NAME', icon: '🚗', image: 'assets/images/كككك.jpg',
      items: [
        'IMPORT_PAGE.CATALOG.CAT1_ITEM1',
        'IMPORT_PAGE.CATALOG.CAT1_ITEM2',
        'IMPORT_PAGE.CATALOG.CAT1_ITEM3',
        'IMPORT_PAGE.CATALOG.CAT1_ITEM4',
        'IMPORT_PAGE.CATALOG.CAT1_ITEM5',
      ]
    },
    {
      name: 'IMPORT_PAGE.CATALOG.CAT2_NAME', icon: '☀️', image: 'assets/images/طططط.jpg',
      items: [
        'IMPORT_PAGE.CATALOG.CAT2_ITEM1',
        'IMPORT_PAGE.CATALOG.CAT2_ITEM2',
        'IMPORT_PAGE.CATALOG.CAT2_ITEM3',
        'IMPORT_PAGE.CATALOG.CAT2_ITEM4',
        'IMPORT_PAGE.CATALOG.CAT2_ITEM5',
      ]
    },
    {
      name: 'IMPORT_PAGE.CATALOG.CAT3_NAME', icon: '🏠', image: 'assets/images/ببببب.jpg',
      items: [
        'IMPORT_PAGE.CATALOG.CAT3_ITEM1',
        'IMPORT_PAGE.CATALOG.CAT3_ITEM2',
        'IMPORT_PAGE.CATALOG.CAT3_ITEM3',
        'IMPORT_PAGE.CATALOG.CAT3_ITEM4',
        'IMPORT_PAGE.CATALOG.CAT3_ITEM5',
      ]
    },
    {
      name: 'IMPORT_PAGE.CATALOG.CAT4_NAME', icon: '💡', image: 'assets/images/نور.jpg',
      items: [
        'IMPORT_PAGE.CATALOG.CAT4_ITEM1',
        'IMPORT_PAGE.CATALOG.CAT4_ITEM2',
        'IMPORT_PAGE.CATALOG.CAT4_ITEM3',
        'IMPORT_PAGE.CATALOG.CAT4_ITEM4',
        'IMPORT_PAGE.CATALOG.CAT4_ITEM5',
      ]
    },
    {
      name: 'IMPORT_PAGE.CATALOG.CAT5_NAME', icon: '👕', image: 'assets/images/cloth.png',
      items: [
        'IMPORT_PAGE.CATALOG.CAT5_ITEM1',
        'IMPORT_PAGE.CATALOG.CAT5_ITEM2',
        'IMPORT_PAGE.CATALOG.CAT5_ITEM3',
      ]
    },
    {
      name: 'IMPORT_PAGE.CATALOG.CAT6_NAME', icon: '📱', image: 'assets/images/فون.jpg',
      items: [
        'IMPORT_PAGE.CATALOG.CAT6_ITEM1',
        'IMPORT_PAGE.CATALOG.CAT6_ITEM2',
        'IMPORT_PAGE.CATALOG.CAT6_ITEM3',
        'IMPORT_PAGE.CATALOG.CAT6_ITEM4',
        'IMPORT_PAGE.CATALOG.CAT6_ITEM5',
      ]
    },
    {
      name: 'IMPORT_PAGE.CATALOG.CAT7_NAME', icon: '🧰', image: 'assets/images/تتتت.jpg',
      items: [
        'IMPORT_PAGE.CATALOG.CAT7_ITEM1',
        'IMPORT_PAGE.CATALOG.CAT7_ITEM2',
        'IMPORT_PAGE.CATALOG.CAT7_ITEM3',
        'IMPORT_PAGE.CATALOG.CAT7_ITEM4',
      ]
    },
    {
      name: 'IMPORT_PAGE.CATALOG.CAT8_NAME', icon: '🐶', image: 'assets/images/كلابس.png',
      items: [
        'IMPORT_PAGE.CATALOG.CAT8_ITEM1',
        'IMPORT_PAGE.CATALOG.CAT8_ITEM2',
        'IMPORT_PAGE.CATALOG.CAT8_ITEM3',
        'IMPORT_PAGE.CATALOG.CAT8_ITEM4',
      ]
    },
  ];

  faqs = [
    { q: 'IMPORT_PAGE.FAQS.Q1', a: 'IMPORT_PAGE.FAQS.A1', open: false },
    { q: 'IMPORT_PAGE.FAQS.Q2', a: 'IMPORT_PAGE.FAQS.A2', open: false },
    { q: 'IMPORT_PAGE.FAQS.Q3', a: 'IMPORT_PAGE.FAQS.A3', open: false },
    { q: 'IMPORT_PAGE.FAQS.Q4', a: 'IMPORT_PAGE.FAQS.A4', open: false },
  ];

  toggleFaq(index: number): void {
    this.faqs = this.faqs.map((f, i) => ({
      ...f,
      open: i === index ? !f.open : false
    }));
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}