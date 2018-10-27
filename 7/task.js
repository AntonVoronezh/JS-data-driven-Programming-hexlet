const iter = (health1, name1, health2, name2, order, log) => {
  const element = head(log);
  if (health1 <= 0) {
    const stats = {
      health1: element.health1,
      health2: element.health2,
      message: `${name1} был убит`,
    };
    return consList(stats, log);
  }
  const card = customRandom(cards);
  const cardName = card.name;
  const points = card.damage(health2);
  const newHealth = health2 - points;
  const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${points}'`;
  let stats;
  if (order === 1) {
    stats = {
      health1,
      health2: newHealth,
      message,
    };
  } else if (order === 2) {
    stats = {
      health1: newHealth,
      health2: health1,
      message,
    };
  }
  const newLog = consList(stats, log);
  return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
};
