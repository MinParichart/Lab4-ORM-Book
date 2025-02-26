import express, { Request, Response } from "express";

const app = express();
const port = 3005;
app.use(express.json()); // ต้องใส่

// Interface Definitions ต้องประกาศ type ก่อน object เสมอ
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

// Sample Data
const authors: Author[] = [
  {
    id: 1,
    first_name: "James",
    last_name: "Clear",
    affiliation: "Self-Improvement Publications",
  },
  {
    id: 2,
    first_name: "Robert",
    last_name: "C. Martin",
    affiliation: "Software Engineering Press",
  },
  {
    id: 3,
    first_name: "Yuval Noah",
    last_name: "Harari",
    affiliation: "History and Anthropology Research",
  },
];

const books: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    isbn: 101,
    category: "Self-Improvement",
    author: "James Clear",
  },
  {
    id: 2,
    title: "Clean Code",
    isbn: 102,
    category: "Technology",
    author: "Robert C. Martin",
  },
  {
    id: 3,
    title: "Sapiens: A Brief History of Humankind",
    isbn: 103,
    category: "History",
    author: "Yuval Noah Harari",
  },
  {
    id: 4,
    title: "The Pragmatic Programmer",
    isbn: 104,
    category: "Technology",
    author: "Andrew Hunt",
  },
  {
    id: 5,
    title: "Deep Work",
    isbn: 105,
    category: "Productivity",
    author: "Cal Newport",
  },
];

const members: Member[] = [
  {
    id: 1,
    first_name: "Alice",
    last_name: "Brown",
    phone_number: "123-456-7890",
  },
  {
    id: 2,
    first_name: "Bob",
    last_name: "Smith",
    phone_number: "234-567-8901",
  },
];

const borrowingHistory: BorrowingHistory[] = [
  {
    id: 1,
    member_id: 1,
    borrow_date: new Date("2024-02-01"),
    return_due_date: new Date("2024-02-15"),
  },
  {
    id: 2,
    member_id: 2,
    borrow_date: new Date("2024-02-05"),
    return_due_date: new Date("2024-02-19"),
  },
];

const borrowedBooks: BorrowedBook[] = [
  {
    id: 1,
    borrowing_id: 1,
    book_id: 1,
    actual_return_date: new Date("2024-02-14"),
  },
  { id: 2, borrowing_id: 2, book_id: 2, actual_return_date: undefined },
];

function getBookByCategory(category:string) : Book [] {
  const filteredBooksCategory = books.filter((event) => event.category === category); 
  return filteredBooksCategory
}

function getBookByTitle(title:string) : Book [] {
  const filteredBooksTitle = books.filter((event) => event.title === title); 
  return filteredBooksTitle
}

function getAllBooks() : Book [] { 
  return books; 
}

function getBookById(id : number) : Book | undefined { 
  return books.find((book) => book.id === id); 
}

function addBook(newBook : Book) : Book { 
  newBook.id = books.length + 1; 
  books.push(newBook); 
  return newBook; 
} 

// API Routes

// แบบที่ยังไม่เอา function มาใส่ 
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World!");
// });

// app.get("/authors", (req: Request, res: Response) => {
//   res.json(authors);
// });

// app.get("/books", (req: Request, res: Response) => {
//   res.json(books);
// });

// app.get("/books", (req: Request, res: Response) => {
//   if (req.query.category){
//     const category = req.query.category;
//     const filteredBooks = books.filter((event) => event.category === category);
//     res.json(filteredBooks)
//   } else {
//     res.json(books)
//   }
// });

// app.get("/books", (req: Request, res: Response) => {
//   const category = req.query.category as string | undefined;
//   const title = req.query.title as string | undefined;
//   // ถ้าไม่มี query ใด ๆ ส่งมา ให้ส่งคืน books ทั้งหมดเลย
//   if (!category && !title) {
//     res.json(books);
//     return; // 🔹 เพิ่ม return เพื่อให้ TypeScript เข้าใจว่าฟังก์ชันจบที่นี่
//   }
//   let filteredBooks = books;
//   if (category) {
//     filteredBooks = filteredBooks.filter(
//       (book) => book.category.toLowerCase() === category.toLowerCase()
//     );
//   }
//   if (title) {
//     filteredBooks = filteredBooks.filter((book) =>
//       book.title.toLowerCase().includes(title.toLowerCase())
//     );
//   }
//   res.json(filteredBooks);
// });

// app.get("/books/:id", (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   const book = books.find((book) => book.id === id);
//   if (book) {
//     res.json(book);
//   } else {
//     res.status(404).send("Book not found");
//   }
// });

// app.get("/members", (req: Request, res: Response) => {
//   res.json(members);
// });

// app.get("/borrowing-history", (req: Request, res: Response) => {
//   res.json(borrowingHistory);
// });

// app.get("/borrowed-books", (req: Request, res: Response) => {
//   res.json(borrowedBooks);
// });

// app.post("/books", (req, res) => {
//   const newBook: Book = req.body;
//   newBook.id = books.length + 1;
//   books.push(newBook);
//   res.json(newBook);
// });

// แบบที่เอา function มาใส่ 
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/authors", (req: Request, res: Response) => {
  res.json(authors);
});

app.get("/books", (req: Request, res: Response) => {
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


app.get("/books/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = getBookById(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
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

app.post("/books", (req, res) => {
  const newBook: Book = req.body;
  addBook(newBook); 
  res.json(newBook);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

