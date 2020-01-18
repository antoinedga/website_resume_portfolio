
  $( document ).ready(function() {
	$( "#forms_post" ).submit(function(event){
	const data = $(this).serialize();
	console.log(data);

	$.ajax({
		url : "https://thegordonexperience.herokuapp.com/projects/add_project",
		type: 'POST',
		data : data,
		dataType: 'json',
		success: function(res) {
			console.log(res);
		},
		error: function(error) {
		 console.log(error);
		}
	});
	event.preventDefault();
	});
});