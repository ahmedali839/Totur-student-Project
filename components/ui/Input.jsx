"use client";

// components/ui/Input.jsx
// Reusable input, textarea, and select component

export default function Input({
  id,
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  error,
  hint,
  as = "input",         // "input" | "textarea" | "select"
  rows = 4,
  children,             // for <select> options
  className = "",
  ...props
}) {
  const baseField =
    "w-full rounded-xl border bg-surface px-4 py-2.5 text-sm text-ink placeholder-ink-muted shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50";

  const normalBorder  = "border-border focus:border-brand-mid focus:ring-brand-mid";
  const errorBorder   = "border-red-400 focus:border-red-500 focus:ring-red-400";

  const fieldClass = `${baseField} ${error ? errorBorder : normalBorder} ${className}`;

  const fieldId = id || name;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={fieldId}
          className="text-sm font-medium text-ink"
        >
          {label}
          {required && (
            <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          )}
        </label>
      )}

      {as === "textarea" ? (
        <textarea
          id={fieldId}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`${fieldClass} resize-y`}
          aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
          aria-invalid={!!error}
          {...props}
        />
      ) : as === "select" ? (
        <select
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={fieldClass}
          aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
          aria-invalid={!!error}
          {...props}
        >
          {children}
        </select>
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={fieldClass}
          aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
          aria-invalid={!!error}
          {...props}
        />
      )}

      {error && (
        <p id={`${fieldId}-error`} className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${fieldId}-hint`} className="text-xs text-ink-muted">
          {hint}
        </p>
      )}
    </div>
  );
}
