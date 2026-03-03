
// import { useState } from "react";

// const COURSES = [
//   { value: "quran-nazra", label: "📖  Quran Nazra (Reading)" },
//   { value: "quran-hafiz", label: "🌟  Quran Hafiz (Memorization)" },
//   { value: "arabic-language", label: "✏️   Arabic Language (Grammar)" },
//   { value: "arabic-speaking", label: "🗣️   Arabic Speaking (Conversation)" },
// ];

// const TRUST_POINTS = ["🎁 First 3 classes absolutely free"];

// export default function ContactForm({ compact = false }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
//   const [step, setStep] = useState(1); // 1 = personal info, 2 = course + message

//   /* ── Validation ─────────────────────────────────────────────────────── */
//   function validate(s) {
//     const e = {};
//     if (!form.name?.trim()) e.name = "Please enter your name.";
//     if (!form.email?.trim() || !/\S+@\S+\.\S+/.test(form.email))
//       e.email = "Enter a valid email address.";
//     if (s === 2 && !form.course) e.course = "Please choose a course.";
//     return e;
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
//   }

//   function handleNext(e) {
//     e.preventDefault();
//     const errs = validate(1);
//     if (Object.keys(errs).length) {
//       setErrors(errs);
//       return;
//     }
//     setStep(2);
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const errs = validate(2);
//     if (Object.keys(errs).length) {
//       setErrors(errs);
//       return;
//     }
//     setStatus("loading");
//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       if (!res.ok) throw new Error();
//       setStatus("success");
//       setForm({ name: "", email: "", phone: "", course: "", message: "" });
//       setStep(1);
//     } catch {
//       setStatus("error");
//     }
//   }

//   /* ── Field helper ────────────────────────────────────────────────────── */
//   function Field({ id, label, required, error, children }) {
//     return (
//       <div>
//         <label
//           htmlFor={id}
//           className="mb-1.5 flex items-center gap-1 text-xs font-semibold text-ink"
//         >
//           {label}
//           {required && (
//             <span className="text-error" aria-hidden="true">
//               *
//             </span>
//           )}
//         </label>
//         {children}
//         {error && (
//           <p
//             role="alert"
//             className="mt-1 flex items-center gap-1 text-xs text-error"
//           >
//             <svg
//               className="h-3 w-3 shrink-0"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
//             </svg>
//             {error}
//           </p>
//         )}
//       </div>
//     );
//   }

//   /* ── Success state ───────────────────────────────────────────────────── */
//   if (status === "success") {
//     return (
//       <div className="rounded-2xl bg-brand-faint p-8 text-center">
//         <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-mid text-3xl text-white shadow-lg">
//           ✓
//         </div>
//         <h3 className="text-xl font-bold text-brand">JazakAllah Khair!</h3>
//         <p className="mt-2 text-sm text-ink-muted">
//           Your request is received. Hafiza Sania will contact you within{" "}
//           <strong className="text-ink">2 hours</strong> to confirm your free
//           trial slot.
//         </p>
//         <p className="mt-3 text-xs text-ink-muted">
//           Check your inbox — a confirmation is on its way.
//         </p>
//         <button
//           onClick={() => setStatus(null)}
//           className="mt-5 rounded-xl border border-brand px-5 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
//         >
//           Submit another enquiry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div
//       className={
//         compact
//           ? ""
//           : "overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
//       }
//     >
//       {/* ── Branded header (full form only) ────────────────────────────── */}
//       {!compact && (
//         <div className="gradient-brand px-6 py-5 text-white">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-xs font-semibold uppercase tracking-widest text-brand-faint">
//                 Free Enrolment
//               </p>
//               <h3 className="mt-1 text-lg font-bold">
//                 Start Your Free Trial Today
//               </h3>
//             </div>
//             <span className="text-3xl" aria-hidden="true">
//               🌙
//             </span>
//           </div>
//           {/* Step indicator */}
//           <div className="mt-4 flex items-center gap-2">
//             {[1, 2].map((n) => (
//               <div key={n} className="flex items-center gap-2">
//                 <div
//                   className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors ${
//                     step >= n
//                       ? "bg-gold-mid text-white"
//                       : "bg-white/20 text-white/60"
//                   }`}
//                 >
//                   {n}
//                 </div>
//                 {n < 2 && (
//                   <div
//                     className={`h-0.5 w-8 rounded transition-colors ${step > 1 ? "bg-gold-mid" : "bg-white/20"}`}
//                   />
//                 )}
//               </div>
//             ))}
//             <span className="ml-1 text-xs text-brand-faint">
//               {step === 1 ? "Your Details" : "Choose Course"}
//             </span>
//           </div>
//         </div>
//       )}

