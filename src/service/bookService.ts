// ===================== Import Interface Definitions ===================== ต้องประกาศ type ก่อน object เสมอ
import type {
  Book
} from '../models/book';

// ===================== Sample Data =====================


// ===================== Helper Functions =====================
// import * as repo from '../repository/bookRepository'; เปลี่ยนไปใช้ repository/bookRepositoryDb แทน 
// import * as repo from '../repository/bookRepositoryDb'; เปลี่ยนไปใช้ repository/bookRepositoryPrisma แทน
import * as repo from '../repository/bookRepositoryPrisma';

export function getBookByCategory(category:string){
  return repo.getBookByCategory(category);
}

export function getBookByTitle(title:string){
  return repo.getBookByTitle(title);
}

export function getAllBooks(){ 
  // return repo.getAllBooks();
  return repo.getAllBookWithAuthor();
}

export function getBookById(id : number){ 
  return repo.getBookById(id)
}

export function addBook(newBook : Book){ 
  return repo.addBook(newBook); 
} 

export function getAllAuthors(){
  return repo.getAllAuthors()
}

export function getAllMembers(){
  return repo.getAllMembers()
}

export function getAllBorrowingHistory(){
  return repo.getAllBorrowingHistory()
}

export function getAllBorrowedBooks(){
  return repo.getAllBorrowedBooks()
}

export function getMemberById(id: number){
  return repo.getMemberById(id)
}

export function getBorrowingHistoryByMemberId(memberId: number){
  return repo.getBorrowingHistoryByMemberId(memberId)
}

export function getBorrowedBooksByBorrowingId(borrowingId: number){
  return repo.getBorrowedBooksByBorrowingId(borrowingId)
}

  