import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-dashboard.component',
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  statsData: any;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.getStats();
  }

  getStats() {
    this.userService.getStats().subscribe(res => {
      this.statsData = res;
    })
  }
}
