import { join } from 'node:path';
import { env } from 'node:process';
import { config } from 'dotenv';

if (env.NODE_ENV !== 'production') {
  config({ path: join(import.meta.dirname, '../../../.env') });
}

export function getEnv(key: string): string {
  const value: string | undefined = env[key];

  if (!value?.trim()) {
    throw new Error(`Variável de ambiente obrigatória -> ${key}`);
  }

  return value;
}

export function getEnvNumber(key: string): number {
  const value: number = Number(getEnv(key));

  if (Number.isNaN(value)) {
    throw new Error(`Variável de ambiente deve ser numérica -> ${key}`);
  }

  return value;
}

export function getEnvBoolean(key: string): boolean {
  const value: string = getEnv(key).toLowerCase().trim();

  if (value === 'true' || value === '1') {
    return true;
  }

  if (value === 'false' || value === '0') {
    return false;
  }

  throw new Error(`Variável de ambiente deve ser booleana -> ${value}`);
}
