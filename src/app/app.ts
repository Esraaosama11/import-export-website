import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
 import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 800, // سرعة الحركة (800ms)
      once: true, // الحركة تحصل مرة واحدة بس وإنتِ نازلة
      offset: 100, // تبدأ الحركة قبل ما توصلي للعنصر بـ 100px
      easing: 'ease-in-out',
    });
  }
}