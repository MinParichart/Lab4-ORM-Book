import express, { Request, Response } from "express";
import type { Book } from './models/book';
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
} from './repository/bookRepository';

const app = express();
const port = 3005;
app.use(express.json()); // ต้องใส่

// ===================== API Routes - Refactor Code to Function ===================== 
app.get("/",(req: Request, res: Response) => { // GET - http://localhost:3005
  res.send("Hello World!");
});

app.get("/authors", async (req: Request, res: Response) => { // GET - http://localhost:3005/authors
  res.json(await getAllAuthors());
});

app.get("/books", async (req: Request, res: Response) => { // GET - http://localhost:3005/books
  const category = req.query.category as string | undefined;
  const title = req.query.title as string | undefined;
  // ถ้าไม่มี query ใด ๆ ส่งมา ให้ส่งคืน books ทั้งหมดเลย
  if (!category && !title) {
    res.json(await getAllBooks()); // ถ้าไม่ส่ง category && title มาให้แสดง allBooks
    return; // 🔹 เพิ่ม return เพื่อให้ TypeScript เข้าใจว่าฟังก์ชันจบที่นี่
  }
  let filteredBooks = await getAllBooks(); // set ค่า filteredBooks = getAllBooks() ก่อนตอนเริ่มต้น 
  if (category) {
    filteredBooks = await getBookByCategory(category) // ถ้ามีส่ง query category มาให้  set ค่า filteredBooks = getBookByCategory(category) 
  }
  if (title) {
    filteredBooks = await getBookByTitle(title) // ถ้ามีส่ง query title มาให้  set ค่า filteredBooks = getBookByTitle(title)
  }
  res.json(filteredBooks); // ถ้าเข้าเงื่อนไขไหน (category, title) ก็เอา filteredBooks ของอันไหนมาแสดง  
});

app.get("/books/:id", async (req: Request, res: Response) => { // GET - http://localhost:3005/books/3
  const id = parseInt(req.params.id);
  const book = await getBookById(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

app.get("/members", async (req: Request, res: Response) => { // GET - http://localhost:3005/members
  res.json(await getAllMembers());
});

app.get("/members/:id", async (req: Request, res: Response) => { // GET - http://localhost:3005/members/2
  const id = parseInt(req.params.id);
  const member = await getMemberById(id);
  if (member) {
    res.json(member);
  } else {
    res.status(404).send("Member not found");
  }
});

app.get("/borrowing-history", async (req: Request, res: Response) => { // GET - http://localhost:3005/borrowing-history
  res.json(await getAllBorrowingHistory());
});

app.get("/borrowing-history/member/:id", async (req: Request, res: Response) => { // GET - http://localhost:3005/borrowing-history/member/2
  const memberId = parseInt(req.params.id);
  const history = await getBorrowingHistoryByMemberId(memberId);
  res.json(history);
});

app.get("/borrowed-books", async (req: Request, res: Response) => { // GET - http://localhost:3005/borrowed-books
  res.json(await getAllBorrowedBooks());
});

app.get("/borrowed-books/borrowing/:id", async (req: Request, res: Response) => { // GET - http://localhost:3005/borrowed-books/borrowing/1
  const borrowingId = parseInt(req.params.id);
  const books = await getBorrowedBooksByBorrowingId(borrowingId);
  res.json(books);
});

app.post("/books", async (req, res) => { // POST - http://localhost:3005/books
  const newBook: Book = req.body;
  await addBook(newBook); 
  res.json(newBook);
});

// ===================== Add Endpoint for Upload ที่ service.ts ===================== 
import multer from 'multer';
import { uploadFile } from './service/uploadFileService';
const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('file'), async (req: any, res: any) => {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).send('No file uploaded.');
      }

      const bucket = 'image_title_book';
      const filePath = `uploads_title_book`;
   
      const ouputUrl = await uploadFile(bucket, filePath, file)
  
      res.status(200).send(ouputUrl);
    } catch (error) {
      res.status(500).send('Error uploading file.');
    }
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

