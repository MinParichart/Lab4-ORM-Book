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
import * as repo from '../repository/bookRepository';

export function getBookByCategory(category:string) :  Promise<Book []> {
  return repo.getBookByCategory(category);
}

export function getBookByTitle(title:string) : Promise<Book []> {
  return repo.getBookByTitle(title);
}

// done
export function getAllBooks() : Promise<Book []> { 
  return repo.getAllBooks();
}

export function getBookById(id : number) : Promise<Book | undefined> { 
  return repo.getBookById(id)
}

// done
export function addBook(newBook : Book) : Promise<Book> { 
  return repo.addBook(newBook); 
} 

export function getAllAuthors(): Promise<Author[]> {
  return repo.getAllAuthors()
}

export function getAllMembers(): Promise<Member[]> {
  return repo.getAllMembers()
}

export function getAllBorrowingHistory(): Promise<BorrowingHistory[]> {
  return repo.getAllBorrowingHistory()
}

export function getAllBorrowedBooks(): Promise<BorrowedBook[]> {
  return repo.getAllBorrowedBooks()
}

export function getMemberById(id: number): Promise<Member | undefined> {
  return repo.getMemberById(id)
}

export function getBorrowingHistoryByMemberId(memberId: number): Promise<BorrowingHistory[]> {
  return repo.getBorrowingHistoryByMemberId(memberId)
}

export function getBorrowedBooksByBorrowingId(borrowingId: number): Promise<BorrowedBook[]> {
  return repo.getBorrowedBooksByBorrowingId(borrowingId)
}

  