import { stringify as stringifyYaml } from 'yaml';
import type { SpecForgeSpec } from './types';

export function toJson(spec: SpecForgeSpec): string {
  return JSON.stringify(spec, null, 2);
}

export function toYaml(spec: SpecForgeSpec): string {
  return stringifyYaml(spec);
}

export function toToon(_spec: SpecForgeSpec): string {
  throw new Error('TOON format requires @toon-format/toon package.');
}
