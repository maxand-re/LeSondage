import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const user = sqliteTable('user', {
  id: integer('id').primaryKey(),
  name: text('name'),
  nickname: text('nickname'),
  image: text('avatar'),
  email: text('email').unique(),
})
