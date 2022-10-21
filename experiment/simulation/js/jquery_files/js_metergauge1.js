/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
		   s2 = [0];
		   plot3 = $.jqplot('chart2',[s2],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					  min: 0,
					   max: 2,
					   intervals:[0.5,1,1.5,2],
					   intervalColors:['#66cc66',  '#cc6666', '#cc6666','#E7E658']
				   }
			   }
		   });
		});
                
                function check(){
                     s2[0]=parseFloat(document.getElementById('amp').value);
		plot3 = $.jqplot('chart2',[s2],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					  min: 0,
					   max: 2,
					   intervals:[0.5,1,1.5,2],
					   intervalColors:['#66cc66',  '#cc6666', '#cc6666','#E7E658']
				   }
			   }
		   });
                }