console.log("Sanity Check: JS is working!");
allGames = []
$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/games',
    success: gameSuccess
    })
    
  function gameSuccess(games){
    games.forEach(elem => {
      var game = elem.title;
      var type = elem.type;
      var hoursPlayed = elem.hoursPlayed;
      var image = elem.image;
      var dev = elem.developer;
      var gameId = elem._id

    
      cardHtml = `<div class="card" style="width: 28rem;">
                  <img class="card-img-top" src="${image}" alt="Card image cap">
                  <div class="card-body">
                    
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><h4>${game}<h4></li>
                      <li class="list-group-item">${type}</li>
                      <li class="list-group-item">Created by ${dev}</li>
                      <li class="list-group-item">Hours Played - ${hoursPlayed}</li>
                    </ul>
                    <a href="#" id="delete" class="btn btn-primary" data-id=${gameId}>Delete</a>
                  </div>
                </div>`
        $('#gameTarget').append(cardHtml)
      });
    }
    $('#newGameForm').on('submit', function(e) {
      $.ajax({
        method: 'POST',
        url: '/api/games',
        data: $(this).serialize(),
        success: newGameSuccess,
    });
    
    function newGameSuccess(json) {
      $('#newGameForm input').val('');
      allGames.push(json);
      console.log(json);
      renderGame()
    }
    function renderGame(){
      $('#gameTarget').empty();
      allGames = gameSuccess(games)
    }
  })
  
  $('#gameTarget').on('click', '#delete', function(e) {
    console.log('clicked delete button to', '/api/games/'+$(this).attr('data-id'));
    $(this).parent().parent().remove();
  
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/api/games/'+$(this).attr('data-id'),
      success: console.log("success")
      }
      )
    })

  
})

