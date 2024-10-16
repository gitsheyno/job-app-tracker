import { randomUUID } from "crypto";
import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text, unique } from "drizzle-orm/sqlite-core";

const id = () =>
  text("id")
    .primaryKey()
    .$default(() => randomUUID());

const createdAt = () =>
  text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull();

const date = (name: string) => text(name);

const boolean = (field: string) => integer(field, { mode: "boolean" });

// User table schema
export const users = sqliteTable("user", {
  userId: integer("userId").primaryKey(),
  username: text("username").notNull(),
  password: text("password").notNull(),
});

// Application table schema
export const application = sqliteTable("application", {
  id: integer("id").primaryKey(),
  stage: text("stage").notNull(),
  company: text("company").notNull(),
  position: text("position").notNull(),
  link: text("link").notNull(),
  userId: integer("userId")
    .references(() => users.userId)
    .notNull(), // Foreign key referencing userId from user table
});
