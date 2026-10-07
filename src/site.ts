// Public, non-secret site settings. Values that differ per deploy come from
// PUBLIC_* env vars (see .env.example).
export const SITE = {
  name: 'ABC Alphabet',
  domain: 'abcalphabetkids.com',
  url: 'https://abcalphabetkids.com',
  company: 'AVIA YAZILIM LİMİTED ŞİRKETİ',
  email: 'hello@aviayazilim.com',
  instagram: 'https://www.instagram.com/aviayazilim/',
  appStoreId: '6465174410',
  playId: 'com.abc.avia.yazilim',
  // App Store Connect provider token (the `pt` in campaign links); public, same for every campaign.
  appStoreProviderToken: import.meta.env.PUBLIC_APPSTORE_PROVIDER_TOKEN || '126619153',
  // Pinterest website claim (<meta name="p:domain_verify">); public.
  pinterestVerify: import.meta.env.PUBLIC_PINTEREST_VERIFY || '25823b6f455d7e5e1c41673d6e27ccc3',
  cfBeaconToken: import.meta.env.PUBLIC_CF_BEACON_TOKEN ?? '',
  // Facts checked against the app sources (Language.swift, GameEnum.swift).
  languageCount: 8,
  gameCount: 11,
};

// Campaign names: site_<lang>_<page>, pdf_<lang>, pinterest_<lang>.
export function appStoreUrl(campaign: string) {
  const base = `https://apps.apple.com/app/apple-store/id${SITE.appStoreId}`;
  return `${base}?pt=${SITE.appStoreProviderToken}&ct=${encodeURIComponent(campaign)}&mt=8`;
}

export function playUrl(campaign: string, source = 'site') {
  const referrer = encodeURIComponent(`utm_source=${source}&utm_campaign=${campaign}`);
  return `https://play.google.com/store/apps/details?id=${SITE.playId}&referrer=${referrer}`;
}
