import { UserService } from './../../services/user.service';
import {
  Component,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import Chart, { CategoryScale } from 'chart.js/auto';
import { DatePipe, isPlatformBrowser } from '@angular/common';

Chart.register(CategoryScale);

@Component({
  selector: 'app-dashboard.component',
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe],
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  statsData: any;
  workouts: any[] = [];
  activities: any[] = [];

  @ViewChild('workoutLineChart') workoutLineChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('activityLineChart') activityLineChartRef!: ElementRef<HTMLCanvasElement>;

  private workoutChart: Chart | null = null;
  private activityChart: Chart | null = null;

  private viewReady = false;
  private dataReady = false;

  constructor(
    private userService: UserService,
    private datePipe: DatePipe,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /* ===================== LIFECYCLE ===================== */

  ngOnInit() {
    this.getStats();
    this.getGraphStats();
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.viewReady = true;
    this.tryRenderCharts();
  }

  ngOnDestroy() {
    this.destroyCharts();
  }

  /* ===================== DATA ===================== */

  getGraphStats() {
    this.userService.getGraphStats().subscribe((res) => {
      this.workouts = res.workouts || [];
      this.activities = res.activities || [];

      this.dataReady = true;
      this.tryRenderCharts();
    });
  }

  getStats() {
    this.userService.getStats().subscribe((res) => {
      this.statsData = res;
    });
  }

  /* ===================== RENDER CONTROL ===================== */

  private tryRenderCharts() {
    if (!this.viewReady || !this.dataReady) return;

    if (this.workoutLineChartRef?.nativeElement && this.activityLineChartRef?.nativeElement) {
      this.createWorkoutChart();
      this.createActivityChart();
    }
  }

  /* ===================== CHARTS ===================== */

  private createWorkoutChart() {
    this.workoutChart?.destroy();

    const ctx = this.workoutLineChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    this.workoutChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.workouts.map((d) => this.datePipe.transform(d.date, 'MM/dd')),
        datasets: [
          {
            label: 'Calories Burned',
            data: this.workouts.map((d) => d.caloriesBurned),
            borderColor: '#2563EB',
            backgroundColor: 'rgba(37, 99, 235, 0.2)',
            pointBackgroundColor: '#2563EB',
            borderWidth: 2,
            tension: 0.3,
          },
          {
            label: 'Duration (min)',
            data: this.workouts.map((d) => d.duration),
            borderColor: '#7C3AED',
            backgroundColor: 'rgba(124, 58, 237, 0.2)',
            pointBackgroundColor: '#7C3AED',
            borderWidth: 2,
            tension: 0.3,
          },
        ],
      },
      options: this.getChartOptions(),
    });
  }

  private createActivityChart() {
    this.activityChart?.destroy();

    const ctx = this.activityLineChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    this.activityChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.activities.map((d) => this.datePipe.transform(d.date, 'MM/dd')),
        datasets: [
          {
            label: 'Calories Burned',
            data: this.activities.map((d) => d.caloriesBurned),
            borderColor: '#DC2626',
            backgroundColor: 'rgba(220, 38, 38, 0.2)',
            pointBackgroundColor: '#DC2626',
            borderWidth: 2,
            tension: 0.3,
          },
          {
            label: 'Steps',
            data: this.activities.map((d) => d.steps),
            borderColor: '#16A34A',
            backgroundColor: 'rgba(22, 163, 74, 0.2)',
            pointBackgroundColor: '#16A34A',
            borderWidth: 2,
            tension: 0.3,
          },
          {
            label: 'Distance (km)',
            data: this.activities.map((d) => d.distance),
            borderColor: '#06B6D4',
            backgroundColor: 'rgba(6, 182, 212, 0.2)',
            pointBackgroundColor: '#06B6D4',
            borderWidth: 2,
            tension: 0.3,
          },
        ],
      },
      options: this.getChartOptions(),
    });
  }

  private getChartOptions() {
    return {
      responsive: true,
      maintainAspectRatio: false,
      resizeDelay: 150,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
      },
    };
  }

  private destroyCharts() {
    this.workoutChart?.destroy();
    this.activityChart?.destroy();
    this.workoutChart = null;
    this.activityChart = null;
  }
}
