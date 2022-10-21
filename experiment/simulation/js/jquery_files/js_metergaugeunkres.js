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
                max: 10,
                intervals: [2, 4, 6, 8],
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
                max: 4,
                intervals: [1, 2, 3, 4],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});

var r, rs, id,vc;
var runk=2; // 2 kohm
var rtotal;
var c = 0.026, n = 2, is = 0.000000000001;
var table, clmns, vlt;
//-------------------------------------------------- Simulation----------------------------------------------------------------//

function check() {

    r = document.getElementById("res").value; // in kilo ohm

    //rs = r * 1000; // in ohm 

rtotal=parseInt(r)+parseInt(runk);

    vc = document.getElementById("dc").value; // volt
id=vc/rtotal;
document.getElementById("amp").value = id.toPrecision(3); //Ammeter reading //
    
vr2=parseFloat(id)*parseInt(runk);
document.getElementById("volt").value=vr2;

    s1[0] = parseFloat(document.getElementById('volt').value);
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 10,
                intervals: [2, 4, 6, 8],
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
                max: 4,
                intervals: [1, 2, 3, 4],
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
        // document.getElementById("add").style.display = "none";
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
    

