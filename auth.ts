import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const {handler, auth, signIn, signOut} = NextAuth({
  providers: [GitHub],
})