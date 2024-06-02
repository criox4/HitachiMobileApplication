import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-validate-customer-details',
  templateUrl: './validate-customer-details.component.html',
  styleUrls: ['./validate-customer-details.component.css']
})
export class ValidateCustomerDetailsComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  confirmEmail: string = '';
  alertMessage: string | null = null;
  alertClass: string = '';

  async validateCustomerDetails(): Promise<void> {
    if (!this.firstName || !this.lastName || !this.email || !this.confirmEmail) {
      this.alertMessage = 'All fields are required';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      this.clearAlertAfterTimeout();
      return;
    }

    if (!this.isValidName(this.firstName) || !this.isValidName(this.lastName)) {
      this.alertMessage = 'Firstname/Lastname should be a maximum of 15 characters';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      this.clearAlertAfterTimeout();
      return;
    }

    if (this.email !== this.confirmEmail) {
      this.alertMessage = 'Invalid email details!!';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      this.clearAlertAfterTimeout();
      return;
    }

    try {
      const response = await this.validateWithFallback();

      if (response.data === 'Customer Validated Successfully!') {
        this.alertMessage = 'Customer Validated Successfully!';
        this.alertClass = 'bg-green-500 text-white px-4 py-2 rounded';
      } else {
        this.alertMessage = 'No customer found for the provided details';
        this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      }
    } catch (error) {
      console.error('Error occurred while validating customer details:', error);
      this.alertMessage = 'An unexpected error occurred';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
    }

    this.clearAlertAfterTimeout();
  }

  private async validateWithFallback() {
    try {
      return await axios.post('http://localhost:8081/api/customers/email-validation', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      });
    } catch (error) {
      return await axios.post('http://localhost:9191/api/customers/email-validation', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      });
    }
  }

  private isValidName(name: string): boolean {
    const namePattern = /^[A-Za-z]{1,15}$/;
    return namePattern.test(name);
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
