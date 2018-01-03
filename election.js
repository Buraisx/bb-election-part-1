document.addEventListener("DOMContentLoaded", function() {
  // Imagination!
  $.ajax({
  	url: 'https://bb-election-api.herokuapp.com/',
  	method: 'GET',
  	dataType: 'JSON'
  }).done(function(response){
  	var election = document.querySelector('#election')
  	for (var i = 0; i < response.candidates.length; i++){
  		candidate = `<li>Name: ${response.candidates[i].name}<br>Votes: ${response.candidates[i].votes}</li><br>`;
  		election.insertAdjacentHTML('beforeend',candidate)
  	}
  })
});
