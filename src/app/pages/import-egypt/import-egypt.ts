import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-import-egypt',
  imports: [CommonModule, TranslateModule],
  templateUrl: './import-egypt.html',
  styleUrl: './import-egypt.css',
})
export class ImportEgypt implements AfterViewInit {

  // 1. خدمات الاستيراد
  importServices = [
    { title: 'البحث عن الموردين', icon: 'fas fa-search-location', desc: 'نبحث لك عن أفضل المصانع في الصين، تركيا، وغيرها.' },
    { title: 'التفاوض السعري', icon: 'fas fa-handshake', desc: 'نتفاوض مباشرة للحصول على أفضل سعر ممكن.' },
    { title: 'فحص الجودة', icon: 'fas fa-check-double', desc: 'فحص دقيق للمنتجات قبل الشحن لضمان المطابقة.' },
    { title: 'الشحن الدولي', icon: 'fas fa-ship', desc: 'حلول شحن بحري وجوي متكاملة.' },
    { title: 'التخليص الجمركي', icon: 'fas fa-file-contract', desc: 'تخليص احترافي وسريع داخل مصر.' },
    { title: 'التوصيل النهائي', icon: 'fas fa-truck-loading', desc: 'توصيل البضاعة حتى باب مخزنك.' }
  ];

  // 2. خطوات العمل
  workSteps = [
    'تبعتلنا المنتج أو الفكرة',
    'بنوفر لك عروض أسعار من موردين موثوقين',
    'تختار العرض المناسب',
    'بنفحص الجودة قبل الشحن',
    'نشحن ونخلص جمرك',
    'تستلم بضاعتك جاهزة'
  ];

  // 3. كتالوج المنتجات الكامل
  productCatalog = [
    {
      name: 'قطاع السيارات', icon: '🚗', image: 'assets/images/كككك.jpg',
      items: ['إكسسوارات سيارات (إضاءة LED – تجهيزات داخلية)', 'شاشات أندرويد للسيارات', 'روف راك وبوكس سقف', 'معطرات سيارات', 'أجهزة تشغيل وبطاريات طوارئ']
    },
    {
      name: 'الطاقة الشمسية', icon: '☀️', image: 'assets/images/طططط.jpg',
      items: ['كشافات إنارة تعمل بالطاقة الشمسية', 'أنظمة طاقة شمسية للمنازل', 'وحدات إنارة للشوارع', 'مولدات وباور بانك شمسية', 'إضاءة حدائق تعمل بالطاقة الشمسية']
    },
    {
      name: 'الأدوات المنزلية', icon: '🏠', image: 'assets/images/ببببب.jpg',
      items: ['أدوات مطبخ حديثة', 'منتجات تنظيم وتخزين', 'أدوات تنظيف', 'إكسسوارات حمامات', 'ديكورات منزلية']
    },
    {
      name: 'الإضاءة والكهرباء', icon: '💡', image: 'assets/images/نور.jpg',
      items: ['لمبات LED موفرة للطاقة', 'أنظمة إضاءة داخلية وخارجية', 'لمبات ذكية (Smart Lighting)', 'كشافات بحساس حركة', 'وحدات إنارة صناعية']
    },
      {
      name: 'الملابس والمنتجات الاستهلاكية', icon: '👕', image: 'assets/images/cloth.png',
      items: ['ملابس كاجوال ورياضية', 'شنط وأحذية', 'منتجات أطفال']
    },
    {
      name: 'الإلكترونيات الخفيفة', icon: '📱', image: 'assets/images/فون.jpg',
      items: ['سماعات بلوتوث', 'إكسسوارات الموبايل', 'باور بانك', 'ساعات ذكية', 'إكسسوارات الألعاب']
    },
    {
      name: 'المعدات والأدوات', icon: '🧰', image: 'assets/images/تتتت.jpg',
      items: ['عدة يدوية وكهربائية', 'أدوات ورش وصيانة', 'معدات صغيرة للبناء', 'أدوات السلامة المهنية']
    },
  
    {
      name: 'منتجات الحيوانات الأليفة', icon: '🐶', image: 'assets/images/كلابس.png',
      items: ['إكسسوارات الحيوانات الأليفة', 'أدوات العناية والتنظيف', 'أجهزة التغذية', 'ألعاب الحيوانات']
    }
  ];

  
  // 5. الأسئلة الشائعة
  faqs = [
    { q: 'أقل كمية كام؟', a: 'تختلف حسب نوع المنتج، نوفر حلولاً تبدأ من كميات بسيطة حتى الحاويات الكاملة.', open: false },
    { q: 'التكلفة بتتحسب إزاي؟', a: 'تشمل تكلفة المنتج، الشحن، الجمارك، وعمولة الإدارة.', open: false },
    { q: 'مدة الشحن قد إيه؟', a: 'تعتمد على وسيلة الشحن (بحري أو جوي) وبلد المنشأ، وتتراوح عادة بين 10 إلى 45 يومًا.', open: false },
    { q: 'هل بتتعاملوا مع أفراد؟', a: 'نعم، نوفر خدماتنا للشركات والأفراد الراغبين في بدء مشاريعهم الخاصة.', open: false }
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