import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router, private scroller: ViewportScroller, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    const el = document.getElementById('bg');
    const x = (window.innerWidth + e.pageX*-7)/100;
    const y = (window.innerHeight + e.pageY*-7)/100;
    el!.style.transform = `translate(${x+2000}px, ${y}px)`;
  }

  @HostListener('wheel', ['$event'])
  async scroll(e: WheelEvent) {
    const url = window.location.href;
    var href = url.split('#')[1];

    var current = '';

    //scroll down
    if(e.deltaY > 0) {
      if(!href) {
        href = 'home';
      }
      current = href+'Nav';
      var next = '';
      switch(href) {
        case 'home':
          next = 'about';
          break;
        case 'about':
          next = 'projects';
          break;
        case 'projects':
          return;
      }
    }
    //scroll up
    else {
      if(!href) {
        return;
      }
      current = href+'Nav';
      var next = '';
      switch(href) {
        case 'home':
          return;
        case 'about':
          next = 'home';
          break;
        case 'projects':
          next = 'about';
          break;
      }
    }

    var currentElement = document.getElementById(current)?.classList;
    var nextElement = document.getElementById(next+'Nav')?.classList;
    
    currentElement?.remove('navActive');
    currentElement?.add('navInactive');

    nextElement?.remove('navInactive');
    nextElement?.add('navActive');

    this.router.navigateByUrl("#"+next);
    this.scroller.scrollToAnchor(next);
  }

  async ngAfterViewInit() {
    await this.setNav();
  }

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async setNav() {
    var url = window.location.href
    var href = url.split('#')[1];
    if(!href || href == 'home') {
      return;
    }
    else {
      console.log(href);
      var current = href+'Nav';
      var baseElement = document.getElementById('homeNav')?.classList;
      var currentElement = document.getElementById(current)?.classList;
    
    baseElement?.remove('navActive');
    baseElement?.add('navInactive');

    currentElement?.remove('navInactive');
    currentElement?.add('navActive');
    }
  }

  toggleNav(id: string) {
    var url = window.location.href;
    var href = url.split('#')[1];
    if(!href) {
      href = 'home';
    }
    var current = href+'Nav';

    var currentElement = document.getElementById(current)?.classList;
    var nextElement = document.getElementById(id)?.classList;

    currentElement?.remove('navActive');
    currentElement?.add('navInactive');

    nextElement?.remove('navInactive');
    nextElement?.add('navActive');

    // var el = document.getElementById(id)?.classList;
    // if (el?.contains('navActive')) {
    //   el.remove('navActive');
    //   el.add('navInactive');
    //   el?.forEach(elements => {
    //     elements.
    //   })
    //   return;
    // }
    // if (el?.contains('navInactive')) {
    //   el.remove('navInactive');
    //   el.add('navActive');
    //   return;
    // }
  }

}
