import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private apiUrl = 'http://localhost:9191/api/customers/all';

    constructor() { }

    getAllCustomers() {
        return axios.get(this.apiUrl);
    }
}
