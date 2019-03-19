import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalizeFirst"
})
export class CapitalizeFirstPipe implements PipeTransform {
  transform(value: string, args: any[]) {
    console.log(args);
    if (value && value.length > 0) {
      return value.charAt(0).toUpperCase() + value.substr(1, value.length);
    }
    return value;
  }
}
