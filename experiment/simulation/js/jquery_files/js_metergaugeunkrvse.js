/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//---------------------------------------------Metergauge1(Voltmeter)----------------------------------------------//
$(document).ready(function () {
    s1 = [0];
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 2,
                intervals: [0.5, 1, 1.5, 2],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });
});

//---------------------------------------------Metergauge2(Ammeter)---------------------------------------------------//
$(document).ready(function () {
    s2 = [0];
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                 min: 0,
                max: 16,
                intervals: [4,8,12,16],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});

var r, rs, id, id1,id2, vd, vr, rd;
var c = 0.026, is = 0.000000000001;
var table,clmns,vlt;
//-------------------------------------------------- Simulation----------------------------------------------------------------//

function check() {

    r = document.getElementById("res").value;

    rs = r * 1000;
    vr = document.getElementById("dc").value;

    id1 = parseFloat(vr) / parseInt(r);
    //id2=parseFloat(id1)*1000;  // micro ampere
    
    document.getElementById("amp").value = id1.toPrecision(3);

    id = parseFloat(vr) / parseInt(rs);
    
    var t = Math.log(id / is);

                vd = c * t;

    document.getElementById("volt").value = vd.toPrecision(3);

    rd = parseInt(vd) / parseInt(id);

//    if (vr == "") {
//        Alert.render("Enter the Input Voltage");
//        // document.getElementById("dltr").innerHTML="Enter the Input Voltage";
//        document.getElementById("add").style.display = "none";
//    }
//    
//    else if (r == "") {
//        Alert.render("Enter the Resistance Value");
//        // document.getElementById("dltr").innerHTML="Enter the Resistance Value";
//        document.getElementById("add").style.display = "none";
//    }
//    else if (r !=1) {
//        Alert.render("Set the Resistance Value to 1 Kohm");
//        // document.getElementById("dltr").innerHTML="Enter the Resistance Value";
//        document.getElementById("add").style.display = "none";
//    }
//
////    else {
////        document.getElementById("add").style.display = "block";
////    }

    s1[0] = parseFloat(document.getElementById('volt').value);
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 2,
                intervals: [0.5, 1, 1.5, 2],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });

    s2[0] = parseFloat(document.getElementById('amp').value);
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                 min: 0,
                max: 16,
                intervals: [4,8,12,16],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

    table = document.getElementById("mytable");

//    columns = table.rows[tabrowindex].cells[1];
//    rest = columns.innerHTML;

    clmns = table.rows[tabrowindex].cells[1];
    vlt = clmns.innerHTML;
    
    if (vlt == document.getElementById("volt").value) {
        //document.getElementById("add").style.display = "none";
        //Alert.render("Vary  DC voltage");
       document.getElementById("demo").innerHTML = "Vary  DC voltage";
        document.getElementById("volt").style.borderColor = "red";
        document.getElementById("dc").style.borderColor = "red";
    }

//    if (r == rest) {
//        document.getElementById("add").style.display = "none";
//        Alert.render("Vary the resistance value");
//        //document.getElementById("dltr").innerHTML="Same resistance value required for linear graph";
//    }

//    else {
//        document.getElementById("add").style.display = "block";
//
//    }
}
    