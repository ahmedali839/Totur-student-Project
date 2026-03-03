export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, course, message } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim()) {
      return Response.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return Response.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // --- Persist to MongoDB (optional — connect when MONGODB_URI is set) ---
    // import { connectDB } from "@/lib/mongodb";
    // import Booking from "@/models/Booking";
    // await connectDB();
    // await Booking.create({ ... });

    // --- Send email via nodemailer / Resend / SendGrid (add later) ---
    // For now: log to console so you can see submissions in Vercel logs
    console.log("[Contact Form Submission]", {
      name, email,
      phone:   phone   || "(not provided)",
      course:  course  || "(not specified)",
      message: message || "(no message)",
      at:      new Date().toISOString(),
    });

    return Response.json(
      { ok: true, message: "Enquiry received. Hafiza Sania will reply within 2 hours." },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API Error]", err);
    return Response.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
