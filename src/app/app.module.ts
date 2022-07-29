import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatissueComponent } from './creatissue/creatissue.component';
import { CreateissuepageComponent } from './createissuepage/createissuepage.component';
import { EditpageComponent } from './editpage/editpage.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CreatissueComponent,
    CreateissuepageComponent,
    EditpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
