import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sema';
  vettore = new Array<String>();

  spamma(inutile: HTMLInputElement, spam: HTMLInputElement):boolean{
    console.log(inutile.value + "-" + spam.value)

    let cont= Number(spam.value);

    for (let index = 0; index < cont; index++) {
      this.vettore.push(inutile.value);
      }
      return false;
  }
}
