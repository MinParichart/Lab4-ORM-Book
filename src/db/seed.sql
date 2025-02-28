INSERT INTO authors (id, first_name, last_name, affiliation) VALUES
( 1,  "James", "Clear",  "Self-Improvement Publications" ),
( 2, "Robert", "C. Martin", "Software Engineering Press" ),
( 3, "Yuval Noah", "Harari", "History and Anthropology Research" );

INSERT INTO books (id, title, isbn, category, author) VALUES
(1, "Atomic Habits", 101,  "Self-Improvement", 1 ),
(2, "Clean Code", 102,  "Technology", 2 ),
(3, "Sapiens: A Brief History of Humankind", 103,  3 ),
(4, "The Pragmatic Programmer", 104,  "Technology", 2 ),
(5, "Deep Work", 105,  "Productivity", 1 );

INSERT INTO members (id, first_name, last_name, phone_number) VALUES
(1, "Alice", "Brown", "123-456-7890" ),
(2, "Bob", "Smith", "234-567-8901" );

INSERT INTO borrowingHistory (id, member_id, borrow_date, return_due_date) VALUES
(1, 1, '2024-02-01', '2024-02-15'),
(2, 2, '2024-02-05', '2024-02-19');

INSERT INTO borrowedBooks (id, borrowing_id, book_id, actual_return_date) VALUES
( 1, 1, 1, '2024-02-14'),
( 2, 2, 2, Null );



