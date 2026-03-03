// components/ui/Card.jsx
// Reusable card component for courses, testimonials, and feature highlights

export default function Card({
  title,
  description,
  badge,
  footer,
  children,
  className = "",
}) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          {badge}
        </span>
      )}
      {title && (
        <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      )}
      {description && (
        <p className="text-sm text-gray-600">{description}</p>
      )}
      {children}
      {footer && (
        <div className="mt-4 border-t border-gray-100 pt-4">{footer}</div>
      )}
    </div>
  );
}
