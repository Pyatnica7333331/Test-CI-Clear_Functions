export default function healthCheck(person) {
  if (person.health > 50) {
    return 'healthy';
  } else if (person.health >= 15 && person.health <= 50) {
    return 'wounded';
  } else if (person.health < 15 && person.health >= 0) {
    return 'critical';
  } else return false;
}
