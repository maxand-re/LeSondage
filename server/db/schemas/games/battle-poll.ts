import { sql } from 'drizzle-orm'
import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core'
import { user } from '../users'

export const battlePoll = sqliteTable('battle_poll', {
  id: integer('id').primaryKey(),
  name: text('name'),
  description: text('description'),
  prize: text('prize'),
  start_time: integer('start_time').default(sql`(CURRENT_TIME)`),
  start_date: integer('start_date').default(sql`(CURRENT_DATE)`),
  end_time: integer('end_time'),
  end_date: integer('end_date'),
  number_of_votes_per_user: integer('number_of_votes_per_user'),
}, battlePoll => ({
  options: uniqueIndex('optionsIdx').on(battlePoll.id),
}),
)

export const battlePollOption = sqliteTable('battle_poll_option', {
  id: integer('id').primaryKey(),
  name: text('name'),
  image: text('image'),
  elo: integer('elo').default(1000),
  vote_count: integer('vote_count').default(0),

  battle_poll_id: integer('poll_id').notNull().references(() => battlePoll.id),
})

export const battlePollVotes = sqliteTable('battle_poll_votes', {
  id: integer('id').primaryKey(),
  user_id: integer('user_id').notNull().references(() => user.id),
  battle_poll_id: integer('battle_poll_id').notNull().references(() => battlePoll.id),
  votes: integer('votes').notNull().default(0),
})
