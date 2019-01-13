	$.getJSON("https://mindicador.cl/api", function(indicador){

		//dolar
		indicador1 = indicador.dolar.valor;
		dolar = parseInt(indicador1);
		$("#actual_dolar").prepend("<strong>DOLAR: $"+dolar+"</strong>");

		//UF
		indicador2 = indicador.uf.valor;
		uf = parseInt(indicador2);
		$("#actual_uf").prepend("<strong>UF: $"+uf+"</strong>");

		//UTM
		indicador3 = indicador.utm.valor;
		utm = parseInt(indicador3);
		$("#actual_utm").prepend("<strong>UTM: $"+utm+"</strong>");

		//EURO
		indicador4 = indicador.euro.valor;
		euro = parseInt(indicador4);
		$("#actual_euro").prepend("<strong>EURO: $"+euro+"</strong>");
	});

	$("#indicador_principal").on("click", function(){
		
		$("#actual").text("cargando...");
		n = 0;
		var val_indicadores = new Array();

		val_indicadores[0] = "DOLAR: $"+dolar;
		val_indicadores[1] = "UF: $"+uf;
		val_indicadores[2] = "UTM: $"+utm;
		val_indicadores[3] = "EUR: $"+euro;

		setInterval(function(){

			$("#actual").text(val_indicadores[n]);
			$("#actual").fadeIn("slow");

			setTimeout(function(){
				$("#actual").fadeOut("slow");
			}, 2500);

			n++;
			if(n > 4){ n = 0; }

		}, 3000);
	
	});
