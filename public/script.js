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

		$(".list-group").sortable({
			update: function (event, ui)
			
			{
				var data = $(".list-group").sortable("toArray");
				$.getJSON("http://localhost/update?data="+JSON.stringify(data),function (data) {
					console.log(data);
				});
					}
				});
		$(".list-group").disableSelection();
	});

});