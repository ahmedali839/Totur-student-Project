// models/Course.js
// Mongoose schema for Quran and Arabic language courses.

import mongoose from "mongoose";
const { Schema, model, models, Types } = mongoose;

// ── Sub-schema: individual lesson within a course ────────────────────────────
const LessonSchema = new Schema(
  {
    title:       { type: String, required: true, trim: true },
    description: { type: String },
    // Learning targets students tick off as they progress
    objectives:  [String],
    order:       { type: Number, required: true },
    // Estimated length of this lesson in minutes
    durationMins:{ type: Number, default: 60 },
  },
  { _id: false }
);

// ── Main schema ──────────────────────────────────────────────────────────────
const CourseSchema = new Schema(
  {
    // ── Identity ─────────────────────────────────────────────────────
    // URL-safe identifier — used in /courses/[slug] dynamic routes
    slug: {
      type:      String,
      required:  true,
      unique:    true,
      lowercase: true,
      trim:      true,
    },
    title: {
      type:     String,
      required: [true, "Course title is required"],
      trim:     true,
    },
    // Short pitch shown on listing cards (≤160 chars for SEO)
    summary: {
      type:      String,
      maxlength: 160,
    },
    // Full course description shown on /courses/[slug]
    description: {
      type:     String,
      required: true,
    },

    // ── Classification ────────────────────────────────────────────────
    category: {
      type:     String,
      enum:     ["quran", "arabic"],
      required: true,
    },
    level: {
      type:    String,
      enum:    ["beginner", "intermediate", "advanced", "all"],
      default: "all",
    },

    // ── Duration ──────────────────────────────────────────────────────
    // Human-readable label shown to students e.g. "12 weeks", "Ongoing"
    duration: {
      type:    String,
      default: "Ongoing",
    },
    // Total number of scheduled sessions in the course
    totalSessions: {
      type: Number,
      min:  1,
    },
    // Length of each Zoom/Meet session in minutes
    sessionDurationMins: {
      type:    Number,
      default: 60,
    },

    // ── Instructor ────────────────────────────────────────────────────
    instructor: {
      type: Types.ObjectId,
      ref:  "User", // must be a User with role === "tutor"
    },

    // ── Curriculum ────────────────────────────────────────────────────
    // Key outcomes shown in bullet list on the course detail page
    learningOutcomes: [String],
    // Prerequisite knowledge / age range
    prerequisites: {
      type:    String,
      default: "None — absolute beginners welcome",
    },
    lessons: [LessonSchema],

    // ── Pricing ───────────────────────────────────────────────────────
    // Monthly subscription price in cents — e.g. 4999 = $49.99
    priceMonthly: {
      type:     Number,
      required: true,
      min:      0,
    },
    // One-off trial session price in cents (0 = free trial)
    trialPrice: {
      type:    Number,
      default: 0,
    },
    // Stripe recurring Price ID — set once when the product is created in Stripe
    stripePriceId: {
      type:   String,
      select: false,
    },

    // ── State ─────────────────────────────────────────────────────────
    isPublished: {
      type:    Boolean,
      default: false,
    },
    isFeatured: {
      type:    Boolean,
      default: false,
    },
    enrolledCount: {
      type:    Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// ── Indexes ───────────────────────────────────────────────────────────────────
CourseSchema.index({ category: 1, isPublished: 1 });
CourseSchema.index({ isFeatured: 1 });

// ── Prevent model re-compilation during Next.js hot-reloads ──────────────────
export default models.Course || model("Course", CourseSchema);
