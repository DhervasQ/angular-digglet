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
      id: 1,
      name: 'earth',
      img: 'public/exercise-1/earth.svg',
    },
    {
      id: 2,
      name: 'jupiter',
      img: 'public/exercise-1/jupiter.svg',
    },
    {
      id: 3,
      name: 'mars',
      img: 'public/exercise-1/mars.svg',
    },
    {
      id: 4,
      name: 'mercury',
      img: 'public/exercise-1/mercury.svg',
    },
    {
      id: 5,
      name: 'saturn',
      img: 'public/exercise-1/saturn.svg',
    },
    {
      id: 6,
      name: 'uranus',
      img: 'public/exercise-1/uranus.svg',
    },
    {
      id: 7,
      name: 'earth',
      img: 'public/exercise-1/earth.svg',
    },
    {
      id: 8,
      name: 'jupiter',
      img: 'public/exercise-1/jupiter.svg',
    },
    {
      id: 9,
      name: 'mars',
      img: 'public/exercise-1/mars.svg',
    },
    {
      id: 10,
      name: 'mercury',
      img: 'public/exercise-1/mercury.svg',
    },
    {
      id: 11,
      name: 'saturn',
      img: 'public/exercise-1/saturn.svg',
    },
    {
      id: 12,
      name: 'uranus',
      img: 'public/exercise-1/uranus.svg',
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
