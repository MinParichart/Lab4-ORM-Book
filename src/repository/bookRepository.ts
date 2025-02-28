// ===================== Import Type - Interface Definitions ===================== ต้องประกาศ type ก่อน object เสมอ

import type {
  Author,
  Book,
  BorrowedBook,
  BorrowingHistory,
  Member,
} from '../models/book';

// ===================== Sample Data =====================
const authors: Author[] = [
  { id: 1, first_name: "James", last_name: "Clear", affiliation: "Self-Improvement Publications" },
  { id: 2, first_name: "Robert", last_name: "C. Martin", affiliation: "Software Engineering Press" },
  { id: 3, first_name: "Yuval Noah", last_name: "Harari", affiliation: "History and Anthropology Research" },
];

const books: Book[] = [
  { id: 1, title: "Atomic Habits", isbn: 101, category: "Self-Improvement", author: authors[0] },
  { id: 2, title: "Clean Code", isbn: 102, category: "Technology", author: authors[1] },
  { id: 3, title: "Sapiens: A Brief History of Humankind", isbn: 103, category: "History", author: authors[2] },
  { id: 4, title: "The Pragmatic Programmer", isbn: 104, category: "Technology", author: { id: 4, first_name: "Andrew", last_name: "Hunt", affiliation: "Software Engineering Press" } },
  { id: 5, title: "Deep Work", isbn: 105, category: "Productivity", author: { id: 5, first_name: "Cal", last_name: "Newport", affiliation: "Productivity Publications" } },
];

const members: Member[] = [
  { id: 1, first_name: "Alice", last_name: "Brown", phone_number: "123-456-7890" },
  { id: 2, first_name: "Bob", last_name: "Smith", phone_number: "234-567-8901" },
];

const borrowingHistory: BorrowingHistory[] = [
  { id: 1, member_id: 1, borrow_date: new Date("2024-02-01"), return_due_date: new Date("2024-02-15") },
  { id: 2, member_id: 2, borrow_date: new Date("2024-02-05"), return_due_date: new Date("2024-02-19") },
];

const borrowedBooks: BorrowedBook[] = [ // เก็บข้อมูลหนังสือที่ถูกยืม 
  { id: 1, borrowing_id: 1, book_id: 1, actual_return_date: new Date("2024-02-14") }, // คืนหนังสือมาวันที่ 2024-02-14
  { id: 2, borrowing_id: 2, book_id: 2, actual_return_date: undefined }, // undefined คือยังไม่คืน
];

// ===================== Helper Functions =====================
export function getBookByCategory(category:string) :  Promise<Book []> {
  const filteredBooksCategory = books.filter((event) => event.category === category); 
  return Promise.resolve(filteredBooksCategory)
}


export function getBookByTitle(title:string) : Promise<Book []> {
  const filteredBooksTitle = books.filter((event) => event.title === title); 
  return Promise.resolve(filteredBooksTitle)
}


export function getAllBooks() : Promise<Book []> { 
  return Promise.resolve(books); 
}

export function getBookById(id : number) : Promise<Book | undefined> { 
  return Promise.resolve(books.find((book) => book.id === id)); 
}

export function addBook(newBook : Book) : Promise<Book> { 
  newBook.id = books.length + 1; 
  books.push(newBook); 
  return Promise.resolve(newBook); 
} 

export function getAllAuthors(): Promise<Author[]> {
  return Promise.resolve(authors);
}

export function getAllMembers(): Promise<Member[]> {
  return Promise.resolve(members);
}

export function getAllBorrowingHistory(): Promise<BorrowingHistory[]> {
  return Promise.resolve(borrowingHistory);
}

export function getAllBorrowedBooks(): Promise<BorrowedBook[]> {
  return Promise.resolve(borrowedBooks);
}

export function getMemberById(id: number): Promise<Member | undefined> {
  return Promise.resolve(members.find((member) => member.id === id));
}

export function getBorrowingHistoryByMemberId(memberId: number): Promise<BorrowingHistory[]> {
  return Promise.resolve(borrowingHistory.filter((history) => history.member_id === memberId));
}

export function getBorrowedBooksByBorrowingId(borrowingId: number): Promise<BorrowedBook[]> {
  return Promise.resolve(borrowedBooks.filter((book) => book.borrowing_id === borrowingId));
}
