$(document).ready (function () {
    $('#root').append('<ul id="ul"></ul>');
    $('<li id="li"></li>').appendTo('#ul');
    $('#li').append('<span>Сделать задание #3 по web-программированию</span>');
    $('#li').append('<button class="btn1">Удалить</button>');
    $(".btn1").click(function() {
        $('#li').remove();
    });
    $('#root').append('<input id="add_task_input">');
    $('#root').append('<button id="add_task">Добавить</button>');
    $("#add_task").click(function() {
        var text = document.getElementsByTagName('input')[0];
        var res = text.value;
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        $(newSpan).append(res);
        $(newLi).append(newSpan);
        $(newLi).append('<button class="btn2">Удалить</button>');
        $('#ul').append(newLi);
        $('.btn2').click(function() {
            $(newLi).remove();
        });
    });
});

