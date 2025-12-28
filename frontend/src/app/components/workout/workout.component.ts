import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-workout',
  imports: [SharedModule],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
})
export class WorkoutComponent {
  gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

  workoutForm!: FormGroup;

  listOfType: any[] = [
    'Cardio',
    'Strength',
    'Flexibility',
    'HIIT',
    'Pilates',
    'Dance',
    'Swimming',
    'Cycling',
    'Running',
    'Walking',
    'Boxing',
    'CrossFit',
    'Rowing',
    'Stretching',
    'Martial Arts',
    'Gymnastics',
    'Climbing',
    'Plyometrics',
  ];

  constructor (private fb: FormBuilder,
    private userService: UserService,
    private message: NzMessageService,
  ) {

  }

  ngOnInit() {
    this.workoutForm = this.fb.group({
      type: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      date: [null, [Validators.required]],
      caloriesBurned: [null, [Validators.required]]
    })
  }

  submitWorkoutForm() {
    this.userService.postWorkout(this.workoutForm.value).subscribe(res => {
      this.message.success("Workout posted successfully!", { nzDuration: 5000 });
      this.workoutForm.reset();
    }, error => {
      this.message.error("Error while posting workout!", { nzDuration: 5000 });
    })
  }
}
