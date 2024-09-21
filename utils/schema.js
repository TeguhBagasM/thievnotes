import { pgTable, serial, varchar,integer } from "drizzle-orm/pg-core";

export const Ideas = pgTable('ideas', {
    id:serial('id').primaryKey(),
    content:varchar('content').notNull(),
    username:varchar('username').notNull(),
    vote:integer('vote').default(0),
    createdAt:varchar('createdAt').notNull()
})