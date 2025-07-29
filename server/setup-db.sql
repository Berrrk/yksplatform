-- YKS Platform Database Setup
-- Run this script to create the database and tables

-- Create database (run this separately if needed)
-- CREATE DATABASE yksplatform;

-- Connect to the database and run the following:

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    target TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on username for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);

-- Insert a sample user (password: 'password123')
-- INSERT INTO users (username, password, target) VALUES 
-- ('demo', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Complete the YKS exam with high scores');

-- Grant permissions (adjust as needed)
-- GRANT ALL PRIVILEGES ON TABLE users TO your_username;
-- GRANT USAGE, SELECT ON SEQUENCE users_id_seq TO your_username; 