import Users from "@/models/Users";
import db from "@/libs/db/db";
import { hashPassword } from "@/libs/hashedPassword";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userName, email, password } = await req.json();
  try {
    await db.connect();

    const exisitUser = await Users.findOne({ email }, { password: false });

    if (exisitUser) {
      return NextResponse.json(
        { message: "User already exists", isEmailInDb: true },
        { status: 401 }
      );
    }

    const passwordHashed = await hashPassword(password);

    const newUser = new Users({
      userName,
      email,
      password: passwordHashed,
    });

    await newUser.save();

    await db.disconnect();

    return NextResponse.json(
      {
        message: "Account has been successfully registered",
        isEmailInDb: false,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
