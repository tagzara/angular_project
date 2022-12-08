import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './authentication/auth.module';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    appInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
