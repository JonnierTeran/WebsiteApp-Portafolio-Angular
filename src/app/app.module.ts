import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { InformacionPersonalComponent } from './Components/informacion-personal/informacion-personal.component';
import { HabilidadesComponent } from './Components/habilidades/habilidades.component';
import { NavVarComponent } from './Components/nav-var/nav-var.component';
import { CurriculumComponent } from './Components/curriculum/curriculum.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { CointactosComponent } from './Components/cointactos/cointactos.component';
import { PieDePaginaComponent } from './Components/pie-de-pagina/pie-de-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InformacionPersonalComponent,
    HabilidadesComponent,
    NavVarComponent,
    CurriculumComponent,
    PortfolioComponent,
    CointactosComponent,
    PieDePaginaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

