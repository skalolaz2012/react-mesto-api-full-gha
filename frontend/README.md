# mesto-react

[Ссылка на проект](https://skalolaz2012.github.io/react-mesto-auth/)

### Обзор

- Интро
- JS, JSX, модули
- ООП
- React, роутинг
- Create react app
- Методы Fetch, работа с сервером

**Интро**

Мой проект-аналог социальной сети в рамках обучения в Яндекс Практикум.
Проект подвергся глобальным изменениям и рефакторингу - весь функционал перенесен в рамки библиотеки React.

**JS**

В данной работе используются модули JS, код написан в формате синтаксической надстройки JSX, в конвертации кода задействован инструментарий Babel.

**ООП**
Часть проекта унаследована с предыдущей учебной работы по ООП и прописана по правилам ООП на классах.

**React, роутинг**
Проект написан по правилам и канонам библиотеки React. Используются технологии функциональных компонентов, хуков стейт переменных, эффектов, контекста и рефов. Также задействованы технологии Route и useNavigate и protectedRoute.

**Create react app**
Проект собран утилитой Create react app, в работе используются технологии Babel - код JS подгоняется под возможности старых браузеров, конвертируется код JSX в JS, JS в CSS. Автоматически настроена минификация CSS и внедрены PostCSS обработчкики (вендорные префиксы расставлены автоматически). Файл index.js - точка входа в проект, весь функционал реализован внутри компонента App, который собирает в себя все компоненты и модули в папку build для деплоя.

**Методы Fetch, работа с сервером**
В ПР12 спринта 13 реализован функционал не просто обработки запросов на сервер, но и все запросы на авторизацию, регистрацию и проверку токена работают через сервис `https://auth.nomoreparties.co`. Карточки отрисовываются, получая данные с сервера только для авторизованных пользователей. Формы редактирования профиля, добавления карточек и смены аватара открываются и закрываются. Роутами настроены страницы авторизации, регистрации, также работает роут логаута.

**Deploy**
Работа опубликована на портале github, в публикации задействована ветка gh-pages.