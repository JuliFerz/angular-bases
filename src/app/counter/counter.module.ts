import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
  declarations: [
    CounterComponent // este componente es accesible en TODO ./counter raiz
  ],
  exports: [
    CounterComponent // Se indican componentes que serán exportados en el exterior (fuera del scope del modulo de counter)
  ]
})
export class CounterModule { }
