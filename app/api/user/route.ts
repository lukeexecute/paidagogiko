import { connectMongoDB } from "@/lib/mongodb";
import UserProfile from "@/models/userProfile";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await UserProfile.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
