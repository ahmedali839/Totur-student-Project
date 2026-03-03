import DashboardShell from "@/components/dashboard/DashboardShell";

const ADMIN_NAV = [
  { label: "Overview",  href: "/dashboard/admin",  icon: "grid"     },
  { label: "Students",  href: "/dashboard/admin",  icon: "users"    },
  { label: "Schedule",  href: "/dashboard/admin",  icon: "calendar" },
  { label: "Payments",  href: "/dashboard/admin",  icon: "credit-card" },
];

// TODO (Phase 3): Replace mock user with session from NextAuth
const MOCK_USER = { name: "Hafiza Sania", role: "admin" };

export default function AdminDashboardLayout({ children }) {
  return (
    <DashboardShell navItems={ADMIN_NAV} user={MOCK_USER}>
      {children}
    </DashboardShell>
  );
}
