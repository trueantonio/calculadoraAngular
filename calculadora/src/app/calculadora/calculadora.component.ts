import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
//Declaro las variables que necesita el componente
public titulo:string;
public num1:any;
public num2:any;
public resultado:any;
public historial:string[];
  constructor() { 
    //Asigno valores iniciales a las variables
    this.titulo = "Calculadora";
    this.num1 = null;
    this.num2 = null;
    this.resultado = null;
    this.historial = [];

  }

  ngOnInit(): void {
  }

  //Metodo que suma 2 numeros y añade la operacion al historial
  sumar():void{
    this.resultado = Number(this.num1) + Number(this.num2);
    this.historial.push(this.num1+" + "+this.num2+" = "+this.resultado);
  }

  restar():void{
    this.resultado = Number(this.num1) - Number(this.num2);
    this.historial.push(this.num1+" - "+this.num2+" = "+this.resultado);
  }

  multiplicar():void{
    this.resultado = Number(this.num1) * Number(this.num2);
    this.historial.push(this.num1+" x "+this.num2+" = "+this.resultado);
  }

  dividir():void{
    this.resultado = Number(this.num1) / Number(this.num2);
    this.historial.push(this.num1+" / "+this.num2+" = "+this.resultado);
  }

  binario():void{
    this.resultado = Number(this.num1).toString(2);
    this.historial.push(this.num1+" en binario resulta "+this.resultado);
  }

  limpiarTodo():void{
    this.num1 = null;
    this.num2 = null;
    this.resultado = null;
    this.historial = [];
  }

}
