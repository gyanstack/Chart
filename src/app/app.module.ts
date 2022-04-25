import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Chart } from 'chart.js';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartScrollableComponent } from './chart-scroll/chart-scrollable.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    ChartScrollableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
