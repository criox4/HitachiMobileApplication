package com.gl.app.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.gl.app.dao.SIMDetailsDAO;
import com.gl.app.entity.SIMDetails;
import com.gl.app.exception.SIMDoesNotExistsException;
import com.gl.app.util.HitachiUtil;

public class SIMDetailsDAOImpl implements SIMDetailsDAO{
HitachiUtil hitachiUtil = new HitachiUtil();
	
	
	@Override
	public List<SIMDetails> fetchSIMDetailsWithActiveStatus() {
		
		// Write code to fetch SIM details with active status
	        return null;
	    }


	@Override
	 public String getSimStatus(long simNumber, long serviceNumber) throws SIMDoesNotExistsException {
           // Write code to get SIM status
		return null;
    }
	

	
}
