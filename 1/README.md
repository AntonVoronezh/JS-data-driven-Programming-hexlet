# Игровой дизайн: карточный бой

 ## Задание
```

Допишите логику функции run, которая содержит ядро игрового движка.


Алгоритм

1.	Если здоровье игрока (которого атаковали на предыдущем шаге) меньше
 или равно 0, то обновляем лог и возвращаем наружу. Игра закончена.

2.	В ином случае, берем рандомную карту, вычисляем урон, записываем 
новое здоровье, а также добавляем строчку в лог, используя формат:

3.	const message = `Игрок '${name1}' применил '${cardName}'

4.	  против '${name2}' и нанес урон '${damage}'`;

5.	Повторяем.



Подсказки

•	Параметр order в функции iter нужен для определения того, какой игрок сейчас атакует.
•	Формат записи лога cons(cons(health1, health2), message).
•	Используйте функцию random для выбора карты из колоды.




```
