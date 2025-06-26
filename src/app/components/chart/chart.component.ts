import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-chart',
  imports: [NavBarComponent, BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  chartType: ChartType = 'bar';
  chartData: ChartData<'bar'> = {
    labels: ['A', 'B', 'C'],
    datasets: [{ label: 'Test', data: [10, 20, 30] }],
  };
}
