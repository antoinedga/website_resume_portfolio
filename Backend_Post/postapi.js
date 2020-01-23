
  $(document).ready(function() {
	$( "#forms_post" ).submit(function(event){
	const data = $(this).serialize();

	$.ajax({
		url : "https://thegordonexperience.herokuapp.com/projects/add_project",
		type: 'POST',
		data : data,
		dataType: 'json',
		success: function(res) {
			console.log(res);
			$("#result").append(res);
		},
		error: function(error) {
		 console.log(error);
		}
	});
	document.getElementById('#forms_post').reset();
	event.preventDefault();
	});
});