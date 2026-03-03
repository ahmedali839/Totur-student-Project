// lib/mongodb.js
// Singleton Mongoose connection — safe for Next.js hot-reloads and edge builds.
// The URI check is deferred inside connectDB() so importing this file never
// throws during build-time static analysis.

import mongoose from "mongoose";

// Silence Mongoose 7 deprecation notice about default strict-query behavior
mongoose.set("strictQuery", false);

// Module-level cache lives on `global` so it survives Next.js hot-reloads in dev
let cached = global.mongoose ?? (global.mongoose = { conn: null, promise: null });

/**
 * connectDB()
 * Call this at the top of every API route / Server Action that needs the DB.
 *
 * @returns {Promise<typeof mongoose>}
 */
export async function connectDB() {
  // ── 1. Validate URI ──────────────────────────────────────────────
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "MongoDB URI missing. Add MONGODB_URI to your .env.local file."
    );
  }

  // ── 2. Return cached connection if already open ──────────────────
  if (cached.conn) return cached.conn;

  // ── 3. Create connection promise (only once) ─────────────────────
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, {
        bufferCommands:   false, // fail fast instead of buffering when disconnected
        maxPoolSize:      10,    // keep up to 10 idle connections
        serverSelectionTimeoutMS: 5_000,
        socketTimeoutMS:          30_000,
      })
      .then((m) => m)
      .catch((err) => {
        // Reset so the next call retries instead of hanging on a broken promise
        cached.promise = null;
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
