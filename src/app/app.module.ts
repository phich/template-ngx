import { BrowserModule } from '@angular/platform-browser';
ng update @angular/core@12 @angular/cli@12import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
