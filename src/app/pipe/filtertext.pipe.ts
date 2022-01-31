 import { Pipe, PipeTransform } from '@angular/core';
 import { Country } from '../model/country';

 @Pipe({
   name: 'appFilter'
 })
export class FilterPipe implements PipeTransform {
   /**
    
    
     @param items 
     @param searchText 
     @returns 
    */
   transform(items: Country[], searchText: string): Country[] {
    if (!items) {
       return [];
     }
     if (!searchText) {
       return items;
     }
     searchText = searchText.toLocaleLowerCase();

     return items.filter(it => {
       return Object.values(it).toString().toLocaleLowerCase().includes(searchText) ;
     });
   }
 }

  