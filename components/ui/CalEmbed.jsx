"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

/**
 * CalEmbed
 * Renders the Cal.com inline booking calendar.
 * Must be a Client Component — @calcom/embed-react injects a script via useEffect.
 *
 * @param {string} calLink - Booking path e.g. "ustadh-ali/free-trial"
 */
export default function CalEmbed({ calLink }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "free-trial" });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#059669" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="free-trial"
      calLink={calLink}
      style={{ width: "100%", height: "100%", minHeight: "640px" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}
