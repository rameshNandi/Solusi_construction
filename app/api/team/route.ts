import { teamMembers } from "@/lib/team-data"

export async function GET() {
  return Response.json(teamMembers)
}