//       <div className={compact ? "" : "p-6"}>
//         {/* Trust list */}
//         {!compact && (
//           <ul className="mb-5 space-y-1.5">
//             {TRUST_POINTS.map((t) => (
//               <li key={t} className="text-xs text-ink-muted">
//                 {t}
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* ── Step 1 ───────────────────────────────────────────────────── */}
//         {step === 1 && (
//           <form onSubmit={handleNext} noValidate className="space-y-4">
//             <div className="grid gap-4 sm:grid-cols-2">
//               <Field id="name" label="Full Name" required error={errors.name}>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   autoComplete="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="e.g. Fatima Al-Hassan"
//                   className={`field-base ${errors.name ? "border-error" : ""}`}
//                 />
//               </Field>
//               <Field
//                 id="email"
//                 label="Email Address"
//                 required
//                 error={errors.email}
//               >
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="you@example.com"
//                   className={`field-base ${errors.email ? "border-error" : ""}`}
//                 />
//               </Field>
//             </div>

//             <Field id="phone" label="WhatsApp / Phone" error={errors.phone}>
//               <input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 autoComplete="tel"
//                 value={form.phone}
//                 onChange={handleChange}
//                 placeholder="+1 555 000 0000 (recommended for quick reply)"
//                 className="field-base"
//               />
//             </Field>

//             <p className="rounded-xl bg-brand-faint px-4 py-3 text-xs text-brand">
//               <strong>For parents:</strong> fill in your details — your
//               child&apos;s name and age can go in the message on the next step.
//             </p>

//             <button
//               type="submit"
//               className="w-full rounded-xl bg-brand-mid px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand hover:shadow-md active:scale-[0.98]"
//             >
//               Continue — Choose a Course →
//             </button>
//           </form>
//         )}

//         {/* ── Step 2 ───────────────────────────────────────────────────── */}
//         {step === 2 && (
//           <form onSubmit={handleSubmit} noValidate className="space-y-4">
//             <Field
//               id="course"
//               label="Which Course?"
//               required
//               error={errors.course}
//             >
//               <select
//                 id="course"
//                 name="course"
//                 required
//                 value={form.course}
//                 onChange={handleChange}
//                 className={`field-base ${errors.course ? "border-error" : ""}`}
//               >
//                 <option value="">Select a course…</option>
//                 {COURSES.map((c) => (
//                   <option key={c.value} value={c.value}>
//                     {c.label}
//                   </option>
//                 ))}
//               </select>
//             </Field>

//             <Field
//               id="message"
//               label="Anything else? (optional)"
//               error={errors.message}
//             >
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={3}
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder="Student's age, current level, goals, or any questions for Hafiza Sania…"
//                 className="field-base resize-none"
//               />
//             </Field>

//             {/* Urgency nudge */}
//             <div className="flex items-center gap-2 rounded-xl bg-gold-faint px-4 py-3">
//               <span className="text-lg" aria-hidden="true">
//                 ⚡
//               </span>
//               <p className="text-xs text-gold-deep">
//                 <strong>Only a few trial spots left this week.</strong> Submit
//                 now to secure yours.
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 type="button"
//                 onClick={() => setStep(1)}
//                 className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-ink-muted transition-colors hover:bg-surface-2"
//               >
//                 ← Back
//               </button>
//               <button
//                 type="submit"
//                 disabled={status === "loading"}
//                 className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gold-mid px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gold hover:shadow-md active:scale-[0.98] disabled:opacity-60"
//               >
//                 {status === "loading" ? (
//                   <>
//                     <svg
//                       className="h-4 w-4 animate-spin"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                     >
//                       <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
//                       <path d="M12 2a10 10 0 0110 10" />
//                     </svg>
//                     Sending…
//                   </>
//                 ) : (
//                   <>🎁 Book My 3 Free Classes</>
//                 )}
//               </button>
//             </div>

