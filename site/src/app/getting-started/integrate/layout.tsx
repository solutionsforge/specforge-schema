import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Use SpecForge Specs Programmatically — SpecForge Format',
  description:
    'Parse, validate, and traverse SpecForge specs in code. Build validators, converters, generators, and executors on the open format.',
  alternates: { canonical: 'https://schema.specforge.tech/getting-started/integrate/' },
};

export default function IntegrateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
