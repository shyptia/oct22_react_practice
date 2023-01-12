export interface Product {
  id: number,
  name: string,
  categoryId: number,
}

export interface Category {
  id: number,
  title: string,
  icon: string,
  ownerId: number,
}

export interface User {
  id: number,
  name: string,
  sex: string,
}

export interface FullProduct extends Product {
  category: Category,
  user: User,
}
