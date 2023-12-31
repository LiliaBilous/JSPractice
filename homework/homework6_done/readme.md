# Практичне завдання №6

## Theme - Arrays, pseudo-array arguments. Set, Map
    
### Теоритичне запитання

1. Опишіть своїми словами, як працює цикл forEach.

Метод forEach також використовується для циклічного проходження масивів, але у порівнянні із циклом for він використовує функцію по-іншому. Метод forEach передає функцію зворотного виклику для кожного елемента масиву.


### Завдання

Реалізувати функцію фільтру масиву за вказаним типом даних.

#### Технічні вимоги:
- Написати функцію `filterBy()`, яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
- Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом. Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null].

#### Література:
- [Масиви з числовими індексами](http://learn.javascript.ru/array)
- [Масив: методи, що перебирають](http://learn.javascript.ru/array-iteration)
- [Шість типів даних, typeof](https://learn.javascript.ru/types-intro)


<!-- ## Теоретический вопрос

1. Опишите своими словами как работает цикл forEach.

## Задание

Реализовать функцию фильтра массива по указанному типу данных.

#### Технические требования:
- Написать функцию `filterBy()`, которая будет принимать в себя 2 аргумента. Первый аргумент - массив, который будет содержать в себе любые данные, второй аргумент - тип данных.
- Функция должна вернуть новый массив, который будет содержать в себе все данные, которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом. То есть, если передать массив ['hello', 'world', 23, '23', null], и вторым аргументом передать 'string', то функция вернет массив [23, null]. 

#### Литература:
- [Массивы с числовыми индексами](http://learn.javascript.ru/array)
- [Массив: перебирающие методы](http://learn.javascript.ru/array-iteration)
- [Шесть типов данных, typeof](https://learn.javascript.ru/types-intro) -->