export interface Project {
  key: 'daily-secret-address' | 'playlist-viewer' | 'yosef-ly-synagogue' | 'dganit-fruit-desserts' | 'ginzei-haim' | 'shut-harav-yoel';
  title: string;
  hebrewTitle?: string;
  description: string;
  imageAlt: string;
  primaryLink: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
  tags: string[];
}

export const projects: Project[] = [
  {
    key: 'daily-secret-address',
    title: 'Daily Secret Address',
    hebrewTitle: 'הכתובת היומית על פי הרש״ש',
    description:
      'A Kabbalah-based daily spiritual companion app. Originally published on the Apple App Store as a native iOS app, then rebuilt as a web app so it also runs on Android and any browser — a real shipped cross-platform product. Automatically computes daily mystical content from the Hebrew calendar with no internet connection required, includes a home-screen widget and daily notification reminders timed to prayer, and a dedication feature letting users dedicate a day in memory of or for the recovery of a loved one, visible to all app users.',
    imageAlt: 'Screenshot of the Daily Secret Address app showing daily Kabbalistic content',
    primaryLink: { label: 'View project', href: 'https://talsal.github.io/daily-secret-address-web/' },
    secondaryLink: { label: 'Try it live', href: 'https://talsal.github.io/daily-secret-address-web/today/' },
    tags: ['iOS', 'Swift', 'Web App', 'Cross-Platform', 'PWA'],
  },
  {
    key: 'playlist-viewer',
    title: 'Playlist Viewer',
    description:
      "A media hub built to bring together all of my father Chaim Salman's YouTube recordings — Torah portion readings, holiday prayers, Shabbat services, Kabbalah teachings, and liturgical poetry — into one searchable, sortable place. Features multiple sort modes (playlist order, alphabetical, duration), a search function, custom keyboard-shortcut playback controls, a random-song picker, and WhatsApp sharing.",
    imageAlt: 'Screenshot of the Playlist Viewer app showing a searchable list of recordings',
    primaryLink: { label: 'View project', href: 'https://talsal.github.io/playlist-viewer/' },
    tags: ['JavaScript', 'YouTube API', 'Search & Sort', 'Personal Project'],
  },
  {
    key: 'yosef-ly-synagogue',
    title: 'Yosef-Ly Synagogue Website',
    description:
      'A full community website built for my local synagogue, Beit Knesset Yosef-Ly, in the Moriah neighborhood of Modiin, Israel. Includes prayer times, Torah study schedules, community events, memorials and blessings, donation info, and membership details — real-world, delivered client-style site work.',
    imageAlt: 'Screenshot of the Yosef-Ly Synagogue community website',
    primaryLink: { label: 'View project', href: 'https://talsal.github.io/yosef-ly-synagogue/' },
    tags: ['Astro', 'Community Site', 'Client Work'],
  },
  {
    key: 'dganit-fruit-desserts',
    title: "Dganit's Homemade Fruit Desserts",
    hebrewTitle: 'קינוחי פירות ביתיים של דגנית',
    description:
      'A Hebrew, right-to-left storefront for a small home dessert business: a menu of kosher fruit desserts, a photo gallery with click-to-enlarge, and a step-by-step ordering guide. The order form lets customers pick quantities per dessert, see a running total, and send a prefilled WhatsApp order with no account or backend. All prices, flavors, and photos live in a single data file so the owner can update them without touching the layout. Mobile-first, accessible, and SEO-ready with Open Graph previews and structured data.',
    imageAlt: "Screenshot of Dganit's Homemade Fruit Desserts site showing dessert photos and order buttons",
    primaryLink: { label: 'View project', href: 'https://talsal.github.io/dganit-fruit-desserts/' },
    tags: ['JavaScript', 'HTML/CSS', 'RTL / Hebrew', 'WhatsApp Ordering', 'Client Work'],
  },
  {
    key: 'ginzei-haim',
    title: 'Ginzei Haim — Rabbi Yoel Hakoun Lessons',
    hebrewTitle: 'גנזי חיים — שיעורי הרב יואל חקון',
    description:
      "A Hebrew, right-to-left archive of over 1,300 Kabbalah lessons by Rabbi Yoel Hakoun, available as video, MP3 recordings and PDF source sheets. Lessons are organized by topic and by location, with search, favorites, a built-in player and light/dark themes.",
    imageAlt: 'Screenshot of the Ginzei Haim site showing lesson topics and a search box',
    primaryLink: { label: 'View project', href: 'https://ginzei-haim.org/' },
    tags: ['JavaScript', 'RTL / Hebrew', 'Search', 'Media Archive', 'Client Work'],
  },
  {
    key: 'shut-harav-yoel',
    title: 'Q&A on Prayer Kavanot',
    hebrewTitle: 'שו"ת לימוד כוונות למהדרין',
    description:
      "A searchable Hebrew archive of 221 questions and answers collected from a Torah-study WhatsApp group on the kavanot (intentions) of prayer. Organized by the order of the prayer service and the Jewish year, with filters by section, category and answerer.",
    imageAlt: 'Screenshot of the Q&A site on prayer kavanot showing search and filter controls',
    primaryLink: { label: 'View project', href: 'https://talsal.github.io/shut-harav-yoel/' },
    tags: ['JavaScript', 'RTL / Hebrew', 'Search & Filter', 'Client Work'],
  },
];
