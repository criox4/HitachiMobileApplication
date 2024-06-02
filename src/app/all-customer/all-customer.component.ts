import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import axios from 'axios';

interface Customer {
  id?: string;
  dateOfBirth: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city?: string;
  pinCode?: string;
  state?: string;
}

@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.css']
})
export class AllCustomerComponent implements OnInit {
  customers: Customer[] = [];
  showModal = false;
  selectedCustomer: Customer | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getAllCustomers()
      .then(response => {
        this.customers = response.data;
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  openEditModal(customer: Customer): void {
    this.selectedCustomer = { ...customer }; // Create a copy of the customer
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedCustomer = null;
  }

  updateCustomer(): void {
    if (this.selectedCustomer) {
      axios.put(`http://localhost:8081/api/customers/address-update/id/${this.selectedCustomer.id}`, {
        address: this.selectedCustomer.address,
        city: this.selectedCustomer.city,
        pinCode: this.selectedCustomer.pinCode,
        state: this.selectedCustomer.state
      })
      .then(response => {
        // Update the customer in the local list
        const index = this.customers.findIndex(c => c.id === this.selectedCustomer?.id);
        if (index !== -1 && this.selectedCustomer) {
          this.customers[index] = { 
            ...this.customers[index],
            address: this.selectedCustomer.address,
            city: this.selectedCustomer.city,
            pinCode: this.selectedCustomer.pinCode,
            state: this.selectedCustomer.state
          };
        }
        this.closeModal();
      })
      .catch(error => {
        console.error('There was an error updating the customer!', error);
      });
    }
  }
}
