import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field : string, value : string): any[] {  
        console.log('filterPipe field: ' + field + ' value ' + value);
        if (!items || !field || !value || value == 'ALL') return items;        
        return items.filter(item => item[field].toString().startsWith(value));
    }

}
