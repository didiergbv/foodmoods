import { getDictionary, type Locale } from "@/lib/i18n";
import ContactPageClient from "./ContactPageClient";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ContactPageClient lang={lang} dict={dict} />;
}
