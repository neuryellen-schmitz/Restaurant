import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ProductRoutingModule } from './product-routing.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
    CheckboxModule,
    CommonModule,
    FileUploadModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    ProductRoutingModule,
    ToastModule
  ],
  providers: [
    MessageService,
    Router
  ],
})
export class ProductModule { }
