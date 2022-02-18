import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './app.contador.html',
})
export class ContadorComponet {
  title: string = 'Contador';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
