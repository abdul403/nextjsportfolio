import Post from "@component/models/Post";
import connectDb from "@component/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connectDb();

    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("databse Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connectDb();

    await Post.findByIdAndDelete(id);
    return new NextResponse("post Deleted Successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("databse Error", { status: 500 });
  }
};