//             {status === "error" && (
//               <p
//                 role="alert"
//                 className="rounded-xl bg-red-50 px-4 py-3 text-xs text-error"
//               >
//                 Something went wrong. Please try again or email{" "}
//                 <a href="mailto:saniaqueen1212@gmail.com" className="underline">
//                   saniaqueen1212@gmail.com
//                 </a>
//                 .
//               </p>
//             )}
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

  
  import { useState } from "react";
  import {
    CheckCircle2,
    AlertCircle,
    Loader2,
    ChevronRight,
    ChevronLeft,
    Moon,
  } from "lucide-react";

  const COURSES = [
    { value: "quran-nazra", label: "📖  Quran Nazra (Reading)" },
    { value: "quran-hafiz", label: "🌟  Quran Hafiz (Memorization)" },
    { value: "arabic-language", label: "✏️   Arabic Language (Grammar)" },
    { value: "arabic-speaking", label: "🗣️   Arabic Speaking (Conversation)" },
  ];

  const TRUST_POINTS = [
    "🎁 First 3 classes absolutely free",
    "⚡ Instant confirmation via email",
  ];

  export default function ContactForm({ compact = false }) {
    const [form, setForm] = useState({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
    const [step, setStep] = useState(1); // 1 = personal info, 2 = course + message

    /* ── Validation ─────────────────────────────────────────────────────── */
    function validate(s) {
      const e = {};
      if (!form.name?.trim()) e.name = "Please enter your name.";
      if (!form.email?.trim() || !/\S+@\S+\.\S+/.test(form.email))
        e.email = "Enter a valid email address.";
      if (s === 2 && !form.course) e.course = "Please choose a course.";
      return e;
    }

    function handleChange(e) {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    function handleNext(e) {
      e.preventDefault();
      const errs = validate(1);
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }
      setStep(2);
    }

    /* ── Formspree Submission Logic ────────────────────────────────────── */
    async function handleSubmit(e) {
      e.preventDefault();
      const errs = validate(2);
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }

      setStatus("loading");

      try {
        // Using the Formspree endpoint from your Code 1
        const response = await fetch("https://formspree.io/f/mdkldary", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          setStatus("success");
          setForm({ name: "", email: "", phone: "", course: "", message: "" });
          setStep(1);
        } else {
          throw new Error("Formspree response was not OK");
        }
      } catch (err) {
        console.error("Submission Error:", err);
        setStatus("error");
      }
    }

    /* ── Field helper ────────────────────────────────────────────────────── */
    function Field({ id, label, required, error, children }) {
      return (
        <div className="animate-fade-up">
          <label
            htmlFor={id}
            className="mb-1.5 flex items-center gap-1 text-xs font-bold text-ink"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          {children}
          {error && (
            <p
              role="alert"
              className="mt-1 flex items-center gap-1 text-[10px] font-medium text-red-500"
            >
              <AlertCircle className="h-3 w-3" /> {error}
            </p>
          )}
        </div>
      );
    }

    /* ── Success state ───────────────────────────────────────────────────── */
    if (status === "success") {
      return (
        <div className="rounded-3xl bg-brand-faint p-10 text-center border border-brand/10 shadow-xl animate-fade-up">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/20">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-extrabold text-brand">
            JazakAllah Khair!
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Your request is received. Hafiza Sania will contact you within{" "}
            <strong className="text-ink">2 hours</strong> to confirm your free
            trial slot.
          </p>
          <button
            onClick={() => setStatus(null)}
            className="mt-8 rounded-xl bg-white border border-brand/20 px-6 py-2.5 text-sm font-bold text-brand transition-all hover:bg-brand hover:text-white"
          >
            Submit another enquiry
          </button>
        </div>
      );
    }

    return (
      <div
        className={
          compact
            ? ""
            : "overflow-hidden rounded-[2rem] border border-border/60 bg-white shadow-2xl shadow-brand/5"
        }
      >
        {!compact && (
          <div className="bg-brand px-8 py-6 text-white pattern-overlay">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-faint">
                  Free Enrolment
                </p>
                <h3 className="mt-1 text-xl font-extrabold">
                  Start Your Free Trial
                </h3>
              </div>
              <Moon className="h-8 w-8 text-gold-light opacity-50" />
            </div>

            {/* Premium Step Indicator */}
            <div className="mt-6 flex items-center gap-3">
              {[1, 2].map((n) => (
                <div key={n} className="flex items-center gap-3">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${step >= n ? "bg-gold-mid text-white ring-4 ring-white/10" : "bg-white/20 text-white/60"}`}
                  >
                    {n}
                  </div>
                  {n < 2 && (
                    <div
                      className={`h-0.5 w-10 rounded-full transition-all duration-500 ${step > 1 ? "bg-gold-mid" : "bg-white/20"}`}
                    />
                  )}
                </div>
              ))}
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-brand-faint">
                {step === 1 ? "Your Details" : "Course Goals"}
              </span>
            </div>
          </div>
        )}

        <div className={compact ? "" : "p-8"}>
          {step === 1 && (
            <form onSubmit={handleNext} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full Name" required error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Fatima Ali"
                    className={`field-base ${errors.name ? "border-red-500 ring-red-500/10" : "focus:border-brand focus:ring-brand/10"}`}
                  />
                </Field>
                <Field
                  id="email"
                  label="Email Address"
                  required
                  error={errors.email}
                >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`field-base ${errors.email ? "border-red-500 ring-red-500/10" : "focus:border-brand focus:ring-brand/10"}`}
                  />
                </Field>
              </div>

              <Field
                id="phone"
                label="WhatsApp / Phone (Optional)"
                error={errors.phone}
              >
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 555 000 0000"
                  className="field-base focus:border-brand focus:ring-brand/10"
                />
              </Field>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-4 text-sm font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-mid hover:shadow-brand/30 active:scale-[0.98]"
              >
                Next Step: Choose Course{" "}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <Field
                id="course"
                label="Select Your Course"
                required
                error={errors.course}
              >
                <select
                  id="course"
                  name="course"
                  required
                  value={form.course}
                  onChange={handleChange}
                  className={`field-base appearance-none ${errors.course ? "border-red-500 ring-red-500/10" : "focus:border-brand focus:ring-brand/10"}`}
                >
                  <option value="">Select a course…</option>
                  {COURSES.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field id="message" label="Notes / Age of Student (Optional)">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share age, current level, or any specific goals..."
                  className="field-base resize-none focus:border-brand focus:ring-brand/10"
                />
              </Field>

              <div className="flex items-center gap-3 rounded-2xl bg-gold-faint p-4 border border-gold-mid/10">
                <span className="text-xl">⚡</span>
                <p className="text-[11px] font-medium text-gold-deep leading-relaxed">
                  <strong>Limited Trial Slots:</strong> Submit now to secure
                  your 3 free classes before the weekend intake.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center justify-center rounded-xl border border-border/60 bg-surface-2 px-5 py-4 text-xs font-bold text-ink-muted transition-colors hover:bg-white hover:text-ink"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gold-mid py-4 text-sm font-bold text-white shadow-lg shadow-gold-mid/20 transition-all hover:bg-gold hover:shadow-gold-mid/30 active:scale-[0.98] disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>🎁 Claim My 3 Free Classes</>
                  )}
                </button>
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-[11px] font-medium text-red-600 border border-red-100">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>
                    Error sending message. Please email saniaqueen1212@gmail.com
                    directly.
                  </span>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    );
  }
