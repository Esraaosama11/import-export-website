import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Product {
  category: string;
  sub: string;
  name: string;
  img: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , TranslateModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  activeTab: string = 'agri';
allProducts: Product[] = [
  // --- Agriculture ---
  { category: 'agri', sub: 'PRODUCTS.SUB.FRESH_FRUITS', name: 'PRODUCTS.ITEM.STRAWBERRY', img: 'assets/images/s.jpg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.FRESH_FRUITS', name: 'PRODUCTS.ITEM.ORANGE', img: 'assets/images/o.jpg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.FRESH_FRUITS', name: 'PRODUCTS.ITEM.GUAVA', img: 'assets/images/g.jpeg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.FRESH_FRUITS', name: 'PRODUCTS.ITEM.POMEGRANATE', img: 'assets/images/ر.jpg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.FRESH_FRUITS', name: 'PRODUCTS.ITEM.MANGO', img: 'assets/images/m.jpg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.FRESH_FRUITS', name: 'PRODUCTS.ITEM.FIG_GRAPES', img: 'assets/images/ت.jpg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.FRESH_FRUITS', name: 'PRODUCTS.ITEM.WATERMELON', img: 'assets/images/ل (2).jpg' },

  { category: 'agri', sub: 'PRODUCTS.SUB.DRIED', name: 'PRODUCTS.ITEM.DATES', img: 'assets/images/𝘿𝙖𝙩𝙚𝙨.jpg' },

  { category: 'agri', sub: 'PRODUCTS.SUB.VEGETABLES', name: 'PRODUCTS.ITEM.SWEET_POTATO', img: 'assets/images/ط.jpg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.VEGETABLES', name: 'PRODUCTS.ITEM.ONION', img: 'assets/images/ب.png' },
  { category: 'agri', sub: 'PRODUCTS.SUB.VEGETABLES', name: 'PRODUCTS.ITEM.POTATO', img: 'assets/images/ك.jpg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.VEGETABLES', name: 'PRODUCTS.ITEM.LEMON', img: 'assets/images/ح.jpeg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.VEGETABLES', name: 'PRODUCTS.ITEM.TOMATO', img: 'assets/images/د.jpg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.VEGETABLES', name: 'PRODUCTS.ITEM.BEANS', img: 'assets/images/ف.jpeg' },

  { category: 'agri', sub: 'PRODUCTS.SUB.HERBS', name: 'PRODUCTS.ITEM.HIBISCUS', img: 'assets/images/K.jpg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.HERBS', name: 'PRODUCTS.ITEM.ANISE', img: 'assets/images/ي.png' },
  { category: 'agri', sub: 'PRODUCTS.SUB.HERBS', name: 'PRODUCTS.ITEM.FENNEL', img: 'assets/images/ش.png' },
  { category: 'agri', sub: 'PRODUCTS.SUB.HERBS', name: 'PRODUCTS.ITEM.GINGER', img: 'assets/images/ج.jpg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.HERBS', name: 'PRODUCTS.ITEM.MINT', img: 'assets/images/ع.jpg' },

  { category: 'agri', sub: 'PRODUCTS.SUB.SPICES', name: 'PRODUCTS.ITEM.SESAME', img: 'assets/images/س.png' },
  { category: 'agri', sub: 'PRODUCTS.SUB.OILS', name: 'PRODUCTS.ITEM.OLIVE', img: 'assets/images/ز.jpg' },
  { category: 'agri', sub: 'PRODUCTS.SUB.SALT', name: 'PRODUCTS.ITEM.SALT', img: 'assets/images/ملح.jpg' },

  // --- Electrical ---
  { category: 'elec', sub: 'PRODUCTS.SUB.COOLING', name: 'PRODUCTS.ITEM.FANS_AC', img: 'assets/images/ت.png' },
  { category: 'elec', sub: 'PRODUCTS.SUB.LARGE', name: 'PRODUCTS.ITEM.WASHING_TV', img: 'assets/images/رر.png' },
  { category: 'elec', sub: 'PRODUCTS.SUB.KITCHEN', name: 'PRODUCTS.ITEM.BLENDER_COOKER', img: 'assets/images/دد.png' },
  { category: 'elec', sub: 'PRODUCTS.SUB.SMALL', name: 'PRODUCTS.ITEM.IRON_VACUUM', img: 'assets/images/للل.png' },
  { category: 'elec', sub: 'PRODUCTS.SUB.SMALL', name: 'PRODUCTS.ITEM.HEATER_HOOD', img: 'assets/images/صص.png' },

  // --- Build ---
  { category: 'build', sub: 'PRODUCTS.SUB.MARBLE', name: 'PRODUCTS.ITEM.MARBLE', img: 'assets/images/رخام.jpg' },
  { category: 'build', sub: 'PRODUCTS.SUB.FINISH', name: 'PRODUCTS.ITEM.CERAMIC', img: 'assets/images/ثثث.png' },
  { category: 'build', sub: 'PRODUCTS.SUB.METAL', name: 'PRODUCTS.ITEM.METALS', img: 'assets/images/كك.png' },
  { category: 'build', sub: 'PRODUCTS.SUB.OTHER', name: 'PRODUCTS.ITEM.COAL', img: 'assets/images/ضضض.png' },

  // --- Textile ---
  { category: 'textile', sub: 'PRODUCTS.SUB.CLOTHES', name: 'PRODUCTS.ITEM.CLOTHES', img: 'assets/images/قق.png' },
  { category: 'textile', sub: 'PRODUCTS.SUB.LEATHER', name: 'PRODUCTS.ITEM.BAGS', img: 'assets/images/شنط.jpg' },
  { category: 'textile', sub: 'PRODUCTS.SUB.CLOTHES', name: 'PRODUCTS.ITEM.BLANKETS', img: 'assets/images/بطاطين.png' },
  { category: 'textile', sub: 'PRODUCTS.SUB.LEATHER', name: 'PRODUCTS.ITEM.WALLETS', img: 'assets/images/سسس.jpg' },
  { category: 'textile', sub: 'PRODUCTS.SUB.CLOTHES', name: 'PRODUCTS.ITEM.HEADWEAR', img: 'assets/images/طرح.png' },
  { category: 'textile', sub: 'PRODUCTS.SUB.LEATHER', name: 'PRODUCTS.ITEM.BELTS', img: 'assets/images/احزمة.jpg' },
  { category: 'textile', sub: 'PRODUCTS.SUB.LEATHER', name: 'PRODUCTS.ITEM.SHOES', img: 'assets/images/ههه.png' },

  { category: 'textile', sub: 'PRODUCTS.SUB.MEDICAL', name: 'PRODUCTS.ITEM.COTTON', img: 'assets/images/قطن.png' },
  { category: 'textile', sub: 'PRODUCTS.SUB.MEDICAL', name: 'PRODUCTS.ITEM.GAUZE', img: 'assets/images/شاش.png' },
  { category: 'textile', sub: 'PRODUCTS.SUB.MEDICAL', name: 'PRODUCTS.ITEM.BANDAGES', img: 'assets/images/ضغط.png' },

  // --- Mix ---
  { category: 'mix', sub: 'PRODUCTS.SUB.CHEMICALS', name: 'PRODUCTS.ITEM.PETRO', img: 'assets/images/زززز.png' },
  { category: 'mix', sub: 'PRODUCTS.SUB.CLEANING', name: 'PRODUCTS.ITEM.CLEANING', img: 'assets/images/ثثثث.png' },
  { category: 'mix', sub: 'PRODUCTS.SUB.FURNITURE', name: 'PRODUCTS.ITEM.FURNITURE', img: 'assets/images/شششششش.png' },
  { category: 'mix', sub: 'PRODUCTS.SUB.KITCHEN', name: 'PRODUCTS.ITEM.KITCHEN', img: 'assets/images/ففف.png' },
  { category: 'mix', sub: 'PRODUCTS.SUB.PLASTIC', name: 'PRODUCTS.ITEM.PLASTIC', img: 'assets/images/fffff.png' },
  { category: 'mix', sub: 'PRODUCTS.SUB.PLASTIC', name: 'PRODUCTS.ITEM.HANDMADE', img: 'assets/images/قققق.jpg' }
];

  get filteredProducts() {
    return this.allProducts.filter(p => p.category === this.activeTab);
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}