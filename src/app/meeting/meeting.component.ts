import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent {
  meeting = {
    topic: '',
    participants: 0,
    datetime: '',
    notes: ''
  };

  scheduleMeeting() {
    console.log('Meeting Scheduled:', this.meeting);
    alert('Meeting has been scheduled!');
    this.meeting = { topic: '', participants: 0, datetime: '', notes: '' };
  }
}
