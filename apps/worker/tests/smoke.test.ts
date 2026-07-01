import { describe, expect, it } from 'vitest';
import { sum } from '../src/main';

describe('smoke', () => {
  it('deve confirmar o funcionamento do Vitest"', () => {
    expect(sum([1, 1])).toBe(2);
  });
});
