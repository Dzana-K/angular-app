import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { ApiModule } from '../../core/api/api.module';
@NgModule({
    declarations:[LoginComponent],
    imports:[CommonModule, ApiModule]
})

export class LoginModule{}