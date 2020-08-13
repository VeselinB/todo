import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from "@angular/material";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MODULES = [MatInputModule, DragDropModule, MatCardModule, MatButtonModule, MatDialogModule, MatFormFieldModule]

@NgModule({
  declarations: [],

  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],

})
export class MaterialModule { }
