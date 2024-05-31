package com.gl.app.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.concurrent.atomic.AtomicInteger;

public class HitachiUtil {
    private static final String URL = "jdbc:postgresql://gl-capstone-pradhan-personal1.d.aivencloud.com:19269/hitachi?ssl=require";
    private static final String USER = "avnadmin";
    private static final String PASSWORD = "AVNS_r24ZqTpxfmGZPYky15q";
    static AtomicInteger counter = new AtomicInteger();

    public static Connection getConnection() {
        try {
            return DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (SQLException e) {
            throw new RuntimeException("Error connecting to the database", e);
        }
    }    public int generateUniqueId(String columnName, String tableName, int initialValue) {

        return 0;
    }


}
