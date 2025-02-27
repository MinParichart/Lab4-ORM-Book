import express, { Request, Response } from "express";
import type { Book } from './service/eventService';
import {
  addBook,
  getAllAuthors,
  getAllBooks,
  getAllBorrowedBooks,
  getAllBorrowingHistory,
  getAllMembers,
  getBookByCategory,
  getBookById,
  getBookByTitle,
  getBorrowedBooksByBorrowingId,
  getBorrowingHistoryByMemberId,
  getMemberById
} from './service/eventService';

const app = express();
const port = 3005;
app.use(express.json()); // ต้องใส่

// ===================== API Routes - Refactor Code to Function ===================== 
app.get("/", (req: Request, res: Response) => { // GET - http://localhost:3005
  res.send("Hello World!");
});

app.get("/authors", (req: Request, res: Response) => { // GET - http://localhost:3005/authors
  res.json(getAllAuthors());
});

app.get("/books", (req: Request, res: Response) => { // GET - http://localhost:3005/books
  const category = req.query.category as string | undefined;
  const title = req.query.title as string | undefined;
  // ถ้าไม่มี query ใด ๆ ส่งมา ให้ส่งคืน books ทั้งหมดเลย
  if (!category && !title) {
    res.json(getAllBooks()); // ถ้าไม่ส่ง category && title มาให้แสดง allBooks
    return; // 🔹 เพิ่ม return เพื่อให้ TypeScript เข้าใจว่าฟังก์ชันจบที่นี่
  }
  let filteredBooks = getAllBooks(); // set ค่า filteredBooks = getAllBooks() ก่อนตอนเริ่มต้น 
  if (category) {
    filteredBooks = getBookByCategory(category) // ถ้ามีส่ง query category มาให้  set ค่า filteredBooks = getBookByCategory(category) 
  }
  if (title) {
    filteredBooks = getBookByTitle(title) // ถ้ามีส่ง query title มาให้  set ค่า filteredBooks = getBookByTitle(title)
  }
  res.json(filteredBooks); // ถ้าเข้าเงื่อนไขไหน (category, title) ก็เอา filteredBooks ของอันไหนมาแสดง  
});


app.get("/books/:id", (req: Request, res: Response) => { // GET - http://localhost:3005/books/3
  const id = parseInt(req.params.id);
  const book = getBookById(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

app.get("/members", (req: Request, res: Response) => { // GET - http://localhost:3005/members
  res.json(getAllMembers());
});

app.get("/members/:id", (req: Request, res: Response) => { // GET - http://localhost:3005/members/2
  const id = parseInt(req.params.id);
  const member = getMemberById(id);
  if (member) {
    res.json(member);
  } else {
    res.status(404).send("Member not found");
  }
});

app.get("/borrowing-history", (req: Request, res: Response) => { // GET - http://localhost:3005/borrowing-history
  res.json(getAllBorrowingHistory());
});

app.get("/borrowing-history/member/:id", (req: Request, res: Response) => { // GET - http://localhost:3005/borrowing-history/member/2
  const memberId = parseInt(req.params.id);
  const history = getBorrowingHistoryByMemberId(memberId);
  res.json(history);
});

app.get("/borrowed-books", (req: Request, res: Response) => { // GET - http://localhost:3005/borrowed-books
  res.json(getAllBorrowedBooks());
});

app.get("/borrowed-books/borrowing/:id", (req: Request, res: Response) => { // GET - http://localhost:3005/borrowed-books/borrowing/1
  const borrowingId = parseInt(req.params.id);
  const books = getBorrowedBooksByBorrowingId(borrowingId);
  res.json(books);
});

app.post("/books", (req, res) => { // POST - http://localhost:3005/books
  const newBook: Book = req.body;
  addBook(newBook); 
  res.json(newBook);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

