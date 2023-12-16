import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from './api/auth.service';

@NgModule({
    imports: [BrowserModule, HttpClientModule],
    declarations: [],
    exports: [],
    providers: [AuthService]
})
export class ApiModule {
    constructor(http: HttpClient) {
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
