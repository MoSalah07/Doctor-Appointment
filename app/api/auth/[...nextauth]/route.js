import NextAuth from "next-auth";
import { authOptions } from "@/auth/auth";

// const handler = (req, res) => NextAuth(req, res, authOptions);

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
