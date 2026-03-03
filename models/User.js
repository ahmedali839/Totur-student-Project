// models/User.js
// Mongoose schema — students, tutors, and admins share one collection.
// Role determines what data is relevant and what dashboard they see.

import mongoose from "mongoose";
const { Schema, model, models, Types } = mongoose;

// ── Sub-schema: progress snapshot per enrolled course ────────────────────────
const EnrollmentSchema = new Schema(
  {
    course:        { type: Types.ObjectId, ref: "Course", required: true },
    enrolledAt:    { type: Date, default: Date.now },
    completedAt:   { type: Date, default: null },
    // 0–100 overall progress percentage (updated after each session)
    progress:      { type: Number, min: 0, max: 100, default: 0 },
    paymentStatus: {
      type:    String,
      enum:    ["pending", "active", "paused", "cancelled"],
      default: "pending",
    },
  },
  { _id: false }
);

// ── Main schema ──────────────────────────────────────────────────────────────
const UserSchema = new Schema(
  {
    // ── Identity ─────────────────────────────────────────────────────
    name: {
      type:     String,
      required: [true, "Name is required"],
      trim:     true,
    },
    email: {
      type:      String,
      required:  [true, "Email is required"],
      unique:    true,
      lowercase: true,
      trim:      true,
    },
    // Stored as bcrypt hash — never return raw from queries
    passwordHash: {
      type:   String,
      select: false,
    },
    // Used for Google / NextAuth OAuth sign-ins (no password needed)
    googleId: {
      type:   String,
      sparse: true, // allows multiple null values without unique conflict
      select: false,
    },
    image: {
      type: String, // URL — from Google avatar or uploaded manually
    },

    // ── Role & Status ─────────────────────────────────────────────────
    role: {
      type:    String,
      enum:    ["student", "tutor", "admin"],
      default: "student",
    },
    isActive: {
      type:    Boolean,
      default: true,
    },
    emailVerified: {
      type:    Boolean,
      default: false,
    },

    // ── Profile ───────────────────────────────────────────────────────
    // Student: their age, helps tailor lesson approach
    age: {
      type: Number,
      min:  4,
    },
    // Tutor: short biography shown on /about and course pages
    bio: {
      type:     String,
      maxlength: 1000,
    },
    // WhatsApp or phone number for session reminders
    phone: {
      type: String,
      trim: true,
    },
    // IANA timezone string — used to show localised session times
    // e.g. "America/New_York", "Asia/Karachi"
    timezone: {
      type:    String,
      default: "UTC",
    },

    // ── Student-specific ──────────────────────────────────────────────
    // Rich enrollment records (ref + progress + payment status)
    enrolledCourses: [EnrollmentSchema],

    // ── Tutor-specific ────────────────────────────────────────────────
    // Courses this tutor teaches
    teachingCourses: [
      { type: Types.ObjectId, ref: "Course" },
    ],
    // Default recurring Zoom / Google Meet link for this tutor's sessions
    zoomLink: {
      type:    String,
      default: null,
    },
    // Qualifications shown on the About page
    qualifications: [String],

    // ── Payments ──────────────────────────────────────────────────────
    // Stripe customer ID — set once, reused for all future charges
    stripeCustomerId: {
      type:   String,
      select: false,
    },
    // Active Stripe subscription ID (null when on free trial or cancelled)
    stripeSubscriptionId: {
      type:   String,
      select: false,
    },
  },
  { timestamps: true }
);

// ── Indexes ───────────────────────────────────────────────────────────────────
UserSchema.index({ role: 1 });          // query all tutors / all students fast
UserSchema.index({ isActive: 1 });

// ── Prevent model re-compilation during Next.js hot-reloads ──────────────────
export default models.User || model("User", UserSchema);
