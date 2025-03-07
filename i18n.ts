import { getRequestConfig } from "next-intl/server";

// export default getRequestConfig(async (ctx) => (
//   {
//    messages: (await import(`./locales/en.json`)).default,
//   timeZone: "Europe/Prague",
// }));


export default getRequestConfig(async ({ locale }) => ({
  // 1. Return messages for the current locale
  messages: (await import(`./locales/${locale}.json`)).default,
  
  // 2. Explicitly return the locale
  locale: locale // <–– Required in next-intl v3.22+
}));