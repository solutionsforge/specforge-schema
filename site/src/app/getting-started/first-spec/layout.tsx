import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Write Your First Spec — SpecForge Format',
  description:
    'Build a real spec for a Todo API. See how implementation instructions, typed dependencies, patterns, and blueprints work together.',
  alternates: { canonical: 'https://schema.specforge.tech/getting-started/first-spec/' },
};

export default function FirstSpecLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
