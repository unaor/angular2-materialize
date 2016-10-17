import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CHART_DIRECTIVES } from 'angular2-highcharts';
import { SwatTableComponent } from './swat-table/swat-table.component';
import { StationTypeGraphComponent } from './station-type-graph/station-type-graph.component';
import { UpDownGraphComponent } from './up-down-graph/up-down-graph.component';
import { SystemStatusComponent } from './system-status/system-status.component';
import { EventSeverityComponent } from './event-severity/event-severity.component';
import { EventDeviceTypeComponent } from './event-device-type/event-device-type.component';
import { MaterializeModule } from 'angular2-materialize';
import "materialize-css";
import { FilterPipe } from './filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SideMenuComponent,
    CHART_DIRECTIVES,
    FilterPipe,
    SwatTableComponent, StationTypeGraphComponent, UpDownGraphComponent, SystemStatusComponent, EventSeverityComponent, EventDeviceTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
