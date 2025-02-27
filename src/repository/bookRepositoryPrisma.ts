import { PrismaClient } from '@prisma/client';
import type { Book } from '../models/book';

const prisma = new PrismaClient();

export function getBookByCategory(category: string){
  return prisma.book.findMany({
    where: { category },
  });
}

export function getBookByTitle(title: string){
  return prisma.book.findMany({
    where: { title },
  });
}

export function getAllBooks(){
  return prisma.book.findMany();
}

export function getBookById(id: number){
  return prisma.book.findUnique({
    where: { id },
  });
}

export function addBook(newBook: Book){
  return prisma.book.create({
    data: {
      title: newBook.title,
      isbn: newBook.isbn,
      category: newBook.category,
      author: newBook.author,
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