import connection from "../db";
import type {
  Author,
  Book,
  BorrowedBook,
  BorrowingHistory,
  Member,
} from '../models/book';

// ===================== Helper Functions =====================
export async function getBookByCategory(category: string): Promise<Book[]> {
  const [rows] = await connection.execute('SELECT * FROM books WHERE category = ?', [category]);
  return rows as Book[];
}

export async function getBookByTitle(title: string): Promise<Book[]> {
  const [rows] = await connection.execute('SELECT * FROM books WHERE title = ?', [title]);
  return rows as Book[];
}


export async function getAllBooks(): Promise<Book[]> {
  const [rows] = await connection.execute('SELECT * FROM books');
  return rows as Book[];
}

export async function getBookById(id: number): Promise<Book | undefined> {
  const [rows] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]);
  return (rows as Book[])[0];
}

export async function addBook(newBook: Book): Promise<Book> {
  const [result] = await connection.execute(
    'INSERT INTO books (title, isbn, category, author) VALUES (?, ?, ?, ?)',
    [newBook.title, newBook.isbn ,newBook.category, newBook.author]
  );
  newBook.id = (result as any).insertId;
  return newBook;
}

export async function getAllAuthors(): Promise<Author[]> {
  const [rows] = await connection.execute('SELECT * FROM authors');
  return rows as Author[];
}

export async function getAllMembers(): Promise<Member[]> {
  const [rows] = await connection.execute('SELECT * FROM members');
  return rows as Member[];
}

export async function getAllBorrowingHistory(): Promise<BorrowingHistory[]> {
  const [rows] = await connection.execute('SELECT * FROM borrowing_history');
  return rows as BorrowingHistory[];
}

export async function getAllBorrowedBooks(): Promise<BorrowedBook[]> {
  const [rows] = await connection.execute('SELECT * FROM borrowed_books');
  return rows as BorrowedBook[];
}

export async function getMemberById(id: number): Promise<Member | undefined> {
  const [rows] = await connection.execute('SELECT * FROM members WHERE id = ?', [id]);
  return (rows as Member[])[0];
}

export async function getBorrowingHistoryByMemberId(memberId: number): Promise<BorrowingHistory[]> {
  const [rows] = await connection.execute('SELECT * FROM borrowing_history WHERE member_id = ?', [memberId]);
  return rows as BorrowingHistory[];
}

export async function getBorrowedBooksByBorrowingId(borrowingId: number): Promise<BorrowedBook[]> {
  const [rows] = await connection.execute('SELECT * FROM borrowed_books WHERE borrowing_id = ?', [borrowingId]);
  return rows as BorrowedBook[];
}
