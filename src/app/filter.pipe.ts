import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any, term?: any): any {
    if(term === undefined){
    	return list;
    }
    return list.filter(function(person){
    	return person.includes(term);
    })
  }

}
