#include "Label2_Functions.jsx"

var effect_duration = 1.0;
var rect_w = 1000; 
var label_main = "Loopback Demonstration"

var ml_count = 3;                        //mini label count
var ml_start=[2.0, 12.0 + 7.0/30.0, 18.0 + 12.0/30.0];       //mini label start time
var ml_duration = [10.0, 5.0 + 5.0/30.0, 6.0];  //mini label duration
var ml_end = 1.0;                       //last mini label ending
var ml_text = ["Generate Sine Waveform on Dev2, Spectrum on Dev1", "I/Q Oscilloscope Mode", 
               "I/Q Trig Level"]; //text array

var comp_duration = ml_start[ml_start.length-1] + ml_duration[ml_duration.length-1] + ml_end;

var activeComp = createComposition(comp_duration, label_main, rect_w, ml_count);

//Delaying 1 frame is used for preventing revalue keyframes accidentally.

//-------------------------------- Label ----------------------------------
var layer = activeComp.layer(1);

//~ Mask
var item = layer.property("Masks").property("Mask 1").property("Mask Path");
setMaskPath(item,  0.0  + 18.0/30.0, -35.0, -35.0, rect_w);
setMaskPath(item, 59.0  + 11.0/30.0, -35.0, -35.0, rect_w);
setKeyTime (item,  0.0  + 18.0/30.0, 18.0/30.0*effect_duration);
setKeyTime (item, 59.0  + 11.0/30.0, comp_duration - 19.0/30.0*effect_duration);
setKeyTime (item, 59.0  + 29.0/30.0, comp_duration -  1.0/30.0);

//~ Text
item = layer.property("Text").property("Source Text");
item.setValue(label_main);

//-------------------------------- Bar1 ----------------------------------
layer = activeComp.layer(ml_count+2);

//~ Position
item = layer.property("Transform").property("Position");
item.setValueAtTime( 0.0 + 18.0/30, [rect_w, 90.0]);
item.setValueAtTime(59.0 + 29.0/30.0, [rect_w, 90.0]);
setKeyTime(item,  0.0 + 18.0/30.0, 18.0/30.0*effect_duration);
setKeyTime(item,  1.0 +  0.0/30.0, (1.0 + 0.0/30.0)*effect_duration);
setKeyTime(item, 59.0 + 11.0/30.0, comp_duration - 19.0/30.0*effect_duration);
setKeyTime(item, 59.0 + 29.0/30.0, comp_duration -  1.0/30.0);

//-------------------------------- Background ----------------------------------
layer = activeComp.layer(ml_count+4);

//~ Mask
item = layer.property("Masks").property("Mask 1").property("Mask Path");
setMaskPath(item,  0.0 + 18.0/30.0, 0.0, 0.0, rect_w);
setMaskPath(item, 59.0 + 11.0/30.0, 0.0, 0.0, rect_w);
setMaskPath(item, 59.0 + 29.0/30.0, rect_w-5.0 , 0.0, 5.0);
setKeyTime(item,  0.0 + 18.0/30.0, (0.0+18.0/30.0)*effect_duration);
setKeyTime(item, 59.0 + 11.0/30.0, comp_duration - 19.0/30.0*effect_duration);
setKeyTime(item, 59.0 + 29.0/30.0, comp_duration -  1.0/30.0);

//-------------------------------- MiniLabel# ----------------------------------
for( j=0 ; j<ml_count ; j++ ) 
{
    var start_time = ml_start[ml_count-j-1];
    var end_time = start_time + ml_duration[ml_count-j-1];
    
    $.writeln(start_time, " ", end_time, " j=", j);
    //~ MiniLabel[j]
    
    // must be done in backward!!
    layer = activeComp.layer(1+ml_count-j);
    
    //~ Mask
    item = layer.property("Masks").property("Mask 1").property("Mask Path");
    setMaskPath(item, start_time, -37.0, -110.0, 2.0);
    setMaskPath(item, start_time + 18.0/30.0*effect_duration, -37.0, -110.0, rect_w);
    setMaskPath(item, end_time - 2.0/30.0 - 18.0/30.0*effect_duration, -37.0, -110.0, rect_w);
    setMaskPath(item, end_time - 2.0/30.0, rect_w-40.0, -110.0, 3.0);
    
    //~ Text
    layer.name = ml_text[ml_count-j-1];
    item = layer.property("Text").property("Source Text");
    item.setValue(ml_text[ml_count-j-1]);

//-------------------------------- Bar2 ----------------------------------
    layer = activeComp.layer(ml_count+3);
    
    //~ Position
    item = layer.property("Transform").property("Position");
    item.setValueAtTime(end_time - 1.0/30.0, [0.0, 90.0]);
    item.setValueAtTime(end_time - 2.0/30.0, [rect_w+10, 90.0]);
    item.setValueAtTime(end_time - 2.0/30.0 - 18.0/30.0*effect_duration, [0.0, 90.0]);
    item.setValueAtTime(start_time + 1.0*effect_duration, [0.0, 90.0]);
    item.setValueAtTime(start_time + 18.0/30.0*effect_duration, [rect_w+10, 90.0]);
    item.setValueAtTime(start_time, [0.0, 90.0]);
    
    //~ Opacity
    item = layer.property("Transform").property("Opacity");
    item.setValueAtTime(end_time - 3.0/30.0, 100);
    item.setValueAtTime(end_time - 2.0/30.0, 0);
    item.setValueAtTime(end_time - 1.0/30.0, 0);
    item.setValueAtTime(end_time, 100);
}

//-------------------------------- Bar2 ----------------------------------
layer = activeComp.layer(ml_count+3);

//~ Opacity
item = layer.property("Transform").property("Opacity");
item.setValueAtTime(ml_start[0] - 1.0/30.0, 0);
item.setValueAtTime(ml_start[0] - 0.0/30.0, 100);
item.setValueAtTime(comp_duration - 19.0/30.0*effect_duration - 1.0/30.0, 100);
item.setValueAtTime(comp_duration - 19.0/30.0*effect_duration, 0);