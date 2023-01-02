import { Component } from '@angular/core';
import { HeaderService } from "../../services/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(public headerService: HeaderService) { }

  toogleSelectemItem(navElem: string) {
    this.headerService.toogleSelectemItem(navElem);
    console.log(this.headerService.getItem(), navElem);
  }

}
