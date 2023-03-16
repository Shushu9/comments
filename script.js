"use strict"

window.addEventListener('DOMContentLoaded', function () {

    // Работа с удалением и лайками через делегирование

    let comments = document.querySelector('.comments-list');
    let commentsForm = document.querySelector('form');


    // функция удаления комментариев по клику на корзину

    comments.addEventListener('click', function (event) {
        if (!event.target.closest('.delete')) {
            return
        };

        let comment = event.target.closest('.comment');
        comment.remove();
    });

    // функция тоггла цвета лайка по клику    

    comments.addEventListener('click', function (event) {
        if (!event.target.closest('.btn-like')) {
            return
        };

        let comment = event.target.closest('.btn-like');
        comment.classList.toggle('liked');
    });



    //функция создания нового комментария 

    function addNewComment(author, info, date, time) {

        const newComment = document.createElement('li'); //создадим оболочку, класс и тело комментария
        newComment.classList.add('comment');
        newComment.innerHTML = `
            <div class="comment__author">${author}</div>
            <div class="comment__info">${info}</div>
            <div class="comment__date">${date} в <span class="comment__time">${time}</span></div>
            <div class="comment__icons">
                <button type="button" class="btn-like">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                </button>
                <button type="button" class="btn-trash delete">
                    <svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                </button>
            </div>
        `;
        comments.append(newComment);
    }


    function createNewComment(event) {
        event.preventDefault(); // уберем перезагрузку страницы после сабмита

        let name = document.querySelector('.add__name');
        let info = document.querySelector('.add__info');
        let date = document.querySelector('.add__date').value;
        let time = '';

        console.log(date);



        time = setTime();

        addNewComment(name.value, info.value, date, time)

        name.value = '';
        info.value = '';
    }


    commentsForm.addEventListener('submit', createNewComment);


    //Установка времени 

    function setTime() {
        let now = new Date(),
            hours = `${now.getHours()}`,
            minutes = `${now.getDate()}`;

        hours = (hours.length < 2) ? `0${hours}` : hours;
        minutes = (minutes.length < 2) ? `0${minutes}` : minutes;

        return `${hours}:${minutes}`;
    }


    // Установка даты 

    function setDate {

        let now = new Date(),
        if (date == '') {
            date == 'Сегодня';
        }
    }
})

