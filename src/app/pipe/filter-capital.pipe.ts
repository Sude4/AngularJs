import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../model/country';

@Pipe({
  name: 'filterCapital'
})
export class FilterCapitalPipe implements PipeTransform {

  transform(items: Country[], searchText: string): Country[] {
    if (!items) {
       return [];
     }
     if (!searchText) {
       return items;
     }
     searchText = searchText.toLowerCase();

     return items.filter(it => {
       return it.capital?.toLowerCase().includes(searchText); ;
     });
   }
 }
