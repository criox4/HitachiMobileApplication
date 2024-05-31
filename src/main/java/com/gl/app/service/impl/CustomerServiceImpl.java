package com.gl.app.service.impl;
import com.gl.app.dao.*;
import com.gl.app.entity.*;
import com.gl.app.dao.impl.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.List;
import java.util.stream.Collectors;
import java.util.ArrayList;
import com.gl.app.util.*;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.gl.app.exception.CustomerDoesNotExistException;
import com.gl.app.exception.CustomerTableEmptyException;
import com.gl.app.service.CustomerService;

public class CustomerServiceImpl implements CustomerService {
	CustomerDAO customerDAO = new CustomerDAOImpl();
	
	public List<SIMDetails> fetchCustomerList(Long customerId) {
		// TODO Auto-generated method stub
		return null;
			        
	}

	@Override
	 public String updateCustomerAddress(Long customerId, String city) throws CustomerDoesNotExistException {
        return null;
    }

	@Override
	public List<Customer> getAllCustomers() throws CustomerTableEmptyException {
		return null;
	    	}
	
}
