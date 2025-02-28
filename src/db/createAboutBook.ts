// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// export async function createBooks() {
//   const books = [
//       {
//         title: "Atomic Habits",
//         isbn: 101,
//         category: "Self-Improvement",
//         author: { connect: { id: 1 } }
//       },
//       {
//         title: "Clean Code",
//         isbn: 102,
//         category: "Technology",
//         author: { connect: { id: 2 } }
//       },
//       {
//         title: "Sapiens: A Brief History of Humankind",
//         isbn: 103,
//         category: "History",
//         author: { connect: { id: 3 } }
//       },
//       {
//         title: "The Pragmatic Programmer",
//         isbn: 104,
//         category: "Technology",
//         author: { connect: { id: 2 } }
//       },
//       {
//         title: "Deep Work",
//         isbn: 105,
//         category: "Productivity",
//         author: { connect: { id: 1 } }
//       }
//   ];
//   for (const book of books) {
//     await prisma.book.create({
//       data: {
//         title: book.title,
//         isbn: book.isbn,
//         category: book.category,
//         author: {
//           connect: {
//             id: book.author.connect.id,
//           },
//         },
//       },
//     });
// }
//   console.log("Database has been initialized with books.");
// }

// export async function createAuthors() {
//   const authors = [
//     {
//       first_name: "James",
//       last_name: "Clear",
//       affiliation: "Self-Improvement Publications"
//     },
//     {
//       first_name: "Robert",
//       last_name: "C. Martin",
//       affiliation: "Software Engineering Press"
//     },
//     {
//       first_name: "Yuval Noah",
//       last_name: "Harari",
//       affiliation: "History and Anthropology Research"
//     }
//     ];

//   for (const author of authors) {
//     await prisma.author.create({ data: author });
//   }
//   console.log("Authors have been added.");

//   // ส่วนของการเพิ่ม Author ใน ตาราง Author
//   const markAuthor = await prisma.author.create({
//     data: {
//       first_name: 'Mark',
//       last_name : 'Chirt',
//       affiliation : 'BUS'
//     }
//   })
//   console.log("Created Mark Author:", markAuthor);

//   const phuAuthor = await prisma.author.create({
//     data: {
//       first_name: 'Phu',
//       last_name : 'Thachai',
//       affiliation : 'BUS'
//     }
//   })

//   const ThaiAuthor = await prisma.author.create({
//     data: {
//       first_name: 'Thai',
//       last_name : 'Smith',
//       affiliation : 'BUS'
//     }
//   })

// // const responseBooks = await prisma.book.findMany();
// // console.log("Response Books:", responseBooks);

// // await prisma.book.update({
// //   where : { id : responseBooks[0].id},
// //   data : {
// //     author : {
// //       connect : { id : markAuthor.id }
// //     },
// //   },
// // });

// // const responseBooks2 = await prisma.book.findMany({
// //   include : {
// //     author : true
// //   },
// // });
// // console.log((responseBooks2));
// // ตรวจสอบว่ามีผู้เขียนในฐานข้อมูลหรือไม่

// console.log("Database has been initialized with books.");
// }

// export async function createMembers() {
//   const members = [
//     {
//       first_name: "Alice",
//       last_name: "Brown",
//       phone_number: "123-456-7890"
//     },
//     {
//       first_name: "Bob",
//       last_name: "Smith",
//       phone_number: "234-567-8901"
//     }
//     ];

//   for (const member of members) {
//     await prisma.member.create({ data: member });
//   }
//   console.log("Members have been added.");
// }

// export async function createBorrowingHistory() {
//   const borrowings = [
//     {
//       member_id: 1,
//       borrow_date: new Date("2024-02-01"),
//       return_due_date: new Date("2024-02-15")
//     },
//     {
//       member_id: 2,
//       borrow_date: new Date("2024-02-05"),
//       return_due_date: new Date("2024-02-19")
//     }

//     ];

//   for (const borrowing of borrowings) {
//     await prisma.borrowingHistory.create({ data: borrowing });
//   }
//   console.log("Borrowing history has been added.");
// }

// export async function createBorrowedBooks() {
//   const borrowedBooks = [
//     {
//       borrowing_id: 1,
//       book_id: 1,
//       actual_return_date:new Date("2024-02-14")
//     },
//     {
//       borrowing_id: 2,
//       book_id: 2,
//       actual_return_date: null
//     }
//     ];

