import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

// ==> NG-Zorro modules
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzTableModule } from 'ng-zorro-antd/table';

// ==> Routes
import { AppRoutingModule } from './app-routing.module';

// ==> Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, NavComponent, ClientesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NzTableModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
