import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  resume = {
    name: '',
    jobTitle: '',
    profile: '',
    location: '',
    phone: '',
    email: '',
    website: '',
    experience:'',
    education:'',
    skills:'',
    tools:'',
    language:'',
    interest:''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  editResume() {
    this.submitted = false;
  }
}
