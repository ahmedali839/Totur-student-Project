"use client";

// components/forms/RegistrationForm.jsx
// Student enrollment / registration form

import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
    age: "",
    timezone: "",
  });
  const [status, setStatus] = useState(null); // "loading" | "success" | "error"

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Registration failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="reg-name">Full Name *</label>
        <input
          id="reg-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="reg-email">Email Address *</label>
        <input
          id="reg-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="reg-password">Password *</label>
        <input
          id="reg-password"
          name="password"
          type="password"
          required
          minLength={8}
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="reg-course">Select Course *</label>
        <select id="reg-course" name="course" required value={form.course} onChange={handleChange}>
          <option value="">Choose a course</option>
          <option value="quran-nazra">Quran Nazra</option>
          <option value="arabic-language">Arabic Language</option>
        </select>
      </div>

      <div>
        <label htmlFor="reg-age">Age *</label>
        <input
          id="reg-age"
          name="age"
          type="number"
          required
          min={4}
          max={100}
          value={form.age}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="reg-timezone">Your Timezone *</label>
        <input
          id="reg-timezone"
          name="timezone"
          type="text"
          required
          placeholder="e.g. America/New_York"
          value={form.timezone}
          onChange={handleChange}
        />
      </div>

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Creating account…" : "Create Account"}
      </button>

      {status === "success" && <p>Account created! Check your email to confirm.</p>}
      {status === "error" && <p>Registration failed. Please try again.</p>}
    </form>
  );
}
