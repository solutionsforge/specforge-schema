import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Getting Started — SpecForge Format',
  description:
    'Write, validate, and use a SpecForge spec in five minutes. No account required.',
  alternates: { canonical: 'https://schema.specforge.tech/getting-started/' },
};

export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
