// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/github";
// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID ? process.env.AUTH_GOOGLE_ID : '',
//       clientSecret: process.env.AUTH_GOOGLE_SECRET ? process.env.AUTH_GOOGLE_SECRET : '',
//     }),
//     // ...add more providers here
//   ],
//   callbacks: {
//     async signIn({ account, profile }) {
//       if (account.provider === "google") {
//         return profile.email_verified && profile.email.endsWith("@example.com")
//       }
//       return true // Do different verification for other providers that don't have `email_verified`
//     },
//   }
// };
// export default NextAuth(authOptions);

// ./auth.ts
import { type NextAuthOptions, getServerSession  } from "next-auth"
// import Google from "next-auth/providers/google"
import GoogleProvider from "next-auth/providers/google";

// simplest form, env is auto-inferred from AUTH_GOOGLE_ID / AUTH_GOOGLE_SECRET
export const authOptions: NextAuthOptions = {
  providers: [GoogleProvider({
    clientId: process.env.AUTH_GOOGLE_ID!,
    clientSecret: process.env.AUTH_GOOGLE_SECRET!,
  })],
}
// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID ? process.env.AUTH_GOOGLE_ID : '',
//       clientSecret: process.env.AUTH_GOOGLE_SECRET ? process.env.AUTH_GOOGLE_SECRET : '',
//     }),
//   ],
//   // optional callbacks if you want to enrich the session
//   // callbacks: {
//   //   async session({ session, token }) {
//   //     if (token?.id) (session.user as any).id = token.id
//   //     return session
//   //   },
//   //   async jwt({ token, user }) {
//   //     if (user) token.id = (user as any).id
//   //     return token
//   //   },
//   // },
// })

export const auth = () => getServerSession(authOptions)
