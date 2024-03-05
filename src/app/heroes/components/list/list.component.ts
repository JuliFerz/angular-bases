import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Wolverine'];
  public deletedHero?: string;

  removeLastHero(): string | undefined{
    this.deletedHero = this.heroNames.pop();
    console.log(this.deletedHero);
    return this.deletedHero;
  }
}
