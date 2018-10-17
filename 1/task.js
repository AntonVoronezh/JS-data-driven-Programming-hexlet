import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    const getNewPlayer = order === 1 ? 2 : 1;
    const getRandomCard = random(cards);
    const cardName = car(getRandomCard);
    const damage = cdr(getRandomCard)();
    const newHealth1 = order === 1 ? health1 : health1 - damage;
    const newHealth2 = order === 2 ? health2 : health2 - damage;
    const currentName = order === 1 ? name1 : name2;
    const nextName = order === 2 ? name1 : name2;
    if (health1 <= 0 || health2 <= 0) {
      const logOut = cons(cons(cons(health1, health2), `${currentName}был убит.`), log);
      return logOut;
    }
    const message = `\n Игрок '${currentName}' применил '${cardName}'против '${nextName}' и нанес урон '${damage}' `;
    const logItem = cons(cons(cons(newHealth1, newHealth2), message), log);
    return iter(newHealth1, name1, newHealth2, name2, getNewPlayer, logItem);
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards => (name1, name2) => run(name1, name2, cards);
