package com.gl.app.service;

import java.util.List;

import com.gl.app.entity.Customer;
import com.gl.app.entity.SIMDetails;
import com.gl.app.exception.CustomerDoesNotExistException;
import com.gl.app.exception.CustomerTableEmptyException;

public interface CustomerService {
	public List<SIMDetails> fetchCustomerList(Long customerId);  
	public String updateCustomerAddress(Long uniqueId, String newAddress) throws CustomerDoesNotExistException ;
	  public List<Customer> getAllCustomers() throws CustomerTableEmptyException;
}
