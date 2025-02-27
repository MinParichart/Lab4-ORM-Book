import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function createBooks() {
  const books = [
      {
        title: "Atomic Habits", 
        isbn: 101, 
        category: "Self-Improvement", 
        author: "James Clear" 
      },
      {
        title: "Clean Code", 
        isbn: 102, 
        category: "Technology", 
        author: "Robert C. Martin" 
      },
      { 
        title: "Sapiens: A Brief History of Humankind", 
        isbn: 103, 
        category: "History", 
        author: "Yuval Noah Harari" 
      },
      {
        title: "The Pragmatic Programmer", 
        isbn: 104, 
        category: "Technology", 
        author: "Andrew Hunt" 
      },
      {
        title: "Deep Work", 
        isbn: 105, 
        category: "Productivity", 
        author: "Cal Newport" 
      }
  ];
    for (const book of books) {
        await prisma.book.create({
          data: {
            title: book.title,
            isbn: book.isbn,
            category: book.category,
            author: book.author
          }
        })
}
  console.log("Database has been initialized with books.");
}

export async function createAuthors() {
  const authors = [
    {
      first_name: "James", 
      last_name: "Clear", 
      affiliation: "Self-Improvement Publications" 
    },
    {
      first_name: "Robert", 
      last_name: "C. Martin", 
      affiliation: "Software Engineering Press" 
    },
    {
      first_name: "Yuval Noah", 
      last_name: "Harari", 
      affiliation: "History and Anthropology Research" 
    }
    ];

  for (const author of authors) {
    await prisma.author.create({ data: author });
  }
  console.log("Authors have been added.");
}

export async function createMembers() {
  const members = [
    {
      first_name: "Alice", 
      last_name: "Brown", 
      phone_number: "123-456-7890" 
    },
    {
      first_name: "Bob", 
      last_name: "Smith", 
      phone_number: "234-567-8901" 
    }
    ];

  for (const member of members) {
    await prisma.member.create({ data: member });
  }
  console.log("Members have been added.");
}

export async function createBorrowingHistory() {
  const borrowings = [
    { 
      member_id: 1, 
      borrow_date: new Date("2024-02-01"), 
      return_due_date: new Date("2024-02-15")
    },
    {
      member_id: 2, 
      borrow_date: new Date("2024-02-05"), 
      return_due_date: new Date("2024-02-19")
    }

    ];

  for (const borrowing of borrowings) {
    await prisma.borrowingHistory.create({ data: borrowing });
  }
  console.log("Borrowing history has been added.");
}

export async function createBorrowedBooks() {
  const borrowedBooks = [
    {
      borrowing_id: 1, 
      book_id: 1, 
      actual_return_date:new Date("2024-02-14")
    },
    {
      borrowing_id: 2, 
      book_id: 2, 
      actual_return_date: null 
    }
    ];

  for (const borrowedBook of borrowedBooks) {
    await prisma.borrowedBook.create({ data: borrowedBook });
  }
  console.log("Borrowed books have been added.");
}

