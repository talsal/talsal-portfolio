export interface Project {
  key: 'daily-secret-address' | 'playlist-viewer' | 'yosef-ly-synagogue';
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
];
