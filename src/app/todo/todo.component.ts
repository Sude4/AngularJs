import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import  axios   from 'axios';
import { Country } from '../model/country';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

countries: Country[]=[];
searchText:any;
 

message = "";

  constructor() {
   
    
    axios.get('https://restcountries.com/v2/all').then(resp => {
      this.countries=resp.data;

      console.log(resp.data);
      
      
  })
  .catch(resp => {
  return null;
  });

    

   }
   ngOnInit(): void {

   
  }
  
 model = new Model();



 }

