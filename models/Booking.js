// models/Booking.js
// A Booking is a single scheduled session between one student and one tutor
// for a specific course.  It is the core operational record of the academy —
// everything from the student dashboard ("my next class") to the admin
// schedule view is powered by querying this collection.

import mongoose from "mongoose";
const { Schema, model, models, Types } = mongoose;

const BookingSchema = new Schema(
  {
    // ── Who ───────────────────────────────────────────────────────────
    student: {
      type:     Types.ObjectId,
      ref:      "User",
      required: [true, "Student is required"],
    },
    tutor: {
      type:     Types.ObjectId,
      ref:      "User",
      required: [true, "Tutor is required"],
    },
    course: {
      type:     Types.ObjectId,
      ref:      "Course",
      required: [true, "Course is required"],
    },

    // ── When ──────────────────────────────────────────────────────────
    // Stored in UTC — always convert to local time in the UI layer
    scheduledAt: {
      type:     Date,
      required: [true, "Session date/time is required"],
    },
    // Derived field — scheduledAt + durationMins (stored for fast range queries)
    endsAt: {
      type: Date,
    },
    // Session length in minutes (default matches the course's sessionDurationMins)
    durationMins: {
      type:    Number,
      default: 60,
      min:     15,
    },

    // ── Sequence ──────────────────────────────────────────────────────
    // Which session number this is within the student's course (1, 2, 3 …)
    sessionNumber: {
      type: Number,
      min:  1,
    },

    // ── Status lifecycle ─────────────────────────────────────────────
    // scheduled → completed | cancelled | no-show
    status: {
      type:    String,
      enum:    ["scheduled", "completed", "cancelled", "no-show"],
      default: "scheduled",
    },
    cancelledAt:  { type: Date },
    cancelReason: { type: String, maxlength: 500 },
    // Who cancelled — so the admin can spot patterns
    cancelledBy: {
      type: String,
      enum: ["student", "tutor", "admin"],
    },

    // ── Session delivery ─────────────────────────────────────────────
    // Per-session Zoom link (overrides the tutor's default zoomLink if set)
    zoomLink: {
      type: String,
    },
    // Google Meet or other platform link as fallback
    meetLink: {
      type: String,
    },
    // Tutor's private notes after the session (select: false keeps it off student queries)
    tutorNotes: {
      type:   String,
      select: false,
    },
    // Feedback visible to the student
    feedback: {
      type: String,
    },

    // ── Timezone context ─────────────────────────────────────────────
    // The student's timezone at the time of booking — for display in emails/UI
    studentTimezone: {
      type:    String,
      default: "UTC",
    },

    // ── Payment ───────────────────────────────────────────────────────
    // Is this session covered by the student's active subscription?
    isPaid: {
      type:    Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    // Stripe Payment Intent ID — for refund traceability
    stripePaymentIntentId: {
      type:   String,
      select: false,
    },
  },
  { timestamps: true }
);

// ── Pre-save: auto-calculate endsAt ──────────────────────────────────────────
BookingSchema.pre("save", function (next) {
  if (this.scheduledAt && this.durationMins) {
    this.endsAt = new Date(
      this.scheduledAt.getTime() + this.durationMins * 60_000
    );
  }
  next();
});

// ── Indexes ───────────────────────────────────────────────────────────────────
// Most common query patterns:
BookingSchema.index({ student: 1, scheduledAt: -1 });   // student's session history
BookingSchema.index({ tutor:   1, scheduledAt:  1 });   // tutor's upcoming schedule
BookingSchema.index({ status:  1, scheduledAt:  1 });   // admin: all scheduled sessions
BookingSchema.index({ course:  1, student:      1 });   // per-course progress lookup

// ── Prevent model re-compilation during Next.js hot-reloads ──────────────────
export default models.Booking || model("Booking", BookingSchema);
