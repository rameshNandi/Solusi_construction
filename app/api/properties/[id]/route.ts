import { properties } from "@/lib/properties-data"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = properties.find((p) => p.id === Number.parseInt(id))

  if (!property) {
    return Response.json({ error: "Property not found" }, { status: 404 })
  }

  return Response.json(property)
}
