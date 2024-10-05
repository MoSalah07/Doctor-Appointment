import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db/db";
import Users from "@/models/Users";
import bcrypt from "bcryptjs";

export const authOptions = {
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "Mo Salah" },
        email: {
          label: "email",
          type: "email",
          placeholder: "moSalahadmin@gmail.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize({ password, email }) {
        await db.connect();
        const user = await Users.findOne({ email });
        if (!user) {
          throw new Error(`User Is Not Found Please Try Again`);
        }

        const comparePass = await bcrypt.compare(password, user.password);

        if (!comparePass) {
          throw new Error(`Passwords do not match`);
        } else {
          const { password, ...currentUser } = user._doc;

          return {
            ...currentUser,
          };
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token._id = user._id;
        token.userName = user.userName;
        token.email = user.email;
      }

      return token;
    },

    session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.role = token.role;
        session.user.userName = token.userName;
        session.user.email = token.email;
        // session.user.token = token;
      }
      return session;
    },
  },
};
