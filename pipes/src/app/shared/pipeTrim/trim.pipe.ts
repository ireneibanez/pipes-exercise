import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "trimPipe"
})
export class TrimPipe implements PipeTransform {
  transform(text: string, args: any[]) {
    if (text && text.length < 15)  {
      return text;
    } else {
      return text.slice(0, 15) + '...';
    }
  }
}
