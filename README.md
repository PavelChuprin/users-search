# Users-Search

<img src="public/img/logo.png" width="80" height="80">

**Users-Search** - найди пользователей на GitHub.

## Описание проекта:

Простое одностраничное приложение по поиску пользователей на ресурсе GitHub.

## Функционал приложения

Поиск осуществляется по логину пользователя.

Поле ввода имеет валидацию, можно вводить только цифры и латинские символы, а также нельзя оставить это поле незаполненным.

Имеется возможность отсортировать результаты поиска по количесву репозиториев (по возрастанию или по убыванию).

Также внизу страницы реализована пагинация, для удобного переключения между страницами.

### Карточка пользователя

В карточке пользователя можно увидеть его аватар, логин, ID, а также перейти на его страницу GitHub.

## Запуск приложения:

- Склонируйте репозиторий:

  ```
  https://github.com/PavelChuprin/users-search
  ```

- установите зависимости командой:

  ```
  npm install
  ```

- запустите проект командой:

  ```
  npm start
  ```

- запуск тестов:

  ```
  npm test
  ```

## Технологии в проекте

Проект разработан с использованием современных инструментов и технологий:

- React;
- Redux + Redux Toolkit;
- CSS Modules.

Дополнительные вспомогательные библиотеки:

- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-hook-form](https://www.npmjs.com/package/react-hook-form)
- [react-paginate](https://www.npmjs.com/package/react-paginate)

## Особенности

Ограничения наложенные API: доступны только первые 1000 результатов поиска.

## Демо проекта

https://users-search-lake.vercel.app/
