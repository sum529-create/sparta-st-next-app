export interface Intro {
  description1: string;
  description2: string;
  description3: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: number;
}

export interface BlogItem {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: number;
  tags: string[];
}

export interface TodoItem {
  id: string;
  title: string;
  contents: string;
  isCompleted: boolean;
  imgPath: string;
  createdAt: number;
}

export interface Data {
  intro: Intro;
  news: NewsItem[];
  blogs: BlogItem[];
  todos: TodoItem[];
}
