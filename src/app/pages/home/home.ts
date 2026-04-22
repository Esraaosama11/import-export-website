import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit , OnDestroy {
  currentSlide = 0;
  slideInterval: any;

  ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 2500);   
  }

  nextSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[this.currentSlide].classList.remove('active');
    this.currentSlide = (this.currentSlide + 1) % slides.length;
    slides[this.currentSlide].classList.add('active');
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}
