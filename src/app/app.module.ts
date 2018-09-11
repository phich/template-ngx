import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularBlockUiDynamicModule } from "angular-block-ui-dynamic";
import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularBlockUiDynamicModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
