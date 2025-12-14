import { blogPosts } from "@/lib/blog-data"

export async function GET() {
  return Response.json(blogPosts)
}
