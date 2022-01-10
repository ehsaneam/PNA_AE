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
    var index = layer.nearestKeyIndex(time1);
    var value = layer.keyValue(index);
    layer.removeKey(index);
    layer.setValueAtTime(time2, value);
}

function createComposition(duration, label_name)
{
    var newComp = app.project.items.addComp(label_name, 1100, 120, 1, duration, 30.0);
    var labelCompIndex = getCompIndex ("Label1");
    var labelComp = app.project.item(labelCompIndex);
    newComp.bgColor = [0.0,0.0,1.0];
    
    //~ Bar
    var layer = labelComp.layer(3);
    layer.copyToComp(newComp);

    //~ Label
    var layer = labelComp.layer(2);
    layer.copyToComp(newComp);

    //~ Background
    var layer = labelComp.layer(1);
    layer.copyToComp(newComp);
    
    return newComp;
}

function setMaskPath(item, time, x1, y1, width)
{
    var myShape = item.value;

    var height = 120; //px

    var x2 = x1 + width; //px
    var y2 = y1 + height; //px

    myShape.vertices = [ [x1, y1], [x1, y2], [x2, y2], [x2, y1] ];
    myShape.closed = true;
    item.setValueAtTime(time, myShape);
}