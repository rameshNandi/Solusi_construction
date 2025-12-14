export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate data
    if (!data.email || !data.fullName || !data.password) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically save to database
    // For now, just return success
    return Response.json({
      success: true,
      message: "Account created successfully",
      user: {
        email: data.email,
        fullName: data.fullName,
      },
    })
  } catch (error) {
    return Response.json({ error: "Failed to create account" }, { status: 500 })
  }
}
