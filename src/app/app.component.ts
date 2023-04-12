import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Digglet';

  cardArray = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 8
    },
    {
      id: 9
    },
    {
      id: 10
    },
    {
      id: 11
    },
    {
      id: 12
    },
    {
      id: 13
    },
    {
      id: 14
    },
    {
      id: 15
    },
  ];

  randomNumber: number = 1;
  public bicho :any;

  public message: any;
  public puntos: number = 0;
  public setMessage(message: any): void {
    this.puntos++;
  }

  public segundos: number = 30;

  public contador(): void {
    setInterval(() => {
      if (this.segundos > 0) {
        this.segundos=this.segundos-1;
       
        this.randomNumber = Math.floor(Math.random() * this.cardArray.length);
        this.bicho = this.cardArray[this.randomNumber];
       
      }else{
        alert('Tu puntuación final es ' + this.puntos)
      }
    }, 1000);
  }

  ngOnInit():void{
    this.contador();
  }
}
