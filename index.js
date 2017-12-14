
$("#makePizza").on('click', function(){
//$("#makePizza").on('click', function(){
    let pepperoni = $('#pep').val();
    let cheese = $('#cheese').val();
    let anch = $('#anchovies').val();
    let whole = $('#whole').val();
    let half = $('#half').val();
    if (pepperoni == 'pepperoni' && whole=='whole'){
      $("#result").text('You created a whole Pepperoni pizza.');

}else if (cheese == 'cheese' && whole == 'whole'){
  $("#result").text('You created a whole cheese .');

} else if (anch == 'anchovies' && whole == 'whole'){
    $("#result").text("You created a whole anchovie pizza.")
  }
 else if (pepperoni == 'Pepperoni' && half=='half'){
      $("#result").text("You created a half pepperoni pizza.")
  } else if
      (cheese == 'cheese' && half=='half'){
    $("#result").text("You created a half cheese  pizza.")
} else {
  $("#result").text("You created a half anchovie pizza.")
}

})
