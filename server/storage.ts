import { IStorage } from "./storage";
import type { BlogPost, InsertBlogPost, InsertUser, User } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private posts: Map<number, BlogPost>;
  sessionStore: session.Store;
  currentUserId: number;
  currentPostId: number;

  constructor() {
    this.users = new Map();
    this.posts = new Map();
    this.currentUserId = 1;
    this.currentPostId = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000,
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id, isAdmin: false };
    this.users.set(id, user);
    return user;
  }

  async getAllPosts(): Promise<BlogPost[]> {
    return Array.from(this.posts.values());
  }

  async createPost(post: InsertBlogPost & { authorId: number }): Promise<BlogPost> {
    const id = this.currentPostId++;
    const newPost: BlogPost = {
      ...post,
      id,
      createdAt: new Date(),
    };
    this.posts.set(id, newPost);
    return newPost;
  }

  async deletePost(id: number): Promise<void> {
    this.posts.delete(id);
  }
}

export const storage = new MemStorage();
