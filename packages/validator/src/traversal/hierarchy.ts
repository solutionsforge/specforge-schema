import type { SpecForgeSpec, Specification, Epic, Ticket, Blueprint } from '../parser/types';

export function getSpecifications(spec: SpecForgeSpec): Specification[] {
  return spec.specifications ?? [];
}

export function getEpics(spec: SpecForgeSpec): Epic[] {
  return (spec.specifications ?? []).flatMap((s) => s.epics ?? []);
}

export function getTickets(spec: SpecForgeSpec): Ticket[] {
  return getEpics(spec).flatMap((e) => e.tickets ?? []);
}

export function getBlueprints(spec: SpecForgeSpec): Blueprint[] {
  return (spec.specifications ?? []).flatMap((s) => s.blueprints ?? []);
}
