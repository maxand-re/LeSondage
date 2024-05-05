import DiscordProvider from 'next-auth/providers/discord'
import { NuxtAuthHandler } from '#auth'
import { getUserByEmail, registerUser } from '~/server/db/users-functions'
import type { DiscordGuild, DiscordGuildMember, DiscordProfileDetails } from '~/types/discord'

async function checkIfDiscordAccountIsAllowed(token: string): Promise<DiscordGuild | undefined> {
  const response = await fetch('https://discord.com/api/users/@me/guilds', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) throw new Error(`Failed to fetch user guilds: ${response.statusText}`)

  const json: DiscordGuild[] = await response.json()
  return json.find(guild => guild.id === process.env.OAUTH_AUTHORIZED_DISCORD_GUILD)
}

async function getDiscordGuildNickname(token: string, guildId: string): Promise<string | undefined> {
  const response = await fetch(`https://discord.com/api/users/@me/guilds/${guildId}/member`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) throw new Error(`Failed to fetch user guilds: ${response.statusText}`)

  const json: DiscordGuildMember = await response.json()
  return json.nick || json.user.username
}

export default NuxtAuthHandler({
  secret: process.env.OAUTH_NUXT_SECRET,
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      const userGuild = await checkIfDiscordAccountIsAllowed(account?.access_token || '')
      if (!userGuild) {
        throw new Error(`User is not a member of the authorized Discord server (${JSON.stringify(user, null, 2)})`)
      }

      if (!profile) {
        throw new Error(`No profile found for user ${user.email}`)
      }
      const userNickname = await getDiscordGuildNickname(account?.access_token || '', userGuild.id)
      const registeredUser = await registerUser(profile as DiscordProfileDetails, userNickname)
      console.info(`Logged user: ${JSON.stringify(registeredUser)}`)

      return true
    },
    async session({ session }) {
      if (session.user) {
        if (!session.user.email) {
          throw new Error(`No email found for user ${session.user.name}`)
        }

        const user = await getUserByEmail(session.user.email)
        // @ts-expect-error: Custom property
        session.user.account_name = session.user.name
        // @ts-expect-error: Custom property
        session.user.nickname = user.nickname
        session.user.name = user.name
      }

      return session
    },
  },
  providers: [
    DiscordProvider({
      clientId: process.env.OAUTH_DISCORD_CLIENT_ID!,
      clientSecret: process.env.OAUTH_DISCORD_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'identify email guilds guilds.members.read',
        },
      },
      allowDangerousEmailAccountLinking: true,
    }),
  ],
})
