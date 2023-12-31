import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-component/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultipplicaPorPipePipe } from './multipplica-por.pipe.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { ComponentenPaiComponent } from './componenten-pai/componenten-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ExemploServicos1Component } from './exemplo-servicos1/exemplo-servicos1.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultipplicaPorPipePipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    ComponentePersonalizadoComponent,
    ComponentenPaiComponent,
    ComponenteFilhoComponent,
    ExemploServicos1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
