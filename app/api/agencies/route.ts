import { agencies } from "@/lib/agencies-data"

export async function GET() {
  return Response.json(agencies)
}
