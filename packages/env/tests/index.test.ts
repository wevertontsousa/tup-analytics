import { env } from 'node:process';
import { describe, expect, it } from 'vitest';
import { getEnv, getEnvBoolean, getEnvNumber } from '../src/index';

describe('Variáveis de ambiente', () => {
  it('Deve retornar uma string', () => {
    expect(getEnv('STRING_VARIABLE_TEST')).toBe('teste');
  });

  it('Deve retornar um número quando não encontrar a variável', () => {
    expect(getEnvNumber('NUMERIC_VARIABLE_TEST')).toBe(10);
  });

  it('Deve retornar um booleano quando não encontrar a variável', () => {
    expect(getEnvBoolean('BOOLEAN_VARIABLE_TEST')).toBe(true);
  });

  it('deve lançar um erro quando não encontrar a variável', () => {
    delete env.STRING_VARIABLE_TEST;
    expect(() => getEnv('STRING_VARIABLE_TEST')).toThrow('Variável de ambiente obrigatória -> STRING_VARIABLE_TEST');
  });
});
