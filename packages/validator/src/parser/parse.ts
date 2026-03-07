import { parse as parseYaml } from 'yaml';
import { detectFormat } from './detect';
import type { SpecForgeSpec } from './types';
import type { SpecFormat } from './detect';

export { detectFormat } from './detect';
export type { SpecFormat } from './detect';

export function parse(raw: string, format?: SpecFormat): SpecForgeSpec {
  const fmt = format ?? detectFormat(raw);
  if (fmt === 'json') return JSON.parse(raw) as SpecForgeSpec;
  if (fmt === 'yaml') return parseYaml(raw) as SpecForgeSpec;
  if (fmt === 'toon')
    throw new Error('TOON format requires @toon-format/toon package.');
  throw new Error(`Unknown format: ${fmt}`);
}
