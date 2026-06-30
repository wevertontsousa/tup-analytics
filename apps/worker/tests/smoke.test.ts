import { packageName } from '@tup_analytics/env';
import { describe, expect, it } from 'vitest';
import { sum } from '../src/main';

describe('smoke', () => {
  it('deve confirmar o funcionamento do Vitest"', () => {
    expect(sum([1, 1])).toBe(2);
  });

  it('deve confirmar a importação do package env/"', () => {
    expect(packageName).toBe('ENV');
  });
});
