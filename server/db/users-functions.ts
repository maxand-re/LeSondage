import { eq } from 'drizzle-orm'
import { db } from './db'
import { user } from './schemas/users'
import type { DiscordProfileDetails } from '~/types/discord'

export async function registerUser(userProfile: DiscordProfileDetails, userNickname: string | undefined) {
  const insertedUser = await db
    .insert(user)
    .values({
      name: userProfile.global_name,
      nickname: userNickname,
      image: userProfile.image_url,
      email: userProfile.email,
    })
    .onConflictDoUpdate({
      target: user.email,
      set: {
        name: userProfile.global_name,
        nickname: userNickname,
        image: userProfile.image_url,
      },
    })
    .returning()
    .execute()

  return insertedUser[0]
}

export async function getUserByEmail(email: string) {
  const foundUser = await db
    .select()
    .from(user)
    .where(eq(user.email, email))
    .execute()
  return foundUser[0]
}
