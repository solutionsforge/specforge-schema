export type SpecFormat = 'json' | 'yaml' | 'toon';

export function detectFormat(raw: string): SpecFormat {
  const trimmed = raw.trimStart();
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) return 'json';
  if (/\[\d+,?\]\{/.test(raw)) return 'toon';
  return 'yaml';
}
