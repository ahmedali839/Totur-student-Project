export default function sitemap() {
  const base = "https://quranacademy.online";
  const now  = new Date();

  return [
    { url: base,                                   lastModified: now, changeFrequency: "weekly",  priority: 1.0  },
    { url: `${base}/courses`,                      lastModified: now, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${base}/courses/quran-nazra`,          lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/courses/quran-hafiz`,          lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/courses/arabic-language`,      lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/courses/arabic-speaking`,      lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/about`,                        lastModified: now, changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/book`,                         lastModified: now, changeFrequency: "weekly",  priority: 0.95 },
  ];
}
