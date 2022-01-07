function getCompIndex(name)
{
    for (var i = 1; i <= app.project.numItems; i ++) 
    {
        if ((app.project.item(i) instanceof CompItem) && (app.project.item(i).name === name)) 
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
    var newComp = app.project.items.addComp(label_name, 1920, 1080, 1, duration, 29.97);
    
    return newComp;
}

function createClick(comp, time, position)
{
     //~ AddClickComposition
    var clickCompIndex = getCompIndex ("ClickTemplate");
    var clickComp = app.project.item(clickCompIndex);
    var layer = comp.layers.add(clickComp); // Note that the comp must be item(1)
    
    var item = layer.property("Transform").property("Position");
//~     $.writeln(item.value);
    item.setValue(position);
    layer.startTime = time;
}

var comp_duration = 127.0;
var comp_label = "clickComp";
//~ $.writeln(activeComp.effect_duration);
var activeComp = createComposition (comp_duration, comp_label);

//~ createClick(activeComp, 10.0+20.0/30.0, [209.5, 307.5, 0.0]);
createClick(activeComp, 10.0+25.0/30.0, [147.8, 307.3, 0.0]);
createClick(activeComp, 14.0+15.0/30.0, [279.8, 307.5, 0.0]);
createClick(activeComp, 20.0+9.0/30.0, [611.8, 330.0, 0.0]);
createClick(activeComp, 21.0+19.0/30.0, [234.5, 307.25, 0.0]);
createClick(activeComp, 23.0+12.0/30.0, [614.25, 353.25, 0.0]);
createClick(activeComp, 25.0+15.0/30.0, [618.0, 325.0, 0.0]);
createClick(activeComp, 27.0+22.0/30.0, [937.75, 260.25, 0.0]);
createClick(activeComp, 10.0+25.0/30.0, [1611.75, 601.25, 0.0]);
createClick(activeComp, 14.0+8.0/30, [1619.75, 637.5, 0.0]);
createClick(activeComp, 21.0+16.0/30.0, [1828.5, 566.25, 0.0]);
createClick(activeComp, 24.0+16.0/30.0, [1727.75, 301.375, 0.0]);
createClick(activeComp, 27.0+12.0/30.0, [1684.5, 308.375, 0.0]);
createClick(activeComp, 28.0+25.0/30.0, [1864.0, 259.875, 0.0]);

createClick(activeComp, 33.0+14.0/30.0, [892.0, 945.375, 0.0]);
createClick(activeComp, 38.0+25.0/30.0, [1600.0, 509.375, 0.0]);
createClick(activeComp, 41.0+16.0/30.0, [1594.0, 966.375, 0.0]);
createClick(activeComp, 45.0+6.0/30.0, [1163.5, 227.375, 0.0]);
createClick(activeComp, 46.0+2.0/30.0, [1172.0, 262.875, 0.0]);
createClick(activeComp, 46.0+26.0/30.0, [1148.5, 225.875, 0.0]);
createClick(activeComp, 47.0+26.0/30.0, [1158.0, 709.875, 0.0]);
createClick(activeComp, 49.0+22.0/30.0, [1201.0, 903.375, 0.0]);
createClick(activeComp, 52.0+23.0/30.0, [1545.0, 139.375, 0.0]);
createClick(activeComp, 55.0+12.0/30.0, [1872.0, 35.875, 0.0]);
createClick(activeComp, 58.0+3.0/30.0, [659.5, 195.875, 0.0]);
createClick(activeComp, 62.0+11.0/30.0, [559.5, 204.875, 0.0]);
createClick(activeComp, 64.0+26.0/30.0, [1579.75, 139.625, 0.0]);
createClick(activeComp, 65.0+.0/30.0, [1057.25, 586.375, 0.0]);