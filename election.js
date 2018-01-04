document.addEventListener("DOMContentLoaded", function() {
  // Imagination!
  $.ajax({
  	url: 'https://bb-election-api.herokuapp.com/',
  	method: 'GET',
  	dataType: 'JSON'
  }).done(function(response){
    console.log(response)
    var election = document.querySelector('#election')

    for (var i = 0; i < response.candidates.length; i++){
      candidate = `<li>Name: ${response.candidates[i].name}<br>Votes: ${response.candidates[i].votes}
      <form id="form${i}" action="POST" action=action="https://bb-election-api.herokuapp.com/vote">
      <input type="submit" value="Vote!">
      <input type="hidden" name=${response.candidates[i].name} value=${response.candidates[i].name}>
      </form>
      </li><br>`;
      election.insertAdjacentHTML('beforeend',candidate)

      var forms = document.querySelectorAll('form')

      forms[i].addEventListener('submit',function(e){
        e.preventDefault();
        $.ajax({
          url: 'https://bb-election-api.herokuapp.com/vote',
          method: 'POST',
          dataType: 'JSON',
          data: {name: this.querySelector('input[type=hidden]').value}
        }).done(function(){
          console.log(`Vote submitted!`)
        }).fail(function(){
          console.log('Voted Failed!')
        })
      })//vote ajax call
    }//for loop end


  })//First Ajax Call end

});
