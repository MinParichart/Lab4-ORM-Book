import { PrismaClient } from '@prisma/client';
import {
  createAuthors,
  createBooks,
  createBorrowedBooks,
  createBorrowingHistory,
  createMembers
} from './db/createAboutBook';

const prisma = new PrismaClient();

async function initializeDatabase() {
  try {
    await Promise.all([
      createBooks(),
      createAuthors(),
      createMembers(),
      createBorrowingHistory(),
      createBorrowedBooks(),
    ]);
    console.log("Database initialized successfully.");
  } catch (e) {
    console.error("Error initializing database:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

initializeDatabase();