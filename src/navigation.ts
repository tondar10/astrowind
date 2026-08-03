import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'صفحه اصلی',
      href: getPermalink('/'),
    },
    {
      text: 'خدمات تخصصی',
      links: [
        {
          text: 'نیروگاه خورشیدی صنعتی',
          href: getPermalink('/services#industrial'),
        },
        {
          text: 'نیروگاه خورشیدی خانگی',
          href: getPermalink('/services#residential'),
        },
        {
          text: 'سیستم‌های آفگرید (مستقل از شبکه)',
          href: getPermalink('/services#offgrid'),
        },
        {
          text: 'مشاوره و امکان‌سنجی',
          href: getPermalink('/services#consulting'),
        },
        {
          text: 'سرویس و نگهداری (O&M)',
          href: getPermalink('/services#maintenance'),
        },
      ],
    },
    {
      text: 'پروژه‌ها',
      href: getPermalink('/projects'),
    },
    {
      text: 'اخبار و مقالات',
      links: [
        {
          text: 'لیست مقالات',
          href: getBlogPermalink(),
        },
        {
          text: 'راهنمای احداث نیروگاه',
          href: getPermalink('solar-power-guide', 'post'),
        },
      ],
    },
    {
      text: 'درباره ما',
      href: getPermalink('/about'),
    },
    {
      text: 'تماس با ما',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    { 
      text: 'مشاوره رایگان', 
      href: getPermalink('/contact'), 
      variant: 'primary' 
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'خدمات نیروگاه',
      links: [
        { text: 'نیروگاه صنعتی و تجاری', href: '#' },
        { text: 'سیستم‌های خانگی متصل به شبکه', href: '#' },
        { text: 'برق خورشیدی باغ و ویلا (آفگرید)', href: '#' },
        { text: 'طراحی مهندسی و نظارت (EPC)', href: '#' },
        { text: 'شستشو و پایش دوره ای پنل‌ها', href: '#' },
      ],
    },
    {
      title: 'تجهیزات خورشیدی',
      links: [
        { text: 'انواع پنل‌های خورشیدی', href: '#' },
        { text: 'اینورترهای خورشیدی', href: '#' },
        { text: 'استراکچر و سازه‌های فلزی', href: '#' },
        { text: 'بانک باتری و شارژ کنترلر', href: '#' },
      ],
    },
    {
      title: 'راهنما و قوانین',
      links: [
        { text: 'قوانین فروش تضمینی برق', href: '#' },
        { text: 'محاسبه‌گر توان نیروگاه', href: '#' },
        { text: 'سوالات متداول', href: '#' },
        { text: 'دانلود کاتالوگ شرکت', href: '#' },
      ],
    },
    {
      title: 'شرکت پرتو توان تدبیر',
      links: [
        { text: 'درباره شرکت', href: getPermalink('/about') },
        { text: 'سوابق و پروژه‌ها', href: '#' },
        { text: 'اخبار حوزه انرژی پاک', href: getBlogPermalink() },
        { text: 'ارتباط با کارشناسان', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'شرایط و قوانین', href: getPermalink('/terms') },
    { text: 'حریم خصوصی', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'اینستاگرام', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'تلگرام', icon: 'tabler:brand-telegram', href: '#' },
    { ariaLabel: 'واتساپ', icon: 'tabler:brand-whatsapp', href: '#' },
    { ariaLabel: 'لینکدین', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <div class="flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-md bg-amber-500 text-white font-bold text-xs shadow-sm">☀️</span>
      <span>© ۱۴۰۵ کلیه حقوق برای <a class="text-amber-600 font-bold hover:underline dark:text-amber-400" href="#">شرکت پرتو توان تدبیر</a> محفوظ است.</span>
    </div>
  `,
};
