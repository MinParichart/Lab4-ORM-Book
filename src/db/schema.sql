CREATE TABLE authors (
  id          INT PRIMARY KEY AUTO_INCREMENT,
  first_name  VARCHAR(255) NOT NULL,
  last_name   VARCHAR(255) NOT NULL,
  affiliation VARCHAR(255)
);

CREATE TABLE books (
  id        INT PRIMARY KEY AUTO_INCREMENT,
  title     VARCHAR(255) NOT NULL,
  isbn      INT NOT NULL,
  category  VARCHAR(255) NOT NULL,
  autor     VARCHAR(255) NOT NULL,
  authorId  INT,
            FOREIGN KEY (authorId) REFERENCES authors(id) ON DELETE SET NULL
);

CREATE TABLE members (
  id            INT PRIMARY KEY AUTO_INCREMENT,
  first_name    VARCHAR(255) NOT NULL,
  last_name     VARCHAR(255) NOT NULL,
  phone_number  VARCHAR(20) NOT NULL
);

CREATE TABLE borrowingHistory (
  id              INT PRIMARY KEY AUTO_INCREMENT,
  member_id       INT,
  borrow_date     DATE NOT NULL,
  return_due_date DATE NOT NULL,
                  FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE
);

CREATE TABLE borrowedBooks (
  id                  INT PRIMARY KEY AUTO_INCREMENT,
  borrowing_id        INT,
  book_id             INT,
  actual_return_date  DATE,
                      FOREIGN KEY (borrowing_id) REFERENCES borrowingHistory(id) ON DELETE CASCADE,
                      FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
);


