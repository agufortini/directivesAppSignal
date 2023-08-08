import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  testMessage: string = 'Agustín Fortini';
  color: string = 'red';

  myForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  inputValidate(field: string): boolean {
    return this.myForm.get('name')?.invalid || false;
  }

  changeMessage(): void {
    this.testMessage = Math.random().toString();
  }

  changeColor(): void {
    this.color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
  }
}
