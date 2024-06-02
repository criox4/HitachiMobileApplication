import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-validate-sim',
  templateUrl: './validate-sim.component.html',
  styleUrls: ['./validate-sim.component.css']
})
export class ValidateSimComponent {
  simNumber: string = '';
  serviceNumber: string = '';
  alertMessage: string | null = null;
  alertClass: string = '';

  async validateSim(): Promise<void> {
    try {
      const response = await axios.post('http://localhost:8083/api/simDetails/sim&service', {
        serviceNumber: this.serviceNumber,
        simNumber: this.simNumber
      });

      if (response.data === 'Valid Details , Welcome') {
        this.alertMessage = 'Valid Details, Welcome';
        this.alertClass = 'bg-green-500 text-white px-4 py-2 rounded';
      } else if (response.data === 'SIM already active') {
        this.alertMessage = 'SIM already active';
        this.alertClass = 'bg-orange-500 text-white px-4 py-2 rounded';
      } else {
        this.alertMessage = `Error: ${response.data.message}`;
        this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      }
      
      this.setAutoDismiss();
    } catch (error) {
      console.error('Error occurred while validating SIM:', error);
      this.alertMessage = 'An unexpected error occurred';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      this.setAutoDismiss();
    }
  }

  closeAlert(): void {
    this.alertMessage = null;
    this.alertClass = '';
  }

  setAutoDismiss(): void {
    setTimeout(() => {
      this.alertMessage = null;
      this.alertClass = '';
    }, 5000);
  }
}
