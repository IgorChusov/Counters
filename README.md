## Requirements

`node: >= 14`

## Installation

Install dependencies using npm

```
npm install

```
## Run

Run dev server: npm run dev

development bundle: npm run build:dev 

production bundle: npm run build:prod 

## Description

(rus)

Тестовый проект реализации счетчиков.

Для запуска dev сервера необходимо установить модули с помощью npm и выполнить команду: npm run dev.

Сборка проекта происходит с помощью webpack. В проекте реализован SSR с помощью express. Настроен hot dev server. 

Используемые технологии: React, TypeScript, Redux, Redux-Thunk. Так же настроены style module и подготовлен react-router.

Состояния счетчиков реализовано с помощью стейт менеджера redux. А обработка всех операций по добавлению и изменению значений счетчиков проводятся с помощью redux-thunk. На каждое действие реализован свой action, который, для удобства, обрабатывается в отдельном для счетчика reducer(src/counters/reducer). Так же имеется общий reducer который обрабатывает reducers используемые для отдельных action. В данном проекте такой reducer один, но это удобно и структурированно.

В reducer хранится информация о каждом счетчике. State это массив объектов с данными: id счетчика, value(значение счетчика) и тип счетчика( type?: 'timer' | 'counter').

При каждом нажатии на кнопку "Add counter", на страницу добавляется счетчик(action: COUNTER_ADD). Значение его равно сумме значений уже имеющихся счетчиков на странице. Счетчик состоит из поля value и кнопок + и -, при нажатии на которые изменяется value счетчика соответственно(action: MINUS_COUNTER, PLUS_COUNTER). Каждый четвертый счетчик, является таймером, меняющий свое value раз в секунду. Нужно учесть, что считается каждый четвертый счетчик находящийся на странице, а не исчитывает количество добавлений счетчиков(нажатий на кнопку). При этом значения новых счетчиков учитывает все актуальные значения на странице.
Так же любой из счетчиков можно удалить нажав на кнопку delete.