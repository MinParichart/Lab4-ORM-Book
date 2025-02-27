// ===================== Interface Definitions ===================== ต้องประกาศ type ก่อน object เสมอ
export interface Book {
  id: number;
  title: string;
  isbn: number;
  category: string;
  author: string;
}

export interface Author {
  id: number;
  first_name: string;
  last_name: string;
  affiliation: string;
}

export interface Member {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
}

export interface BorrowingHistory {
  id: number;
  member_id: number;
  borrow_date: Date;
  return_due_date: Date;
}

export interface BorrowedBook {
  id: number;
  borrowing_id: number;
  book_id: number;
  actual_return_date?: Date;
}
