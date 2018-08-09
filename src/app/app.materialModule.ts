import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import
{
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {GrowlModule} from 'primeng/growl';
import {CardModule} from 'primeng/card';


@NgModule({
  imports :[
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    FlexLayoutModule,
    TableModule,
    ButtonModule,
    GrowlModule,
    CardModule,
  ],
  exports: [
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    FlexLayoutModule,
    TableModule,
    ButtonModule,
    GrowlModule,
    CardModule,
  ],
})

export class AppMaterialModule { }

