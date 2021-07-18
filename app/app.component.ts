import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    console.log(e);
    const el = document.getElementById('bg');
    const x = (window.innerWidth + e.pageX*-7)/100;
    const y = (window.innerHeight + e.pageY*-7)/100;
    el!.style.transform = `translate(${x+2000}px, ${y}px)`;
  }

  async ngAfterViewInit() {
    console.log(screen);
    //await this.hidden();
    //await this.renderGreet();
    //await this.renderHiddenGreet();
    // const el = document.getElementById("tes")
    // if(el) {
    //   console.log(screen);
    //   console.log("translate("+screen.height+"px,"+screen.width+"px)")
    //   el.style.transform = "translateX(calc(100vw - 100%))";
    //   //el.style.left = "100%";
    // }
  }

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
