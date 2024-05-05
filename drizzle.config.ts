import type { Config } from 'drizzle-kit'

export default {
  schema: './server/db/schemas/**/*.ts',
  out: './drizzle',
  driver: 'libsql',
  dbCredentials: {
    url: 'file:./sqlite.db',
  },
} satisfies Config
