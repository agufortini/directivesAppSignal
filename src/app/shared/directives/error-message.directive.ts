import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[errorMessage]',
})
export class ErrorMessageDirective implements OnInit, OnChanges {
  private _color: string = 'red';
  private _message: string = 'This field is required';

  htmlElement: ElementRef<HTMLElement>;
  //@Input() color: string = 'red';
  //Se recibe el valor de color y se ejecuta el código estableciendo el mismo
  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }
  //@Input() message: string = 'This field is required';
  @Input() set message(value: string) {
    this._message = value;
    this.setMessage();
  }

  @Input() set validateField(value: boolean) {
    if (value) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.htmlElement = elementRef;
  }

  ngOnInit() {
    this.setColor();
    this.setMessage();
    this.setStyle();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // //Extraer el nuevo valor del currentValue
    // if (changes['message']) {
    //   const message = changes['message'].currentValue;
    //   this.htmlElement.nativeElement.innerText = message;
    // }
    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
    // console.log(changes);
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }

  setStyle(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
}
