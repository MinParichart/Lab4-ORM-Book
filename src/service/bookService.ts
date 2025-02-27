// ===================== Import Interface Definitions ===================== ต้องประกาศ type ก่อน object เสมอ
import type {
  Author,
  Book,
  BorrowedBook,
  BorrowingHistory,
  Member,
} from '../models/book';

// ===================== Sample Data =====================


// ===================== Helper Functions =====================
import {
  addBook as addNewBook,
  getAllAuthors as allAuthors,
  getAllBooks as allBooks,
  getAllBorrowedBooks as allBorrowedBooks,
  getAllBorrowingHistory as allBorrowingHistory,
  getAllMembers as allMembers,
  getBookByCategory as bookByCategory,
  getBookById as bookById,
  getBookByTitle as bookByTitle,
  getBorrowedBooksByBorrowingId as borrowedBooksByBorrowingI,
  getBorrowingHistoryByMemberId as borrowingHistoryByMemberId,
  getMemberById as memberById
} from '../repository/bookRepository';


export function getBookByCategory(category:string) :  Promise<Book []> {
  return bookByCategory(category);
}

export function getBookByTitle(title:string) : Promise<Book []> {
  return bookByTitle(title);
}

// done
export function getAllBooks() : Promise<Book []> { 
  return allBooks();
}

export function getBookById(id : number) : Promise<Book | undefined> { 
  return bookById(id)
}

// done
export function addBook(newBook : Book) : Promise<Book> { 
  return addNewBook(newBook); 
} 

export function getAllAuthors(): Promise<Author[]> {
  return allAuthors()
}

export function getAllMembers(): Promise<Member[]> {
  return allMembers()
}

export function getAllBorrowingHistory(): Promise<BorrowingHistory[]> {
  return allBorrowingHistory()
}

export function getAllBorrowedBooks(): Promise<BorrowedBook[]> {
  return allBorrowedBooks()
}

export function getMemberById(id: number): Promise<Member | undefined> {
  return memberById(id)
}

export function getBorrowingHistoryByMemberId(memberId: number): Promise<BorrowingHistory[]> {
  return borrowingHistoryByMemberId(memberId)
}

export function getBorrowedBooksByBorrowingId(borrowingId: number): Promise<BorrowedBook[]> {
  return borrowedBooksByBorrowingI(borrowingId)
}

  