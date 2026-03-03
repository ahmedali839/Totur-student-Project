import SaleBanner from "@/components/ui/SaleBanner";

export default function MarketingLayout({ children }) {
  return (
    <>
      {/* has-sale-banner adds bottom padding so content isn't hidden behind the fixed bar */}
      <div className="has-sale-banner">{children}</div>
      <SaleBanner />
    </>
  );
}
