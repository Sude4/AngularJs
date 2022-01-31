 import { Pipe, PipeTransform } from '@angular/core';
 import { Country } from '../model/country';

 @Pipe({
   name: 'appFilter'
 })
export class FilterPipe implements PipeTransform {
   /**
    * Pipe filters the list of elements based on the search text provided
    *
    * @param items list of elements to search in
    * @param searchText search string
    * @returns list of elements filtered by search text or []
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

  // export class filtertextpipe implements PipeTransform {

  //   transform(value: Country[], filterText: string):Country[] {


  //     filterText = filterText?filterText.toLocaleLowerCase() : "" 
  //    return filterText?value
  //     .filter(((p:Country)=>p.capital.toLocaleLowerCase().indexOf(filterText)!==-1)):value;
  //   }
 

  // }

 
