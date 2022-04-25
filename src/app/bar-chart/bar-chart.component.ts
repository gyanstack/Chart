import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions: ChartOptions = {
    layout: {
      padding: 30
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'ddd, MMM D'
            }
          },
          position: 'bottom',
          stacked: true,
        }
      ],
      yAxes: [
        {
          stacked: true,
          position: 'left',
          labels: ['Cust 1', 'Cust 2', 'Cust 3', 'Cust 4', 'Cust 5', 'Cust 6', 'Cust 7'],
          //   ticks: {
          //     // Include a dollar sign in the ticks
          //     callback: function (value, index, ticks) {
          //       return 'Cust ' + value;
          //     }
          //   }
        }
      ]
    }
  };
  public barChartLabels: Label[] = [
    " April 01, 2018"
    , " April 02, 2018"
    , " April 03, 2018"
    , " April 04, 2018"
    , " April 05, 2018"
    , " April 06, 2018"
    , " April 07, 2018"
    , " April 08, 2018"
    , " April 09, 2018"
    , " April 10, 2018"
    , " April 11, 2018"
    , " April 12, 2018"
    , " April 13, 2018"
    , " April 14, 2018"
    , " April 15, 2018"
  ];
  //public barChartType: ChartType = 'bar';
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    // {data:[1,12,31,2,2,1,4,7,1,3,5,1,3,4,6,2],label:'Pending'},
    // {data:[0,0,3,2,2,1,4,0,1,0,5,1,3,4,6,2],label:'Authorized'},
    // {data:[19,0,3,2,0,1,0,7,0,3,0,1,3,4,6,2],label:'PostFF'}
    {
      data: [
        { x: new Date('2018-04-01'), y: 'Cust 1' }, { x: new Date('2018-04-01'), y: 'Cust 2' },
        { x: null, y: 'Cust 3' },
        { x: new Date('2018-04-02'), y: 'Cust 4' }, { x: new Date('2018-04-03'), y: 'Cust 5' },
        { x: new Date('2018-04-02'), y: 'Cust 6' }, { x: new Date('2018-04-02'), y: 'Cust 7' }],
      label: 'Pending',
      stack: '1'
    },
    {
      data: [
        { x: null, y: 'Cust 1' }, { x: new Date('2018-04-03'), y: 'Cust 2' },
        { x: new Date('2018-04-03'), y: 'Cust 3' },
        { x: new Date('2018-04-03'), y: 'Cust 4' }, { x: new Date('2018-04-04'), y: 'Cust 5' },
        { x: new Date('2018-04-03'), y: 'Cust 6' }, { x: new Date('2018-04-04'), y: 'Cust 7' }],
      label: 'Authorized',
      stack: '1'
    },
    {
      data: [
        { x: null, y: 'Cust 1' }, { x: new Date('2018-04-04'), y: 'Cust 2' },
        { x: null, y: 'Cust 3' },
        { x: new Date('2018-04-06'), y: 'Cust 4' }, { x: new Date('2018-04-07'), y: 'Cust 5' },
        { x: new Date('2018-04-06'), y: 'Cust 6' }, { x: new Date('2018-04-05'), y: 'Cust 7' }],
      label: 'PostFF',
      stack: '1'
    },
  ];

}
