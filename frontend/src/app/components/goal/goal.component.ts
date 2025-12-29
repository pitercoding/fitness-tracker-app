import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-goal',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.scss',
})
export class GoalComponent {
  gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

  goalForm!: FormGroup;
  goals: any;

  constructor(private fb: FormBuilder, private message: NzMessageService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.goalForm = this.fb.group({
      description: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
    });
    this.getAllGoals();
  }

  submitGoalForm(){
    this.userService.postGoal(this.goalForm.value).subscribe(res => {
      this.message.success("Goal posted successfully!", { nzDuration: 5000 });
      this.goalForm.reset();
      this.getAllGoals();
    }, error => {
      this.message.error("Error while posting goal!", { nzDuration: 5000 });
    })
  }

  getAllGoals(){
    this.userService.getGoals().subscribe(res => {
      this.goals = res;
    })
  }

  updateGoalStatus(id: number){
    this.userService.updateGoalStatus(id).subscribe(res => {
      this.message.success("Goal updated successfully!", { nzDuration: 5000 });
      this.getAllGoals();
    }, error => {
      this.message.error("Error while updating goal.", { nzDuration: 5000 });
    })
  }
}
