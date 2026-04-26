import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  category: string;
  sub: string;
  name: string;
  img: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  activeTab: string = 'agri';

  allProducts: Product[] = [
    { category: 'agri', sub: 'فواكه طازجة ', name: 'الفراولة', img: 'assets/images/s.jpg' },
    { category: 'agri', sub: 'فواكه طازجة ', name: 'البرتقال واليوسفي', img: 'assets/images/o.jpg' },
    { category: 'agri', sub: 'فواكه طازجة ', name: 'الجوافة', img: 'assets/images/g.jpeg' },
    { category: 'agri', sub: 'فواكه طازجة ', name: 'الرمان', img: 'assets/images/ر.jpg' },
    { category: 'agri', sub: 'فواكه طازجة ', name: 'المانجو', img: 'assets/images/m.jpg' },
    { category: 'agri', sub: 'فواكه طازجة', name: ' التين و العنب ', img: 'assets/images/ت.jpg' },
    { category: 'agri', sub: 'فواكه طازجة ', name: 'البطيخ', img: 'assets/images/ل (2).jpg' },
    { category: 'agri', sub: 'فواكه مجففة', name: 'التمر المصري الممتاز', img: 'assets/images/𝘿𝙖𝙩𝙚𝙨.jpg' },
    { category: 'agri', sub: 'خضروات طازجة', name: ' البطاطا', img: 'assets/images/ط.jpg' },
    { category: 'agri', sub: 'خضروات طازجة', name: 'البصل ', img: 'assets/images/ب.png' },
    { category: 'agri', sub: 'خضروات طازجة', name: 'البطاطس', img: 'assets/images/ك.jpg' },
    { category: 'agri', sub: 'خضروات طازجة', name: 'الليمون', img: 'assets/images/ح.jpeg' },
    { category: 'agri', sub: 'خضروات طازجة', name: 'الطماطم ', img: 'assets/images/د.jpg' },
    { category: 'agri', sub: 'خضروات طازجة', name: ' الفاصوليا ', img: 'assets/images/ف.jpeg' },
    { category: 'agri', sub: 'أعشاب', name: 'الكركديه', img: 'assets/images/K.jpg' },
    { category: 'agri', sub: 'أعشاب', name: 'الينسون', img: 'assets/images/ي.png' },
    { category: 'agri', sub: 'أعشاب', name: 'الشمر', img: 'assets/images/ش.png' },
    { category: 'agri', sub: 'أعشاب', name: 'الجنزبيل', img: 'assets/images/ج.jpg' },
    { category: 'agri', sub: 'أعشاب', name: 'النعناع', img: 'assets/images/ع.jpg' },
    { category: 'agri', sub: 'بهارات', name: 'السمسم', img: 'assets/images/س.png' },
    { category: 'agri', sub: 'زيوت', name: 'الزيتون وزيت الزيتون', img: 'assets/images/ز.jpg' },

    // --- الأجهزة الكهربائية ---
    { category: 'elec', sub: 'تبريد', name: 'المراوح والتكييفات', img: 'assets/images/K.jpg' },
    { category: 'elec', sub: 'أجهزة كبيرة', name: 'الغسالات والشاشات', img: 'assets/images/K.jpg' },
    { category: 'elec', sub: 'مطبخ', name: 'الخلاطات والبوتجازات', img: 'assets/images/K.jpg' },
    { category: 'elec', sub: 'أجهزة صغيرة', name: 'المكاوي والمكانس والسخانات', img: 'assets/images/K.jpg' },

    // --- مواد البناء ---
    { category: 'build', sub: 'رخام', name: 'الجرانيت والرخام والجبس', img: 'assets/images/K.jpg' },
    { category: 'build', sub: 'تشطيب', name: 'السيراميك والبورسلين والزجاج', img: 'assets/images/K.jpg' },
    { category: 'build', sub: 'معادن', name: 'الحديد والألومنيوم والأسلاك', img: 'assets/images/K.jpg' },
    { category: 'build', sub: 'أخرى', name: 'الفحم والملح بأنواعه', img: 'assets/images/K.jpg' },

    // --- منسوجات وجلود ---
    { category: 'textile', sub: 'ملابس', name: 'الملابس الجاهزة والبطاطين', img: 'assets/images/K.jpg' },
    { category: 'textile', sub: 'جلود', name: 'الأحذية والحقائب والمحفظ', img: 'assets/images/K.jpg' },
    { category: 'textile', sub: 'مفروشات', name: 'الستائر والسجاد والموكيت', img: 'assets/images/K.jpg' },
    { category: 'textile', sub: 'طبي', name: 'القطن الطبي والشاش', img: 'assets/images/K.jpg' },

    // --- صناعات متنوعة ---
    { category: 'mix', sub: 'كيماويات', name: 'البتروكيماويات والزيوت', img: 'assets/images/K.jpg' },
    { category: 'mix', sub: 'نظافة', name: 'المنظفات وأدوات النظافة', img: 'assets/images/K.jpg' },
    { category: 'mix', sub: 'مطبخ', name: 'أواني الطهي ومستلزمات المطبخ', img: 'assets/images/K.jpg' },
    { category: 'mix', sub: 'بلاستيك', name: 'المنتجات البلاستيكية والكرتون', img: 'assets/images/K.jpg' },
    { category: 'mix', sub: 'أثاث', name: 'الموبيليات والمنتجات اليدوية', img: 'assets/images/K.jpg' }
  ];

  get filteredProducts() {
    return this.allProducts.filter(p => p.category === this.activeTab);
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}