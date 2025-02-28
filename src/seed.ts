// import { PrismaClient } from '@prisma/client';
// import {
//   createAuthors,
//   createBooks,
//   createBorrowedBooks,
//   createBorrowingHistory,
//   createMembers
// } from './db/createAboutBook';

// const prisma = new PrismaClient();

// async function initializeDatabase() {
//   try {
//     await Promise.all([
//       createBooks(),
//       createAuthors(),
//       createMembers(),
//       createBorrowingHistory(),
//       createBorrowedBooks(),
//     ]);
//     console.log("Database initialized successfully.");
//   } catch (e) {
//     console.error("Error initializing database:", e);
//     process.exit(1);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// initializeDatabase();

// seed.ts
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
    await createAuthors(); // สร้าง authors ก่อน
    await createMembers();
    await createBorrowingHistory();
    await createBorrowedBooks();
    await createBooks(); // สร้าง books หลัง authors
    console.log("Database initialized successfully.");
  } catch (e) {
    console.error("Error initializing database:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

initializeDatabase();