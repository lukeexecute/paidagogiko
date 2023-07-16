import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import { SessionInterface } from "@/common.types";
import { connectMongoDB } from "./mongodb";
import UserProfile from "@/models/userProfile";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  theme: {
    colorScheme: "light",
    logo: "/pklogo.svg",
  },
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ user }: { user: AdapterUser | User }) {
      const { name, email } = user;
      console.log(user);
      try {
        await connectMongoDB();
        const userExists = await UserProfile.findOne({ email });
        if (userExists) {
          return true;
        } else {
          return false;
        }
        // if (!userExists) {
        //   const res = await fetch("http://localhost:3000/api/user", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       name,
        //       email,
        //     }),
        //   });
        // }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

export async function getCurrentUser() {
  const session = (await getServerSession(authOptions)) as SessionInterface;

  return session;
}
