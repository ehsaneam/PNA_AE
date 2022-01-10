function getCompIndex(name)
{
    for( var i=1 ; i<=app.project.numItems ; i++ )
    {
        if( (app.project.item(i) instanceof CompItem) && (app.project.item(i).name === name) )
        {
            return i;
        }
     }
}

function setKeyTime(layer, time1, time2)
{
//~     var value = layer.valueAtTime(time1, false) 
//~     $.writeln(value);
//~     $.writeln(time1);
    var index = layer.nearestKeyIndex(time1);
    var value = layer.keyValue(index);
    layer.removeKey(index);
    layer.setValueAtTime(time2, value);
}

function createComposition(duration, label_name)
{
    var newComp = app.project.items.addComp(label_name, 1920, 1080, 1, duration, 30.0);
    
    return newComp;
}

function createClick(comp, time, position)
{
     //~ AddClickComposition
    var clickCompIndex = getCompIndex("ClickTemplate");
    var clickComp = app.project.item(clickCompIndex);
    var layer = comp.layers.add(clickComp); // Note that the comp must be item(1)
    
    var item = layer.property("Transform").property("Position");
//~     $.writeln(item.value);
    item.setValue(position);
    layer.startTime = time;
}

var comp_duration = 187.0;
var comp_label = "clickComp";
//~ $.writeln(activeComp.effect_duration);
var activeComp = createComposition (comp_duration, comp_label);
var offset = -1 -1.0/30.0;

//~ createClick(activeComp, 10.0+20.0/30.0, [209.5, 307.5, 0.0]);
createClick(activeComp,9+10.0/30.0 + offset, [1109.0, 350.0, 0.0]);
createClick(activeComp,13+7.0/30.0 + offset, [284.0, 178.0, 0.0]);
createClick(activeComp,15+27.0/30.0 + offset, [1413.0, 383.0, 0.0]);
createClick(activeComp,23+12.0/30.0 + offset, [452.0, 556.0, 0.0]);
createClick(activeComp,35+22.0/30.0 + offset, [832.0, 653.0, 0.0]);
createClick(activeComp,36+16.0/30.0 + offset, [860.0, 743.0, 0.0]);
createClick(activeComp,39+17.0/30.0 + offset, [866.0, 178.0, 0.0]);
createClick(activeComp,40+20.0/30.0 + offset, [593.0, 911.0, 0.0]);
createClick(activeComp,60+1.0/30.0 + offset, [695.0, 580.0, 0.0]);
createClick(activeComp,62+1.0/30.0 + offset, [257.0, 129.0, 0.0]);
createClick(activeComp,62+25.0/30.0 + offset, [270.0, 133.0, 0.0]);
createClick(activeComp,64+27.0/30.0 + offset, [399.0, 386.0, 0.0]);
createClick(activeComp,68+8.0/30.0 + offset, [1716.0, 118.0, 0.0]);
createClick(activeComp,69+19.0/30.0 + offset, [1377.0, 326.0, 0.0]);
createClick(activeComp,70+25.0/30.0 + offset, [1591.0, 253.0, 0.0]);
createClick(activeComp,73+14.0/30.0 + offset, [1870.0, 33.0, 0.0]);
createClick(activeComp,75+2.0/30.0 + offset, [604.0, 405.0, 0.0]);
createClick(activeComp,81+12.0/30.0 + offset, [388.0, 182.0, 0.0]);
createClick(activeComp,84+12.0/30.0 + offset, [1405.0, 384.0, 0.0]);
createClick(activeComp,92+3.0/30.0 + offset, [1721.0, 116.0, 0.0]);
createClick(activeComp,93+19.0/30.0 + offset, [1405.0, 267.0, 0.0]);
createClick(activeComp,94+11.0/30.0 + offset, [1637.0, 387.0, 0.0]);
createClick(activeComp,96+13.0/30.0 + offset, [1872.0, 42.0, 0.0]);
createClick(activeComp,98+13.0/30.0 + offset, [1406.0, 382.0, 0.0]);
createClick(activeComp,111+1.0/30.0 + offset, [924.0, 149.0, 0.0]);
createClick(activeComp,114+8.0/30.0 + offset, [1022.0, 269.0, 0.0]);
createClick(activeComp,115+27.0/30.0 + offset, [1055.0, 364.0, 0.0]);
createClick(activeComp,132+21.0/30.0 + offset, [794.0, 486.0, 0.0]);
createClick(activeComp,137+14.0/30.0 + offset, [862.0, 438.0, 0.0]);
createClick(activeComp,142+17.0/30.0 + offset, [1026.0, 269.0, 0.0]);
createClick(activeComp,144+4.0/30.0 + offset, [1042.0, 257.0, 0.0]);
createClick(activeComp,146+8.0/30.0 + offset, [1024.0, 277.0, 0.0]);
createClick(activeComp,149+18.0/30.0 + offset, [1290.0, 730.0, 0.0]);
createClick(activeComp,155+20.0/30.0 + offset, [1178.0, 487.0, 0.0]);
createClick(activeComp,167+12.0/30.0 + offset, [1050.0, 366.0, 0.0]);
createClick(activeComp,168+9.0/30.0 + offset, [1170.0, 610.0, 0.0]);
createClick(activeComp,176+20.0/30.0 + offset, [1426.0, 182.0, 0.0]);
createClick(activeComp,178+29.0/30.0 + offset, [889.0, 121.0, 0.0]);
createClick(activeComp,180+12.0/30.0 + offset, [453.0, 556.0, 0.0]);
createClick(activeComp,181+28.0/30.0 + offset, [1748.0, 112.0, 0.0]);
createClick(activeComp,183+3.0/30.0 + offset, [1307.0, 557.0, 0.0]);
createClick(activeComp,186+29.0/30.0 + offset, [2781.0, 620.0, 0.0]);