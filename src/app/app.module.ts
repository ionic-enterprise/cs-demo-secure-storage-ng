import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { KeyValueStorage, SQLite } from '@ionic-enterprise/secure-storage/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor, UnauthInterceptor } from './core';
import { PinDialogComponentModule } from './pin-dialog/pin-dialog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), PinDialogComponentModule, AppRoutingModule],
  providers: [
    KeyValueStorage,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
