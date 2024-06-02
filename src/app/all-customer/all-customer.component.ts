import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  editForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      address: ['', [Validators.required, Validators.maxLength(25)]],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      pinCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      state: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]]
    });
  }

  ngOnInit(): void {
    axios.get('http://localhost:8081/api/customers/all')
      .then(response => {
        this.customers = response.data;
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  openEditModal(customer: Customer): void {
    this.selectedCustomer = { ...customer }; // Create a copy of the customer
    this.editForm.setValue({
      address: customer.address || '',
      city: customer.city || '',
      pinCode: customer.pinCode || '',
      state: customer.state || ''
    });
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedCustomer = null;
  }

  updateCustomer(): void {
    if (this.editForm.invalid) {
      return;
    }

    if (this.selectedCustomer) {
      const updatedCustomer = {
        ...this.selectedCustomer,
        ...this.editForm.value
      };

      axios.put(`http://localhost:8081/api/customers/address-update/id/${this.selectedCustomer.id}`, updatedCustomer)
        .then(response => {
          // Update the customer in the local list
          const index = this.customers.findIndex(c => c.id === this.selectedCustomer?.id);
          if (index !== -1) {
            this.customers[index] = updatedCustomer;
          }
          this.closeModal();
        })
        .catch(error => {
          console.error('There was an error updating the customer!', error);
        });
    }
  }
}
