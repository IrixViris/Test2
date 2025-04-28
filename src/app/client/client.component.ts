import { Component } from '@angular/core';
import { Client } from '../models/client';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  imports: [CommonModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  clientList: Client[] = [
    {
      id: 1,
      name: 'Amy Abbott',
      email: 'amyabbott@email.com',
      phone: '123-56-7890',
      notes: 'High Risk',
    },
    {
      id: 2,
      name: 'Barry Bernard',
      email: 'bbernz@email.com',
      phone: '908-156-1356',
      notes: 'Internal referral',
    },
    {
      id: 3,
      name: 'Caroline Carr',
      email: 'mscarr@email.com',
      phone: '763-938-1235',
      notes: 'New business owner',
    },
    {
      id: 4,
      name: 'David Daniels',
      email: 'ddanny@email.com',
      phone: '757-135-2762',
      notes: 'Returning Client',
    },
    {
      id: 5,
      name: 'Emily Evans',
      email: 'emevs@email.com',
      phone: '546-185-3751',
      notes: 'High priority client',
    },
  ];

  client: Client = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    notes: '',
  };

  addClient() {
    if (this.client.name && this.client.email) {
      const newClient = { ...this.client, id: this.clientList.length + 1 };
      this.clientList.push(newClient);

      // Reset form
      this.client = { id: 0, name: '', email: '', phone: '', notes: '' };
    } else {
      alert('Please fill out all required fields.');
    }
  }


  deleteClient(currentClient: Client) {
    this.clientList = this.clientList.filter(c => c.id !== currentClient.id);
  }
}
