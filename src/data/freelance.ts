export const freelance = {
  phoneDisplay: '050-5991972',
  phoneHref: 'tel:+972505991972',
  whatsappHref: 'https://wa.me/972505991972',
  services: [
    {
      title: 'בניית אתרים ואפליקציות',
      description:
        'אתרי תדמית, אתרי קהילה, מערכות ואפליקציות ווב ומובייל — מהאפיון ועד העלאה לאוויר, בעיצוב נקי ומותאם לנייד.',
    },
    {
      title: 'פיתוח יישומים מסחריים במהירות',
      description:
        'מהרעיון למוצר עובד בזמן קצר. גישה מעשית, בנייה הדרגתית ושימוש בכלי AI לקיצור זמני הפיתוח.',
    },
    {
      title: 'אוטומציה של תהליכים עסקיים',
      description:
        'מחליפים עבודה ידנית וחוזרת בתהליכים אוטומטיים: חיבור בין מערכות, הפקת דוחות, התראות וטיפול בנתונים.',
    },
    {
      title: 'שילוב כלי AI בעסק',
      description:
        'הטמעת כלי AI כמו Claude, GPT ו-Gemini בעבודה היומיומית — סיכום, מענה ללקוחות, ניתוח מידע וחיסכון בזמן.',
    },
  ],
  projects: [
    {
      key: 'daily-secret-address',
      title: 'הכתובת היומית על פי הרש״ש',
      description:
        'אפליקציה רוחנית יומית מבוססת קבלה. פורסמה ב-App Store כאפליקציית iOS ונבנתה מחדש כאפליקציית ווב שעובדת בכל מכשיר, כולל עבודה ללא אינטרנט, וידג׳ט והתראות.',
      href: 'https://talsal.github.io/daily-secret-address-web/',
      linkLabel: 'לאפליקציה',
    },
    {
      key: 'playlist-viewer',
      title: 'Playlist Viewer',
      description:
        'אתר שמרכז ארכיון גדול של הקלטות מיוטיוב למקום אחד — חיפוש, מיון, ניגון, שיתוף בוואטסאפ וקישורים ישירים לכל שיר.',
      href: 'https://talsal.github.io/playlist-viewer/',
      linkLabel: 'לאתר',
    },
    {
      key: 'yosef-ly-synagogue',
      title: 'אתר בית הכנסת יוסף-לי',
      description:
        'אתר קהילה מלא לבית כנסת בשכונת מוריה במודיעין — זמני תפילות, שיעורים, אירועים, תרומות ופרטי חברות.',
      href: 'https://talsal.github.io/yosef-ly-synagogue/',
      linkLabel: 'לאתר',
    },
    {
      key: 'dganit-fruit-desserts',
      title: 'קינוחי פירות ביתיים של דגנית',
      description:
        'אתר הזמנות לעסק ביתי קטן — תפריט קינוחים, גלריית תמונות והזמנה פשוטה שנשלחת בוואטסאפ עם סיכום מחיר, בלי חשבון ובלי שרת. המחירים והתמונות מתעדכנים בקובץ אחד.',
      href: 'https://talsal.github.io/dganit-fruit-desserts/',
      linkLabel: 'לאתר',
    },
  ],
} as const;
