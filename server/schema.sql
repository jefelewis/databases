CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  users_id VARCHAR(20),
  room VARCHAR(20),
  message VARCHAR(140)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20)
);

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20)
);


/*  Execute this file from the command line by typing:
 *    mysql -u -p student < server/schema.sql
 *  to create the database and the tables.*/

