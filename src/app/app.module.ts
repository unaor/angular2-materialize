import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { GraphComponent } from './graph/graph.component';
import { CHART_DIRECTIVES } from 'angular2-highcharts';
import { SwatTableComponent } from './swat-table/swat-table.component';
import { StationTypeGraphComponent } from './station-type-graph/station-type-graph.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SideMenuComponent,
    GraphComponent,
    CHART_DIRECTIVES,
    SwatTableComponent, StationTypeGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
