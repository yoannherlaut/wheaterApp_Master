$("document").ready(function () {

	/*$("li").each(function(i) {
	  console.log(i);
	});*/


	$("#btn-valide").click(function () {
		if ($("#city").val().length > 2) {

			//$("#btn-valide").remove();
			//$(this).fadeOut().delay(5000).fadeIn();
		} else {
			event.preventDefault();

			$("#messageErreur").html("<center><strong><p>Merci de saisir un nom de ville supérieur à deux caractères !!!</p></strong></center>");
		}

	});

	$(function () {

		$(".list-group").sortable(
		{
			update: function( event,ui )
			{console.log($(".list-group").sortable("toArray"));}
		}
		);
		$(".list-group").disableSelection();
	});
	
	

	/*$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Lyon&APPID=9b754f1f40051783e4f72c176953866e&units=metric&lang=fr", function(data) {
	  console.log(data);
	});*/

})