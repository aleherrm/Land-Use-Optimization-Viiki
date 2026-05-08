var size = 0;
var placement = 'point';
function categories_SoilbodiesViikki_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Anthrosols (Technosols)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(231,54,113,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Arenic Podzols':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(159,35,200,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dystric Histosols':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(208,132,120,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dystric Leptosols':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(19,224,204,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Endogleyic Podzols':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(171,219,126,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Histic Gleysols (Hyperhumic)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(211,220,39,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Histic Gleysols(Clayic)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(212,153,70,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nudilithic Leptosols':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(120,88,200,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sapric Histosols':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(102,125,240,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Stagnic Regosols':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(131,224,127,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Umbric Gleysols':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(78,216,138,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vertic Luvic Stagnosols':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.95}),fill: new ol.style.Fill({color: 'rgba(209,51,175,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SoilbodiesViikki_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Soilbody");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_SoilbodiesViikki_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
