import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuillModule } from 'ngx-quill';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      
    [{ 'indent': '-1' }, { 'indent': '+1' }],          
    [{ 'direction': 'rtl' }],                         

    [{ 'size': ['small', false, 'large', 'huge'] }],  
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         

    ['link', 'image', 'video']                         
  ]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    QuillModule.forRoot({
      format: 'object',
      modules,
      placeholder: 'Start Writing...'
    })
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
