import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-validate-customer',
  templateUrl: './validate-customer.component.html',
  styleUrls: ['./validate-customer.component.css']
})
export class ValidateCustomerComponent {
  email: string = '';
  dateOfBirth: string = '';
  alertMessage: string | null = null;
  alertClass: string = '';

  async validateCustomer(): Promise<void> {
    if (!this.email || !this.dateOfBirth) {
      this.alertMessage = 'Email/dob value is required';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      this.clearAlertAfterTimeout();
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.alertMessage = 'Invalid email';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      this.clearAlertAfterTimeout();
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/api/customers/customer-validation', {
        email: this.email,
        dateOfBirth: this.dateOfBirth // Keeping the format as YYYY-MM-DD
      });

      if (response.data === 'Customer Validated Successfully') {
        this.alertMessage = 'Customer Validated Successfully';
        this.alertClass = 'bg-green-500 text-white px-4 py-2 rounded';
      } else {
        this.alertMessage = 'Error: No request placed for you.';
        this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      }
    } catch (error) {
      console.error('Error occurred while validating customer:', error);
      this.alertMessage = 'An unexpected error occurred';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
    }

    this.clearAlertAfterTimeout();
  }

  private isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/;
    return emailPattern.test(email);
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
