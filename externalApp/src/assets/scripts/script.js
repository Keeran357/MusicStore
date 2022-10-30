
/*============ Header Function Start ============*/
jQuery(document).ready(function(){
	jQuery(".menu-toggler").click(function(){
		jQuery(this).toggleClass("active");
		jQuery(".header-navbar").toggleClass("open");
		jQuery("body").toggleClass("overflow-hidden");
	});
});
/*============ Header Function End ============*/

/*============ niceSelect Function Start ============*/
jQuery(document).ready(function(){
	//jQuery(".select").niceSelect();
});
/*============ niceSelect Function End ============*/

/*============ Password-Visibility Function Start ============*/
jQuery(document).ready(function(){
	jQuery(".toggle-password").click(function(){
		jQuery(this).toggleClass("active");
		var input = jQuery(jQuery(this).attr("toggle"));
		if (input.attr("type") == "password"){
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});
});
/*============ Password-Visibility Function End ============*/

/*============ Datepicker Function Start ============*/
jQuery(document).ready(function(){
	jQuery("#datepicker").datepicker();
});
/*============ Datepicker Function End ============*/

/*============ FAQ Function Start ============*/
jQuery(document).ready(function(){
	jQuery(".faq-block .faq-accordion .accordion-box .accordion-title").click(function(){
		jQuery(this).parent(".accordion-box").addClass("active");
		jQuery(this).next(".accordion-content").slideDown(300);
		jQuery(this).parent(".accordion-box").siblings().removeClass("active");
		jQuery(this).parent(".accordion-box").siblings().find(".accordion-content").slideUp(300);
	});
});
/*============ FAQ Function End ============*/

/*============ ApexCharts Function Start ============*/
var options = {
	series: [{
		name: "Today",
		data: [45, 52, 38, 24, 33, 26, 21, 20, 6]
	},
	{
		name: 'Yesterday',
		data: [35, 41, 62, 42, 13, 18, 29, 37, 36]
	}],
	chart: {
		height: 260,
		type: 'line',
		zoom: {
			enabled: false
		},
		toolbar: {
            show: false
        },
		fontFamily: 'OpenSans-Regular',
		foreColor: '#858C94'
  	},
  	colors: ['#F4901D', '#A7A9AC'],
	dataLabels: {
		enabled: false
	},
	stroke: {
		width: 2,
		curve: 'straight'
	},
	title: {
		text: 'Conversations',
		align: 'left',
		style: {
			fontSize:  '14px',
			fontFamily: 'OpenSans-Bold',
			color:  '#000000'
		},
	},
	legend: {
		fontFamily: 'OpenSans-Regular',
		fontSize: '13px',
		position: 'top',
		horizontalAlign: 'right',
		floating: false,
		offsetY: -30,
		offsetX: -5,
		markers: {
			width: 10,
			height: 10,
			radius: 10,
			offsetX: -5,
			offsetY: 0
		},
		tooltipHoverFormatter: function(val, opts) {
			return val //+ ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
		}
	},
	grid: {
		row: {
			colors: ['#ffffff', 'transparent'],
			opacity: 0.5
		},
	},
	xaxis: {
		categories: ['10:23 PM', '10:30 PM', '10:40 PM', '10:50 PM', '11:00 PM', '11:10 PM', '11:20 PM', '11:30 PM', '11:40 PM'],
	},
	yaxis: {
		title: {
			text: 'No of conversations',
			offsetX: -5,
			offsetY: 0,
			style: {
				fontFamily: 'OpenSans-Regular',
				fontSize:  '14px',
				color:  '#858C94',
				fontWeight:  'normal',
			}
		}
	},
};

/*============ ApexCharts Function End ============*/