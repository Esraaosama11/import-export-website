import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-export-egypt',
  imports: [CommonModule, TranslateModule],
  templateUrl: './export-egypt.html',
  styleUrl: './export-egypt.css',
})
export class ExportEgypt {
  exportServices = [
    { title: 'EXPORT_PAGE.SERVICES.S1_TITLE', desc: 'EXPORT_PAGE.SERVICES.S1_DESC', icon: 'fas fa-handshake' },
    { title: 'EXPORT_PAGE.SERVICES.S2_TITLE', desc: 'EXPORT_PAGE.SERVICES.S2_DESC', icon: 'fas fa-file-invoice' },
    { title: 'EXPORT_PAGE.SERVICES.S3_TITLE', desc: 'EXPORT_PAGE.SERVICES.S3_DESC', icon: 'fas fa-box-open' },
    { title: 'EXPORT_PAGE.SERVICES.S4_TITLE', desc: 'EXPORT_PAGE.SERVICES.S4_DESC', icon: 'fas fa-ship' },
    { title: 'EXPORT_PAGE.SERVICES.S5_TITLE', desc: 'EXPORT_PAGE.SERVICES.S5_DESC', icon: 'fas fa-clipboard-check' },
    { title: 'EXPORT_PAGE.SERVICES.S6_TITLE', desc: 'EXPORT_PAGE.SERVICES.S6_DESC', icon: 'fas fa-route' },
  ];
  exportSteps = [
    'EXPORT_PAGE.STEPS.STEP1',
    'EXPORT_PAGE.STEPS.STEP2',
    'EXPORT_PAGE.STEPS.STEP3',
    'EXPORT_PAGE.STEPS.STEP4',
    'EXPORT_PAGE.STEPS.STEP5',
    'EXPORT_PAGE.STEPS.STEP6',
  ];
  exportCatalog = [
    {
      name: 'EXPORT_PAGE.CATALOG.CAT1_NAME',
      image: 'assets/images/تصدير.jpg',
      items: [
        'EXPORT_PAGE.CATALOG.CAT1_ITEM1',
        'EXPORT_PAGE.CATALOG.CAT1_ITEM2',
        'EXPORT_PAGE.CATALOG.CAT1_ITEM3',
      ]
    },
    {
      name: 'EXPORT_PAGE.CATALOG.CAT2_NAME',
      image: 'assets/images/فواكه.jpg',
      items: [
        'EXPORT_PAGE.CATALOG.CAT2_ITEM1',
        'EXPORT_PAGE.CATALOG.CAT2_ITEM2',
        'EXPORT_PAGE.CATALOG.CAT2_ITEM3',
        'EXPORT_PAGE.CATALOG.CAT2_ITEM4',
      ]
    },
    {
      name: 'EXPORT_PAGE.CATALOG.CAT3_NAME',
      image: 'assets/images/ملابس.jpg',
      items: [
        'EXPORT_PAGE.CATALOG.CAT3_ITEM1',
        'EXPORT_PAGE.CATALOG.CAT3_ITEM2',
        'EXPORT_PAGE.CATALOG.CAT3_ITEM3',
      ]
    },
    {
      name: 'EXPORT_PAGE.CATALOG.CAT4_NAME',
      image: 'assets/images/نظافة.jpg',
      items: [
        'EXPORT_PAGE.CATALOG.CAT4_ITEM1',
        'EXPORT_PAGE.CATALOG.CAT4_ITEM2',
        'EXPORT_PAGE.CATALOG.CAT4_ITEM3',
      ]
    },
    {
      name: 'EXPORT_PAGE.CATALOG.CAT5_NAME',
      image: 'assets/images/خشب.jpg',
      items: [
        'EXPORT_PAGE.CATALOG.CAT5_ITEM1',
        'EXPORT_PAGE.CATALOG.CAT5_ITEM2',
        'EXPORT_PAGE.CATALOG.CAT5_ITEM3',
      ]
    },
  ];
}