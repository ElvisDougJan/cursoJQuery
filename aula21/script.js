$(() => {
  $('button').click(() => {
    $('#botao').toggleClass('estilo')

    // if($('#botao').hasClass('estilo')) {
    //   $('#botao').removeClass('estilo');
    // } else {
    //   $('#botao').addClass('estilo');
    // }
  })

  $('#botao').mouseover(() => {
    $('#botao').addClass('estilo')
  })

  $('#botao').mouseout(() => {
    $('#botao').removeClass('estilo')
  })
})