import express, { Request, Response } from "express";

const app = express();
const port = 3005;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Sample Data
const authors: Author[] = [
  { id: 1, first_name: "James", last_name: "Clear", affiliation: "Self-Improvement Publications" },
  { id: 2, first_name: "Robert", last_name: "C. Martin", affiliation: "Software Engineering Press" },
  { id: 3, first_name: "Yuval Noah", last_name: "Harari", affiliation: "History and Anthropology Research" },
];

const books: Book[] = [
  { id: 1, title: "Atomic Habits", isbn: 101, category: "Self-Improvement", author: "James Clear" },
  { id: 2, title: "Clean Code", isbn: 102, category: "Technology", author: "Robert C. Martin" },
  { id: 3, title: "Sapiens: A Brief History of Humankind", isbn: 103, category: "History", author: "Yuval Noah Harari" },
  { id: 4, title: "The Pragmatic Programmer", isbn: 104, category: "Technology", author: "Andrew Hunt" },
  { id: 5, title: "Deep Work", isbn: 105, category: "Productivity", author: "Cal Newport" },
];

const members: Member[] = [
  { id: 1, first_name: "Alice", last_name: "Brown", phone_number: "123-456-7890" },
  { id: 2, first_name: "Bob", last_name: "Smith", phone_number: "234-567-8901" },
];

const borrowingHistory: BorrowingHistory[] = [
  { id: 1, member_id: 1, borrow_date: new Date("2024-02-01"), return_due_date: new Date("2024-02-15") },
  { id: 2, member_id: 2, borrow_date: new Date("2024-02-05"), return_due_date: new Date("2024-02-19") },
];

const borrowedBooks: BorrowedBook[] = [
  { id: 1, borrowing_id: 1, book_id: 1, actual_return_date: new Date("2024-02-14") },
  { id: 2, borrowing_id: 2, book_id: 2, actual_return_date: undefined },
];

// API Routes
app.get("/authors", (req: Request, res: Response) => {
  res.json(authors);
});

app.get("/books", (req: Request, res: Response) => {
  res.json(books);
});

app.get("/members", (req: Request, res: Response) => {
  res.json(members);
});

app.get("/borrowing-history", (req: Request, res: Response) => {
  res.json(borrowingHistory);
});

app.get("/borrowed-books", (req: Request, res: Response) => {
  res.json(borrowedBooks);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// Interface Definitions
interface Book {
  id: number;
  title: string;
  isbn: number;
  category: string;
  author: string;
}

interface Author {
  id: number;
  first_name: string;
  last_name: string;
  affiliation: string;
}

interface Member {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
}

interface BorrowingHistory {
  id: number;
  member_id: number;
  borrow_date: Date;
  return_due_date: Date;
}

interface BorrowedBook {
  id: number;
  borrowing_id: number;
  book_id: number;
  actual_return_date?: Date;
}