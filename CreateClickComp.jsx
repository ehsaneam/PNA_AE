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
createClick(activeComp, 15.0+22.0/30.0, [1584.0, 140.0, 0.0]);
createClick(activeComp, 20.0+22.0/30.0, [1245.5, 513.0, 0.0]);
createClick(activeComp, 23.0+26.0/30.0, [1076.0, 766.8, 0.0]);
createClick(activeComp, 25.0+19.0/30.0, [617.0, 732.8, 0.0]);
createClick(activeComp, 27.0, [657.0, 932.8, 0.0]);
createClick(activeComp, 29.0+14.0/30.0, [1075.8, 206.8, 0.0]);
createClick(activeComp, 37.0+21.0/30.0, [773.8, 361.3, 0.0]);
createClick(activeComp, 44.0+24.0/30.0, [776.8, 480.8, 0.0]);
createClick(activeComp, 48.0+4.0/30.0, [858.8, 437.3, 0.0]);
createClick(activeComp, 57.0+20.0/30.0, [1193.25, 621.25, 0.0]);
createClick(activeComp, 60+13/30, [1350.25, 410.75, 0.0]);
createClick(activeComp, 63.0+8.0/30.0, [759.3, 429.25, 0.0]);
createClick(activeComp, 66.0+9.0/30.0, [451.25, 168.25, 0.0]);
createClick(activeComp, 67.0+16.0/30.0, [593.25, 346.75, 0.0]);
createClick(activeComp, 68.0+22.0/30.0, [795.25, 350.75, 0.0]);
createClick(activeComp, 71.0+11.0/30.0 [1187.25, 682.75, 0.0]);
createClick(activeComp, 73.0+8.0/30.0, [684.25, 635.8, 0.0]);
createClick(activeComp, 76.0+15.0/30.0, [745.25, 359.25, 0.0]);
createClick(activeComp, 89.0+22.0/30.0, [359.75, 470.25, 0.0]);
createClick(activeComp, 93.0+22.0/30.0, [359.75, 470.25, 0.0]);
createClick(activeComp, 97.0+29.0/30.0, [1523.75, 515.25, 0.0]);
createClick(activeComp, 101.0+23.0/30.0, [1523.75, 515.25, 0.0]);
createClick(activeComp, 105.0+24.0/30.0, [417.75, 633.25, 0.0]);
createClick(activeComp, 117.0+29.0/30.0, [1580.25, 140.75, 0.0]);
createClick(activeComp, 159.0+9.0/30.0, [1026.25, 432.75, 0.0]);