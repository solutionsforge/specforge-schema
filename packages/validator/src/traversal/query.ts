import type { SpecForgeSpec, Ticket } from '../parser/types';
import { getTickets } from './hierarchy';

export function findTicketById(
  spec: SpecForgeSpec,
  id: string
): Ticket | null {
  return getTickets(spec).find((t) => t.id === id) ?? null;
}

export function findTicketByNumber(
  spec: SpecForgeSpec,
  ticketNumber: number
): Ticket | null {
  return getTickets(spec).find((t) => t.ticketNumber === ticketNumber) ?? null;
}

export function findByStatus(spec: SpecForgeSpec, status: string): Ticket[] {
  return getTickets(spec).filter((t) => t.status === status);
}

export function findByTag(spec: SpecForgeSpec, tag: string): Ticket[] {
  return getTickets(spec).filter((t) => (t.tags ?? []).includes(tag));
}