//   for (const borrowedBook of borrowedBooks) {
//     await prisma.borrowedBook.create({ data: borrowedBook });
//   }
//   console.log("Borrowed books have been added.");
// }

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createAuthors() {
  const authors = [
    {
      first_name: "James",
      last_name: "Clear",
      affiliation: "Self-Improvement Publications",
    },
    {
      first_name: "Robert",
      last_name: "C. Martin",
      affiliation: "Software Engineering Press",
    },
    {
      first_name: "Yuval Noah",
      last_name: "Harari",
      affiliation: "History and Anthropology Research",
    },
  ];

  for (const author of authors) {
    await prisma.author.create({ data: author });
  }
  console.log("Authors have been added.");

  // ส่วนของการเพิ่ม Author ใน ตาราง Author
  const markAuthor = await prisma.author.create({
    data: {
      first_name: "Mark",
      last_name: "Chirt",
      affiliation: "BUS",
    },
  });
  console.log("Created Mark Author:", markAuthor);

  const phuAuthor = await prisma.author.create({
    data: {
      first_name: "Phu",
      last_name: "Thachai",
      affiliation: "BUS",
    },
  });
  console.log("Created Phu Author:", phuAuthor);

  const ThaiAuthor = await prisma.author.create({
    data: {
      first_name: "Thai",
      last_name: "Smith",
      affiliation: "BUS",
    },
  });
  console.log("Created Thai Author:", ThaiAuthor);

  // const responseBooks = await prisma.book.findMany();
  // console.log("Response Books:", responseBooks);

  // await prisma.book.update({
  //   where : { id : responseBooks[0].id},
  //   data : {
  //     author : {
  //       connect : { id : markAuthor.id }
  //     },
  //   },
  // });

  // const responseBooks2 = await prisma.book.findMany({
  //   include : {
  //     author : true
  //   },
  // });
  // console.log((responseBooks2));
  // ตรวจสอบว่ามีผู้เขียนในฐานข้อมูลหรือไม่

  // for (const author of authors) {
    //   await prisma.author.create({ data: author });
    // }
    // console.log("Authors have been added.");
    
    console.log("Database has been initialized with books.");
}

export async function createBooks() {
  const books = [
    {
      title: "Atomic Habits",
      isbn: 101,
      category: "Self-Improvement",
      author: { connect: { id: 1 } }, // เชื่อมโยงกับผู้เขียนที่มี id: 1
    },
    {
      title: "Clean Code",
      isbn: 102,
      category: "Technology",
      author: { connect: { id: 2 } }, // เชื่อมโยงกับผู้เขียนที่มี id: 2
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      isbn: 103,
      category: "History",
      author: { connect: { id: 3 } }, // เชื่อมโยงกับผู้เขียนที่มี id: 3
    },
    {
      title: "The Pragmatic Programmer",
      isbn: 104,
      category: "Technology",
      author: { connect: { id: 2 } }, // เชื่อมโยงกับผู้เขียนที่มี id: 2
    },
    {
      title: "Deep Work",
      isbn: 105,
      category: "Productivity",
      author: { connect: { id: 1 } }, // เชื่อมโยงกับผู้เขียนที่มี id: 1
    },
  ];

  for (const book of books) {
    await prisma.book.create({
      data: {
        title: book.title,
        isbn: book.isbn,
        category: book.category,
        author: book.author,
      },
    });
  }
  console.log("Books have been added.");
}

export async function createMembers() {
  const members = [
    {
      first_name: "Alice",
      last_name: "Brown",
      phone_number: "123-456-7890",
    },
    {
      first_name: "Bob",
      last_name: "Smith",
      phone_number: "234-567-8901",
    },
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
      return_due_date: new Date("2024-02-15"),
    },
    {
      member_id: 2,
      borrow_date: new Date("2024-02-05"),
      return_due_date: new Date("2024-02-19"),
    },
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
      actual_return_date: new Date("2024-02-14"),
    },
    {
      borrowing_id: 2,
      book_id: 2,
      actual_return_date: null,
    },
  ];

  for (const borrowedBook of borrowedBooks) {
    await prisma.borrowedBook.create({ data: borrowedBook });
  }
  console.log("Borrowed books have been added.");
}

export async function initializeDatabase() {
  try {
    // สร้างผู้เขียนก่อน
    await createAuthors();

    // ตรวจสอบว่ามีผู้เขียนในฐานข้อมูลหรือไม่
    const authors = await prisma.author.findMany();
    console.log("Authors in database:", authors);

    // สร้างหนังสือหลังจากมีผู้เขียน
    await createBooks();

    // ดึงข้อมูลหนังสือเพื่อตรวจสอบ
    const responseBooks = await prisma.book.findMany();
    console.log("Response Books:", responseBooks);

    if (responseBooks.length > 0) {
      // ดึงข้อมูลผู้เขียนที่ชื่อ "Mark"
      const markAuthor = await prisma.author.findFirst({
        where: { first_name: "Mark" },
      });

      if (markAuthor) {
        // อัปเดตหนังสือเล่มแรกให้เชื่อมโยงกับผู้เขียนที่ชื่อ "Mark"
        await prisma.book.update({
          where: { id: responseBooks[0].id },
          data: {
            author: {
              connect: { id: markAuthor.id },
            },
          },
        });

        // ดึงข้อมูลหนังสือพร้อมผู้เขียน
        const responseBooks2 = await prisma.book.findMany({
          include: {
            author: true,
          },
        });
        console.log("Updated Books with Authors:", responseBooks2);
      } else {
        console.log("Mark author not found in the database.");
      }
    } else {
      console.log("No books found in the database.");
    }

    // สร้างสมาชิกและประวัติการยืม
    await createMembers();
    await createBorrowingHistory();
    await createBorrowedBooks();

    console.log("Database has been initialized successfully.");
  } catch (error) {
    console.error("Error initializing database:", error);
  } finally {
    await prisma.$disconnect(); // ปิดการเชื่อมต่อ Prisma Client
  }
}
