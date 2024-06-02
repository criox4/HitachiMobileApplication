import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-validate-id-proof',
  templateUrl: './validate-id-proof.component.html',
  styleUrls: ['./validate-id-proof.component.css']
})
export class ValidateIdProofComponent {
  uniqueIdNumber: string = '';
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';
  alertMessage: string | null = null;
  alertClass: string = '';

  async validateIdProof(): Promise<void> {
    if (!this.uniqueIdNumber || !this.firstName || !this.lastName || !this.dateOfBirth) {
      this.alertMessage = 'All fields are required';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      this.clearAlertAfterTimeout();
      return;
    }

    if (!this.isValidUniqueIdNumber(this.uniqueIdNumber)) {
      this.alertMessage = 'Id should be 16 digits';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      this.clearAlertAfterTimeout();
      return;
    }

    if (!this.isValidName(this.firstName) || !this.isValidName(this.lastName)) {
      this.alertMessage = 'Invalid details';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      this.clearAlertAfterTimeout();
      return;
    }

    try {
      const response = await this.validateWithFallback();

      if (response.data === 'Customer details matched successfully') {
        this.alertMessage = 'Customer details matched successfully';
        this.alertClass = 'bg-green-500 text-white px-4 py-2 rounded';
      } else {
        this.alertMessage = 'Customer Not Found';
        this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
      }
    } catch (error) {
      console.error('Error occurred while validating ID proof:', error);
      this.alertMessage = 'An unexpected error occurred';
      this.alertClass = 'bg-red-500 text-white px-4 py-2 rounded';
    }

    this.clearAlertAfterTimeout();
  }

  private async validateWithFallback() {
    try {
      return await axios.put('http://localhost:8081/api/customers/proof-validation', {
        uniqueIdNumber: this.uniqueIdNumber,
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth
      });
    } catch (error) {
      return await axios.put('http://localhost:9191/api/customers/proof-validation', {
        uniqueIdNumber: this.uniqueIdNumber,
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth
      });
    }
  }

  private isValidUniqueIdNumber(id: string): boolean {
    const idPattern = /^\d{16}$/;
    return idPattern.test(id);
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
