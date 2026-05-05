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
  
  // 1. خدمات التصدير
  exportServices = [
    {
      title: 'توفير المنتجات',
      desc: 'توفير المنتجات المصرية عالية الجودة من موردين ومصانع موثوقة.',
      icon: 'fas fa-handshake'
    },
    {
      title: 'تجهيز المستندات',
      desc: 'إعداد الفواتير، قوائم التعبئة، وشهادات المنشأ والمعايير الدولية.',
      icon: 'fas fa-file-invoice'
    },
    {
      title: 'التعبئة والتغليف',
      desc: 'التعبئة والتغليف الاحترافي وفق المعايير الدولية لضمان سلامة المنتج.',
      icon: 'fas fa-box-open'
    },
    {
      title: 'الشحن الدولي',
      desc: 'حلول شحن دولي متكاملة (بحري – جوي) بأفضل الأسعار.',
      icon: 'fas fa-ship'
    },
    {
      title: 'التخليص الجمركي',
      desc: 'إنهاء كافة الإجراءات الجمركية لضمان خروج الشحنة بسرعة وسهولة.',
      icon: 'fas fa-clipboard-check'
    },
    {
      title: 'متابعة الشحنة',
      desc: 'متابعة دقيقة للشحنة من لحظة خروجها وحتى وصولها للعميل النهائي.',
      icon: 'fas fa-route'
    }
  ];

  // 2. خطوات التصدير
  exportSteps = [
    'تحديد المنتج والسوق المستهدف بعناية.',
    'توفير الموردين أو المصانع المناسبة لطلبك.',
    'تجهيز المستندات والأوراق القانونية المطلوبة.',
    'بدء عمليات التعبئة والتغليف وفق المواصفات.',
    'تنفيذ الشحن النهائي وإنهاء التخليص الجمركي.',
    'تسليم الشحنة للعميل في وجهتها النهائية.'
  ];

  // 3. كتالوج منتجات التصدير (الصور تقديرية، تقدري تغيريها)
  exportCatalog = [
    {
      name: 'مواد البناء',
      image: 'assets/images/تصدير.jpg',
      items: ['رخام وجرانيت', 'سيراميك وبورسلين', 'أسمنت وحديد']
    },
    {
      name: 'المنتجات الزراعية',
      image: 'assets/images/فواكه.jpg',
      items: ['خضروات وفاكهة', 'تمور مصري', 'بطاطس وبصل', 'أعشاب وتوابل']
    },
    {
      name: 'المنسوجات والملابس',
      image: 'assets/images/ملابس.jpg',
      items: ['ملابس قطنية', 'مفروشات', 'أقمشة فاخرة']
    },
    {
      name: 'الصناعات الكيماوية',
      image: 'assets/images/نظافة.jpg',
      items: ['منظفات', 'منتجات بلاستيكية', 'أسمدة زراعية']
    },
    {
      name: 'الأثاث والخشبيات',
      image: 'assets/images/خشب.jpg',
      items: ['أثاث منزلي', 'أثاث مكتبي', 'ديكور خشبية']
    }
  ];

}