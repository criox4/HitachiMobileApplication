import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private apiUrl = 'http://localhost:8081/api/customers/all';

    constructor() { }

    getAllCustomers() {
        return axios.get(this.apiUrl);
    }
}
