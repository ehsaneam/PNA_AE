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

function setKeyTime(item, time1, time2)
{
    var index = item.nearestKeyIndex(time1);
    var value = item.keyValue(index);
    item.removeKey(index);
    item.setValueAtTime(time2, value);
}

function createComposition(duration, comp_name, rect_w,mini_label_count)
{
    var newComp = app.project.items.addComp(comp_name, rect_w, 180, 1, duration, 30);
    var labelCompIndex = getCompIndex ("Label3");
    var labelComp = app.project.item(labelCompIndex);
   
    //~ Background
    var layer = labelComp.layer(5);
    layer.copyToComp(newComp);
    
    //~ Bar2
    layer = labelComp.layer(4);
    layer.copyToComp(newComp);

    //~ Bar1
    layer = labelComp.layer(3);
    layer.copyToComp(newComp);
    
    //~ MiniLabel
    for( i=0 ; i<mini_label_count ; i++ ) 
    {
        layer = labelComp.layer(2);
        layer.copyToComp(newComp);
//~         layer = newComp.layer(1);
//~         var value = mini_label_count-i;
//~         layer.name = "MiniLabel " + value.toString();
//~         $.writeln(layer.name);
    }
    
    //~ Label
    layer = labelComp.layer(1);
    layer.copyToComp(newComp);
    
    newComp.bgColor = [10/255, 10/255, 10/255];
    
    return newComp;
}

function setMaskPath(item, time, x1, y1, width)
{
    var myShape = item.value;

    var height = 180; //px

    var x2 = x1 + width; //px
    var y2 = y1 + height; //px

    myShape.vertices = [ [x1, y1], [x1, y2], [x2, y2], [x2, y1] ];
    myShape.closed = true;
    item.setValueAtTime(time, myShape);
}