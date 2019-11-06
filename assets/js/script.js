$(function(){
  var counter = 0;//déclare une variable égale à 0
  $('a').click(function(){//crée une fonction sur le clic du bouton
    $('.count').html(counter+=1);//rajoute 1 à chaque clic sur le bouton
  })
})
