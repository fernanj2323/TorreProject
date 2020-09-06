import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: any,  args: any): any {
    const FilterUsername = [];

    for(const test of value){

      if(test.publicId){
        if(test.publicId.toLowerCase().indexOf(args.toLowerCase()) > -1 ){
          FilterUsername.push(test);
         }
       }
  

    }


    return null;
  }

}
