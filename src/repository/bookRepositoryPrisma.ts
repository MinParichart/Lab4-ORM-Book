import { PrismaClient } from '@prisma/client';
import type { Book } from '../models/book';

const prisma = new PrismaClient();

// ปรับประเภทของ Book ให้รองรับ author
type BookWithAuthor = Book & {
  author: {
    first_name: string;
    last_name: string;
  } | null;
};

// Define the Author type
type Author = {
  id: number;
  first_name: string;
  last_name: string;
  affiliation: string; // Add any other required fields
};

// export function getBookByCategory(category: string){
//   return prisma.book.findMany({
//     where: { category },
//   });
// }
export function getBookByCategory(category: string): Promise<BookWithAuthor[]> {
  return prisma.book.findMany({
    where: { category },
    include: { author: true }, // รวมข้อมูลผู้เขียน
  });
}

// export function getBookByTitle(title: string){
//   return prisma.book.findMany({
//     where: { title },
//   });
// }
export function getBookByTitle(title: string): Promise<BookWithAuthor[]> {
  return prisma.book.findMany({
    where: { title },
    include: { author: true }, // รวมข้อมูลผู้เขียน
  });
}

// export function getAllBooks(){
//   return prisma.book.findMany();
// }
export function getAllBooks(): Promise<BookWithAuthor[]> {
  return prisma.book.findMany({
    include: { author: true }, // รวมข้อมูลผู้เขียน
  });
}

export function getBookById(id: number) {
  return prisma.book.findUnique({
    where: { id },
    // include : { author : true},
    include : { // เรียกเฉพาะ first_name, last_name Author เท่านั้น
      author  :{ 
        select : { 
          first_name : true, 
          last_name : true
        }
      }
    }

  });
}

export function addBook(newBook: Book){
  if (!newBook.author || !newBook.author.id) {
    throw new Error("Author information is missing");
  }
  return prisma.book.create({
    data: {
      title: newBook.title,
      isbn: newBook.isbn,
      category: newBook.category,
      author: {
        connect: { id: newBook.author.id },
      },
    },
  });
}

export function getAllAuthors(){
  return prisma.author.findMany();
}

export function getAllMembers(){
  return prisma.member.findMany();
}

export function getAllBorrowingHistory() {
  return prisma.borrowingHistory.findMany();
}

export function getAllBorrowedBooks() {
  return prisma.borrowedBook.findMany();
}

export function getMemberById(id: number){
  return prisma.member.findUnique({
    where: { id },
  });
}

export function getBorrowingHistoryByMemberId(memberId: number) {
  return prisma.borrowingHistory.findMany({
    where: { member_id: memberId },
  });
}

export function getBorrowedBooksByBorrowingId(borrowingId: number) {
  return prisma.borrowedBook.findMany({
    where: { borrowing_id: borrowingId },
  });
}

export function getAllBookWithAuthor() {
    return prisma.book.findMany({
      // include: { author: true }, // ออกมาทุกอย่างที่เกี่ยวกับ author
      include : { // เรียกเฉพาะ first_name, last_name Author เท่านั้น
        author  :{ 
          select : { 
            first_name : true, 
            last_name : true
          }
        }
      }
    });
  }