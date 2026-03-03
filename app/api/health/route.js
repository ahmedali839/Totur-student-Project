// app/api/health/route.js
// Basic health check endpoint — confirms API routes are working

export async function GET() {
  return Response.json({ status: "ok", timestamp: new Date().toISOString() });
}
