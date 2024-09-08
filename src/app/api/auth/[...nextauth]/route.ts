import nextAuth from "next-auth";

export const handler = nextAuth({
  providers: [],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
});

export { handler as GET, handler as POST };
