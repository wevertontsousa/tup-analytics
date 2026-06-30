export function sum(installments: number[]) {
  return installments.reduce((total, current) => total + current, 0);
}

export const packageName = 'ENV';
