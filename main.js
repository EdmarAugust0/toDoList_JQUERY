$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideToggle("slow");
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeNovaTask = $('#newTask').val();
        const novaLi = $('<li class="item" id="completeTask"></li>')
        $(`<p>${nomeNovaTask}</p>`).appendTo(novaLi)

        $(novaLi).appendTo('ul')
        $('#newTask').val('')
    })

    $(document).on('click', '#completeTask', function() {
        $(this).toggleClass("feito")
    })
})