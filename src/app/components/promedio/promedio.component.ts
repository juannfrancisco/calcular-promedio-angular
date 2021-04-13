import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit {

  nota1:number = 1;
  nota2:number = 1;
  nota3:number = 1;
  nota4:number = 1;
  promedio:number;
  color:string = "black";


  constructor() { }

  ngOnInit(): void {
  }

  calcularPromedio(){
    this.promedio = (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;

    if( this.promedio >= 1 && this.promedio <= 3.9 ){
      this.color = "red";
    }else{
      this.color = "black";
    }

  }

}
