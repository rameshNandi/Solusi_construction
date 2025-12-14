import { properties } from "@/lib/properties-data"

export async function GET() {
  return Response.json(properties)
}
