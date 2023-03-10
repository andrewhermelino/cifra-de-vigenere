import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CifraComponent } from './pages/cifra/cifra.component';
import { ArtigoComponent } from './pages/artigo/artigo.component';
import { FormsModule } from '@angular/forms';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { TabelaVigenereComponent } from './components/tabela-vigenere/tabela-vigenere.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatesComponent } from './pages/updates/updates.component';

@NgModule({
  declarations: [
    AppComponent,
    CifraComponent,
    ArtigoComponent,
    TextBlockComponent,
    TabelaVigenereComponent,
    UpdatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
