import healthCheck from '../index';

test('should test healthy person', () => {
  const input = { name: 'Маг', health: 90 };
  const result = healthCheck(input);
  expect(result).toBe('healthy');
});
test('should test wounded health person', () => {
  const input = { name: 'лучник', health: 40 };
  const result = healthCheck(input);
  expect(result).toBe('wounded');
});
test('should test critical health person', () => {
  const input = { name: 'мечник', health: 10 };
  const result = healthCheck(input);
  expect(result).toBe('critical');
});
test('should test dead person', () => {
  const input = { name: 'dead', health: -1 };
  const result = healthCheck(input);
  expect(result).toBe(false);
});
