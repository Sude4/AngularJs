import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../model/country';

@Pipe({
  name: 'filtertextpipe'
})
export class filtertextpipe implements PipeTransform {

  transform(value: Country[], filterText: string):Country[] {


    filterText = filterText?filterText.toLocaleLowerCase() : "" 
    return filterText?value
    .filter(((p:Country)=>p.capital.toLocaleLowerCase().indexOf(filterText)!==-1)):value;
  }
 

}