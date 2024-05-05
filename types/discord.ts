export interface DiscordGuild {
  id: string
  name: string
  icon: string
}

export interface DiscordUserProfile {
  id: string
  name: string
  email: string
  image: string
}
export interface DiscordAccountDetails {
  provider: string
  type: string
  providerAccountId: string
  token_type: string
  access_token: string
  expires_at: number
  refresh_token: string
  scope: string
}
export interface DiscordProfileDetails {
  id: string
  username: string
  avatar: string
  discriminator: string
  public_flags: number
  flags: number
  accent_color: number
  global_name: string
  banner_color: string
  mfa_enabled: boolean
  locale: string
  premium_type: number
  email: string
  verified: boolean
  image_url: string
}
export interface signInDetails {
  user: DiscordUserProfile
  account: DiscordAccountDetails
  profile: DiscordProfileDetails
}
export interface DiscordGuildMember {
  avatar: string | null
  communication_disabled_until: string | null
  flags: number
  joined_at: string
  nick: string | null
  pending: boolean
  premium_since: string | null
  roles: string[]
  user: DiscordProfileDetails
  mute: boolean
  deaf: boolean
  bio: string
}
