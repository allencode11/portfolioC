import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public currentIem: string = 'home';

  constructor() { }

  toogleSelectemItem(navElem: string): void {
    this.currentIem = navElem;
    console.log(this.currentIem, navElem);
  }

  getItem(): string {
    return this.currentIem;
  }
}
