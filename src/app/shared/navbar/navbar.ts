import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  currentLang: string = 'ar';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    this.translate.use('ar');
  }

 switchLang(lang: string) {
  this.currentLang = lang;
  this.translate.use(lang);
  document.documentElement.lang = lang;
}
}