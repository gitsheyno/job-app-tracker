import "server-only";
import jwt from "jsonwebtoken";
import { db } from "@/db/db";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";
import bcrypt from "bcrypt";

const SECRET = "use_an_ENV_VAR";

export const createTokenForUser = (userId: number) => {
  const token = jwt.sign({ id: userId }, SECRET);
  return token;
};

export const getUserFromToken = async (token: {
  name: string;
  value: string;
}) => {
  const payload = jwt.verify(token.value, SECRET) as { userId: number };

  const user = await db.query.users.findFirst({
    where: eq(users.userId, payload.userId),
    columns: {
      userId: true,
      username: true,
    },
  });

  return user;
};

export const signin = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const match = await db.query.users.findFirst({
    where: eq(users.username, username),
  });

  if (!match) throw new Error("invalid user");

  const correctPW = await comparePW(password, match.password);

  if (!correctPW) {
    throw new Error("invalud user");
  }

  const token = createTokenForUser(match.userId);
  const { password: pw, ...user } = match;

  return { user, token };
};

export const signup = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const hashedPW = await hashPW(password);
  const rows = await db
    .insert(users)
    .values({ username, password: hashedPW })
    .returning({
      id: users.userId,
      username: users.username,
    });

  const user = rows[0];
  const token = createTokenForUser(user.id);

  return { user, token };
};

export const hashPW = (password: string) => {
  return bcrypt.hash(password, 10);
};

export const comparePW = (password: string, hashedPW: string) => {
  return bcrypt.compare(password, hashedPW);
};
