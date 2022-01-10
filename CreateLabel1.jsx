#include "Label1_Functions.jsx"

var comp_duration = 6.0;
var effect_duration = 1.0;
var label_text = "Responsive UI";
var open_duration = effect_duration;
var close_duration = effect_duration*13.0/18.0;
var activeComp = createComposition(comp_duration, label_text);
var project = app.project;
var layer = activeComp.layer(1);
var rect_w = 570.0;

//-------------------------------- Bar----------------------------------
layer = activeComp.layer(1);

//~ Position
item = layer.property("Transform").property("Position");

var value = [rect_w, 0.0];
item.setValueAtTime(18.0/30.0, value);
item.setValueAtTime(19.0/30.0, value);
item.setValueAtTime(59.0+29.0/30.0, value);

setKeyTime(item, 59.0+29.0/30.0, comp_duration - close_duration*1.0/30);
setKeyTime(item, 59.0+17.0/30.0, comp_duration - close_duration*13.0/30);
setKeyTime(item, 1.0, open_duration);
setKeyTime(item, 19.0/30.0, open_duration*19.0/30.0);
setKeyTime(item, 0.0, 0);

//----------------------------- Label--------------------------------
layer = activeComp.layer(2);

//~ Mask
item = layer.property("Masks").property("Mask 1").property("Mask Path");

setMaskPath(item, 0.0, -38.0, -75.5, 0.0);
setMaskPath(item,18.0/30.0, -38.0, -75.5, rect_w);
setMaskPath(item,59.0+17.0/30.0, -38.0, -75.5, rect_w);
setMaskPath(item, 59.0+29.0/30.0, rect_w-40.0, -75.5, 2.0);

setKeyTime(item, 18.0/30, open_duration*18.0/30);
setKeyTime(item, 59.0+17.0/30.0, comp_duration - close_duration*13.0/30);
setKeyTime(item, 59.0+29.0/30.0, comp_duration - close_duration*1.0/30);


//~ Text
item = layer.property("Text").property("Source Text");
item.setValue(label_text);

//------------------------- Background---------------------------
layer = activeComp.layer(3);

//~ Mask
item = layer.property("Masks").property("Mask 1").property("Mask Path");
setMaskPath(item, 0.0, 0.0, 0.0, 0.0);
setMaskPath(item,18.0/30.0, 0.0, 0.0, rect_w);
setMaskPath(item,59.0 + 17.0/30.0, 0.0, 0.0, rect_w);
setMaskPath(item,59.0 + 29.0/30.0, rect_w, 0.0, 2.0);

setKeyTime(item, 18.0/30, open_duration*18.0/30);
setKeyTime(item, 59.0 + 17.0/30.0, comp_duration - close_duration*13.0/30);
setKeyTime(item, 59.0 + 29.0/30.0, comp_duration - close_duration*1.0/30);

//~ Size
item = layer.property("Contents").property("Rectangle 1").property("Contents").property("Rectangle Path 1").property("Size");
var value = [rect_w, 120.0];
item.setValueAtTime(59+29/30, value);

//~ Position
item = layer.property("Contents").property("Rectangle 1").property("Contents").property("Rectangle Path 1").property("Position");
value = [-(500-rect_w/2.0), 0.0];
item.setValueAtTime(59+29/30, value);

