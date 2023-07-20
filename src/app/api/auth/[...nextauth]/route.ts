import { db } from "@/lib/db"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth, { NextAuthOptions, getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.email = token.email
        session.user.name = token.name
      }
      return session
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })
      if (!dbUser) {
        token.id = user!.id
        return token
      }
      if (!dbUser.name) {
        await db.user.update({
          where: {
            id: dbUser.id,
          },
          data: {
            name: user.name,
          },
        })
      }
      return dbUser
    },
    redirect() {
      return "/"
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

export const getAuthSession = () => getServerSession(authOptions)
