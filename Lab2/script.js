"use strict"

$(document).ready(function() {

    $('#add-btn').click(function() {
        // Pobranie wartości z pola input
        var newTodo = $('#input').val();
    
        // Dodanie nowego elementu do listy
        if (newTodo !== '') {
          var newLi = $('<li>', {class: 'list-group-item d-flex justify-content-between align-items-center', text: newTodo});
          var deleteBtn = $('<button>', {type: 'button', class: 'btn btn-danger btn-sm', html: '<i class="fas fa-times"></i>'});
    
          newLi.append(deleteBtn);
          $('#todo-list').append(newLi);
          $('#input').val('');
        }
    });
    
    $('#new-todo').on('keypress', function(event) {
        if (event.which === 13 && $(this).val() !== '') {
            addTodoItem($(this).val());
            $(this).val('');
        }
    });

    $(document).on('click', '#todo-list li', function() {
        toggleTodoItem($(this));
    });

    $(document).on('click', '#todo-list button', function() {
        removeTodoItem($(this).parent());
    });

    let deletedTodoItems = [];

    $(document).keydown(function(event) {
        if (event.which === 90 && event.ctrlKey) {
            if (deletedTodoItems.length > 0) {
                let todoItem = deletedTodoItems.pop();
                $('#todo-list').append(todoItem);
            }
        }
    });

    function addTodoItem(itemText) {
        let date = new Date();
        let item = $('<li>').text(itemText).addClass('todo-item');
        let time = $('<span>').addClass('time').text(formatDate(date));
        item.append(time);

        let deleteBtn = $('<button>').addClass('delete-btn').html('&times;');
        item.append(deleteBtn);
    
        $('#todo-list').append(item);
    }
    
    function toggleTodoItem(item) {
        item.toggleClass('done');
        let time = item.find('.time');
        if (item.hasClass('done')) {
            time.text(formatDate(new Date()));
        } else {
            time.text('');
        }
    }
    
    function removeTodoItem(item) {
        if (confirm('Czy na pewno chcesz usunąć to zadanie?')) {
            item.remove();
            deletedTodoItems.push(item.prop('outerHTML'));
        }
    }
    
    function formatDate(date) {
        let day = addLeadingZero(date.getDate());
        let month = addLeadingZero(date.getMonth() + 1);
        let year = date.getFullYear();
        let hours = addLeadingZero(date.getHours());
        let minutes = addLeadingZero(date.getMinutes());
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
    
    function addLeadingZero(number) {
        if (number < 10) {
            return `0${number}`;
        } else {
            return number;
        }
    }
});