import { getDictionary, type Locale } from "@/lib/i18n";
import ServicesPageClient from "./ServicesPageClient";

export default async function Services({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ServicesPageClient lang={lang} dict={dict} />;
}
