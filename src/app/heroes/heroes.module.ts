import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";


@NgModule({
  declarations: [ // los componentes son visibles solo dentro de scope de modulo
    HeroComponent,
    ListComponent
  ],
  exports: [ // los componentes son visibles fuera del scope del modulo heroes
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
