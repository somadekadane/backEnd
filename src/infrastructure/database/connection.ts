import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
 
dotenv.config();
 
export const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Escola',
  port: 3306
});