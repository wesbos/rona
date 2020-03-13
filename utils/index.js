export function calculatePercentage(total, fraction) {
  if (total === 0) return null;
  return `${((fraction / total) * 100).toFixed(2)}%`;
}
