import { test } from '@playwright/test';
import { readFileSync } from 'fs';
import path from 'path';

export type CheckoutFixtures = Record<string, Record<string, unknown>>;

export function loadCheckoutData(): CheckoutFixtures {
  const file = path.join(process.cwd(), 'specs', 'data', 'checkout.json');
  return JSON.parse(readFileSync(file, 'utf-8')) as CheckoutFixtures;
}

/** Collect every `pendingFields` entry under a fixture tree. */
export function collectPendingFields(value: unknown, out: string[] = []): string[] {
  if (value == null || typeof value !== 'object') return out;
  if (Array.isArray(value)) {
    for (const item of value) collectPendingFields(item, out);
    return out;
  }
  const obj = value as Record<string, unknown>;
  if (Array.isArray(obj.pendingFields)) {
    for (const field of obj.pendingFields) {
      if (typeof field === 'string') out.push(field);
    }
  }
  for (const [key, child] of Object.entries(obj)) {
    if (key === 'pendingFields') continue;
    collectPendingFields(child, out);
  }
  return out;
}

/** Product checkout specs need a real app; seed stays offline. */
export function skipWithoutBaseURL(): void {
  test.skip(!process.env.BASE_URL, 'Set BASE_URL to run checkout product specs');
}

/**
 * Blocks false greens: with BASE_URL set, unresolved fixture/UI mapping must fail.
 * Clear pendingFields in specs/data/checkout.json and implement case steps to proceed.
 */
export function assertFixtureReady(tcId: string, data: Record<string, unknown>): void {
  const pending = [...new Set(collectPendingFields(data))];
  if (pending.length === 0) return;
  throw new Error(
    `${tcId}: pending fixture/UI mapping — resolve before asserting BR coverage: ${pending.join(', ')}`,
  );
}

export function gateCheckoutSpec(tcId: string, data: Record<string, unknown>): void {
  skipWithoutBaseURL();
  assertFixtureReady(tcId, data);
}
