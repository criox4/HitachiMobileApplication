import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent {
  simNumber: string = '';
  serviceNumber: string = '';
  alertMessage: string | null = null;
  alertClass: string = '';
  offers: any[] = [];

  async validateSim(): Promise<void> {
    if (!this.isValidSimNumber(this.simNumber) || !this.isValidServiceNumber(this.serviceNumber)) {
      this.alertMessage = 'Invalid details, please check again Subscriber Identity Module (SIM)number/Service number!';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      this.clearAlertAfterTimeout();
      return;
    }

    try {
      const response = await this.validateWithFallback();

      if (response.data === 'Subscriber Identity Module (SIM)already active') {
        this.alertMessage = 'Subscriber Identity Module (SIM)already active';
        this.alertClass = 'bg-orange-500 text-white px-4 py-2 rounded';
      } else {
        this.offers = Array.isArray(response.data) ? response.data : [response.data];
        this.alertMessage = null;
        this.alertClass = '';
      }
    } catch (error) {
      console.error('Error occurred while fetching special offers:', error);
      this.alertMessage = 'An unexpected error occurred';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
    }

    this.clearAlertAfterTimeout();
  }

  private async validateWithFallback() {
    try {
      return await axios.post('http://localhost:8083/api/offers/special-offers', {
        simNumber: this.simNumber,
        serviceNumber: this.serviceNumber
      });
    } catch (error) {
      return await axios.post('http://localhost:9191/api/offers/special-offers', {
        simNumber: this.simNumber,
        serviceNumber: this.serviceNumber
      });
    }
  }

  private isValidSimNumber(simNumber: string): boolean {
    const simNumberPattern = /^\d{12}$/;
    return simNumberPattern.test(simNumber);
  }

  private isValidServiceNumber(serviceNumber: string): boolean {
    const serviceNumberPattern = /^\d{10}$/;
    return serviceNumberPattern.test(serviceNumber);
  }

  closeAlert(): void {
    this.alertMessage = null;
    this.alertClass = '';
  }

  private clearAlertAfterTimeout(): void {
    setTimeout(() => {
      this.closeAlert();
    }, 5000);
  }
}
