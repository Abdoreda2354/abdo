import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  @ViewChild('collaps') collaps!:ElementRef
  navLinks!: NodeListOf<HTMLAnchorElement>;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.matchMedia('(max-width: 991.98px)').matches) {
      this.collaps.nativeElement.classList.remove('d-flex')
      
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.navLinks = document.querySelectorAll('.nav-link');
      if (window.matchMedia('(max-width: 991.98px)').matches) {
        this.collaps.nativeElement.classList.remove('d-flex')
        
      
    }
    }

  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setActiveLink();
    }
  }

  private setActiveLink(): void {
    const scrollPosition = window.scrollY;

    this.navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute('href')!);
      if (
        section &&
        section.getBoundingClientRect().top + window.scrollY <= scrollPosition + 100 &&
        section.getBoundingClientRect().bottom + window.scrollY > scrollPosition + 100
      ) {
        this.navLinks.forEach((nav) => nav.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }
}
