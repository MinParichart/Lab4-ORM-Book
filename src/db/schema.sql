CREATE TABLE books ( 
  id INT PRIMARY KEY,
  title VARCHAR(255),
  isbn INT,
  category VARCHAR(255),
  author VARCHAR(255)
);

CREATE TABLE authors ( 
  id INT PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  affiliation VARCHAR(255)
);

CREATE TABLE members ( 
  id INT PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  phone_number VARCHAR(20)
);

CREATE TABLE borrowingHistory ( 
  id INT PRIMARY KEY,
  member_id INT,
  borrow_date DATE,
  return_due_date DATE
);

CREATE TABLE borrowedBooks ( 
  id INT PRIMARY KEY,
  borrowing_id INT,
  book_id INT,
  actual_return_date DATE
);


