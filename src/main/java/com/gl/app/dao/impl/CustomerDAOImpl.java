package com.gl.app.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.gl.app.dao.CustomerDAO;
import com.gl.app.entity.Customer;
import com.gl.app.entity.SIMDetails;
import com.gl.app.exception.CustomerDoesNotExistException;
import com.gl.app.exception.CustomerTableEmptyException;
import com.gl.app.util.HitachiUtil;

public class CustomerDAOImpl implements CustomerDAO{

	Connection con = null;
	@Override
	 public String updateCustomerAddress(Long customerId, String newAddress) throws CustomerDoesNotExistException {
     
        
		// Write code to update customer address
		return null;
    }

	@Override
	public List<Customer> getAllCustomers() throws CustomerTableEmptyException {
	   // Write code to fetch all customers
		return null;
	}

	@Override

	public List<SIMDetails> fetchSIMDetails(Long customerId) {
	    
	    return null;
	}
}
