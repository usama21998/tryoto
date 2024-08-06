import { ApplicationRef, ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { first } from 'rxjs';





@Component({
  selector: 'home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  dynamicText: string = 'smarter.';
  textArr = ["better.", "faster.", "easier.", "smarter."];
  timerId: any;
  applicationRef = inject(ApplicationRef);
  activeBtn = 'ship'

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.applicationRef.isStable.pipe(first((isStable) => isStable)).subscribe(() => {
      this.timerId = setInterval(() => {
        this.dynamicText = this.getRandomText(this.textArr);
        console.log(this.dynamicText);
        this.changeDetectorRef.detectChanges();
      }, 1500);
    });
  }

  getRandomText(arr: any) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  activeBtnFun(str: string) {
    this.activeBtn = str;
  }

  checkBtnActive(str: string) {
    if (this.activeBtn === str) {
      return true
    }
    return false
  }


  ngOnDestroy() {
    clearInterval(this.timerId);
  }
}
