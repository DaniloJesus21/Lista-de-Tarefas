$(document).ready(function(){
  $('form').on('submit', function(e){
    e.preventDefault();
    const novaTarefa = $('#novaTarefa').val();
    const tarefas = $('<li></li>');

    $(`<p>${novaTarefa}</p>`).appendTo(tarefas);
    $(tarefas).appendTo('ul');
  });
  $('ul').on('click', 'li',function(){
    $(this).toggleClass('concluido');
  });
});
