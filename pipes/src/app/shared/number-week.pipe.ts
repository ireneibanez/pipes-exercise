import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numberWeek"
})
export class NumberWeekPipe implements PipeTransform {
  transform(value: string, args: any[]) {
    return args + ' ' + value;
  }
}
