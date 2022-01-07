#include "Label1_Functions.jsx"

function dumpPropTree(rootObj, nestingLevel) 
{  
    var countProps = rootObj.numProperties;

    for (var propIndex=1; propIndex <= countProps; propIndex++)
    {
        var prop = rootObj.property(propIndex);
        $.writeln(Array(nestingLevel*4).join(" ") + "[" + nestingLevel + "-" + propIndex + "] " + "matchName: \"" + prop.matchName + "\", name: \"" + prop.name + "\"");

        if (prop.numProperties > 0)
            dumpPropTree(prop, nestingLevel+1);
    }
}

var project = app.project;
var activeComp = project.activeItem;
var duration = 3;
var open_duration = duration;
var close_duration = duration*13.0/18.0;
var comp_duration = activeComp.duration;
var rect_w = 375.0;
$.writeln(activeComp.duration);

//
//$.writeln(layer.property("Text").property("Source Text").matchName);//property(4).matchName);
//~ $.writeln(layer.property("Transform").property("Position").keyTime(1));//property(4).matchName);

//~ layer.property("Transform").property("Position").setValueAtKey(1, [126, 59.75, 0]);
//~ MotionBar

//~Background
//rect_w = 910

//~ dumpPropTree(fill.property("Colors"), 0); 

var layer = activeComp.layer(1);
var item = layer.property("Text");
$.writeln(layer.property("Text").property("Source Text").value);//property(4).matchName);

//setMaskPath(item, 0.0, 0.0, 0.0, 0.0);
//setMaskPath(item,18.0/30.0, 0.0, 0.0, rect_w);