$(document).ready(function() { 

	if($('#banner1').length){
		$("#banner1").carouFredSel({
			items: 1,
			auto : false, 
			width: '100%',
			responsive: true,
			pagination	: "#banner_pag"
		});
	}
	if($('#partners').length){
		$("#partners").carouFredSel({ 
			auto : false, 
			width: '100%',
			prev: '#partners_prev',
			next: '#partners_next',
			pagination	: "#partners_pag"
		});
	}
	
});
