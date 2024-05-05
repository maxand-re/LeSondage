import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'
import { battlePoll, battlePollOption, battlePollVotes } from './schemas/games/battle-poll'
import { user } from './schemas/users'

const sqlite = new Database('sqlite.db')
export const db = drizzle(sqlite, {
  schema: {
    ...battlePoll,
    ...battlePollOption,
    ...battlePollVotes,
    ...user,
  },
})
