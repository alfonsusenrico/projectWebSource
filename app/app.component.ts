import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("textGreet") parentRef: ElementRef<HTMLElement> | undefined;

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

  async hidden() {
    const parent = this.parentRef?.nativeElement;
    const length = this.parentRef?.nativeElement.childElementCount;
    if(length != null) {
      for(var i = 0;i<length;i++) {
        const child = parent?.children[i] as HTMLElement;
        const cLength = parent?.children[i].childElementCount;
        for(var j = 0;j < cLength!; j++) {
          const cChild = parent?.children[i].children[j] as HTMLElement;
          cChild.style.visibility = "hidden";
        }
        child.style.visibility = "hidden";
        const bChild = parent?.children[i] as HTMLElement;
      }
    }
  }

  async renderGreet() {
    await this.sleep(2000);
    const parent = this.parentRef?.nativeElement;
    const length = this.parentRef?.nativeElement.childElementCount;
    if(length != null) {
      for(var i = 0;i<length;i++) {
        const child = parent?.children[i] as HTMLElement;
        const cLength = parent?.children[i].childElementCount;
        for(var j = 0;j < cLength!; j++) {
          const cChild = parent?.children[i].children[j] as HTMLElement;
          cChild.style.visibility = "visible";
        }
        child.style.visibility = "visible";
        await this.sleep(1000);
        const bChild = parent?.children[i] as HTMLElement;
        bChild.style.opacity = (0.5).toString();
        await this.sleep(500);
      }
    }
  }

  async renderHiddenGreet() {

    var trollMsg = '';

    const parent = this.parentRef?.nativeElement;
    const length = this.parentRef?.nativeElement.childElementCount;
    const firstChild = parent?.firstChild as HTMLElement;
    trollMsg += firstChild.innerHTML + " ";
    firstChild.style.color = "red";
    await this.sleep(1000);
    if(length != null) {
      for(var i = 0;i<length;i++) {
        const cLength = parent?.children[i].childElementCount;
        for(var j = 0;j<cLength!;j++) {
          const cChild = parent?.children[i].children[j] as HTMLElement;
          trollMsg += cChild.innerHTML;
          cChild.style.opacity = (1).toString();
          cChild.style.color = "red";
          await this.sleep(1000);
        }
      }
    }

    const trollEl = document.getElementById("troll");
    if(trollEl != null) {
      trollEl.innerHTML = trollMsg;
    }
  }

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
