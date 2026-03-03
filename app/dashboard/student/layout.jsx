import DashboardShell from "@/components/dashboard/DashboardShell";

const STUDENT_NAV = [
  { label: "Overview",   href: "/dashboard/student", icon: "grid"     },
  { label: "My Courses", href: "/dashboard/student", icon: "book"     },
  { label: "Schedule",   href: "/dashboard/student", icon: "calendar" },
];

// TODO (Phase 3): Replace mock user with session from NextAuth
const MOCK_USER = { name: "Ahmed Khan", role: "student" };

export default function StudentDashboardLayout({ children }) {
  return (
    <DashboardShell navItems={STUDENT_NAV} user={MOCK_USER}>
      {children}
    </DashboardShell>
  );
}
