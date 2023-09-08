import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './textbox/textbox.component';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TextboxComponent,
    ButtonComponent
  ],
})
export class ButtonModule {}
