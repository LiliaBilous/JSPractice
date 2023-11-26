# Практичне завдання №4

## Theme - Objects

### Теоретичне запитання

1. Напишіть своїми словами, що таке метод об'єкта.
Метод обєкта - спеціальний тип властивості обєкта що є функцією та додає різну поведінку до обєкту.

Objects can have a special type of property, called a method.
Methods are properties that are functions. This adds different behavior to an object.

### Завдання

Реалізувати функцію створення об'єкта "користувач".

#### Технічні вимоги:

+ Написати функцію `createNewUser()`, яка буде створювати та повертати об’єкт `newUser`.

+ При виклику функція повинна запитати у викликаючого ім'я та прізвище.

+ Використовуючи дані, введені користувачем, створіть об'єкт `newUser` зі властивостями `firstName` і `lastName`.

+ Додайте в об’єкт `newUser` метод `getLogin()`, який повертатиме першу букву імені користувача, приєднану до прізвища користувача, все в нижньому реєстрі (наприклад, `Ivan Kravchenko → ikravchenko`).

+ Створити користувача за допомогою функції `createNewUser()`. Викликати в користуванні функцію `getLogin()`. Вивести в консоль результат виконання функцій.

- Зробити так, щоб властивості `firstName` і `lastName` не можна було змінити напряму. Створити функції налаштування `setFirstName()` и `setLastName()`, які дозволяють змінити дані властивості.

#### Література:
- [Объекты как ассоциативные массивы](https://learn.javascript.ru/object)
- [Object.defineProperty()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)