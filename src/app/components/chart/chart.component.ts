// import { Component } from '@angular/core';
// import { NavBarComponent } from '../nav-bar/nav-bar.component';
// import { BaseChartDirective } from 'ng2-charts';
// import { ChartType, ChartData } from 'chart.js';

// @Component({
//   selector: 'app-chart',
//   imports: [NavBarComponent, BaseChartDirective],
//   templateUrl: './chart.component.html',
//   styleUrl: './chart.component.css',
// })
// export class ChartComponent {
//   chartType: ChartType = 'bar';
//   chartData: ChartData<'bar'> = {
//     labels: ['A', 'B', 'C'],
//     datasets: [{ label: 'Test', data: [10, 20, 30] }],
//   };
// }
import { Component, inject, effect } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartData } from 'chart.js';
import { NotesService } from '../../notes/data-access/notes.service';

@Component({
  selector: 'app-chart',
  imports: [NavBarComponent, BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  private notesService = inject(NotesService);

  chartType: ChartType = 'bar';
  chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [{ label: 'Rating', data: [] }],
  };
  constructor() {
    this.notesService.getAllNotes();

    effect(() => {
      if (this.notesService.notesLoaded()) {
        const notes = this.notesService.notes();
        this.chartData.labels = notes.map((note) => note.destination);
        this.chartData.datasets[0].data = notes.map((note) => note.rating);
      }
    });
  }
}
