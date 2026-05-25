var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SoilbodiesViikki_3 = new ol.format.GeoJSON();
var features_SoilbodiesViikki_3 = format_SoilbodiesViikki_3.readFeatures(json_SoilbodiesViikki_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoilbodiesViikki_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoilbodiesViikki_3.addFeatures(features_SoilbodiesViikki_3);
var lyr_SoilbodiesViikki_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoilbodiesViikki_3, 
                style: style_SoilbodiesViikki_3,
                popuplayertitle: 'Soilbodies Viikki',
                interactive: true,
    title: 'Soilbodies Viikki<br />\
    <img src="styles/legend/SoilbodiesViikki_3_0.png" /> Anthrosols (Technosols)<br />\
    <img src="styles/legend/SoilbodiesViikki_3_1.png" /> Arenic Podzols<br />\
    <img src="styles/legend/SoilbodiesViikki_3_2.png" /> Dystric Histosols<br />\
    <img src="styles/legend/SoilbodiesViikki_3_3.png" /> Dystric Leptosols<br />\
    <img src="styles/legend/SoilbodiesViikki_3_4.png" /> Endogleyic Podzols<br />\
    <img src="styles/legend/SoilbodiesViikki_3_5.png" /> Histic Gleysols (Hyperhumic)<br />\
    <img src="styles/legend/SoilbodiesViikki_3_6.png" /> Histic Gleysols(Clayic)<br />\
    <img src="styles/legend/SoilbodiesViikki_3_7.png" /> Nudilithic Leptosols<br />\
    <img src="styles/legend/SoilbodiesViikki_3_8.png" /> Sapric Histosols<br />\
    <img src="styles/legend/SoilbodiesViikki_3_9.png" /> Stagnic Regosols<br />\
    <img src="styles/legend/SoilbodiesViikki_3_10.png" /> Umbric Gleysols<br />\
    <img src="styles/legend/SoilbodiesViikki_3_11.png" /> Vertic Luvic Stagnosols<br />' });
var format_EcozonesViikki_4 = new ol.format.GeoJSON();
var features_EcozonesViikki_4 = format_EcozonesViikki_4.readFeatures(json_EcozonesViikki_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EcozonesViikki_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EcozonesViikki_4.addFeatures(features_EcozonesViikki_4);
var lyr_EcozonesViikki_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EcozonesViikki_4, 
                style: style_EcozonesViikki_4,
                popuplayertitle: 'Ecozones Viikki',
                interactive: true,
    title: 'Ecozones Viikki<br />\
    <img src="styles/legend/EcozonesViikki_4_0.png" /> Boreal coniferous forest<br />\
    <img src="styles/legend/EcozonesViikki_4_1.png" /> Temperate continental forest<br />' });
var format_CLCViiki2018_5 = new ol.format.GeoJSON();
var features_CLCViiki2018_5 = format_CLCViiki2018_5.readFeatures(json_CLCViiki2018_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLCViiki2018_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLCViiki2018_5.addFeatures(features_CLCViiki2018_5);
var lyr_CLCViiki2018_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLCViiki2018_5, 
                style: style_CLCViiki2018_5,
                popuplayertitle: 'CLC Viiki 2018',
                interactive: true,
    title: 'CLC Viiki 2018<br />\
    <img src="styles/legend/CLCViiki2018_5_0.png" /> Coniferous forest<br />\
    <img src="styles/legend/CLCViiki2018_5_1.png" /> Construction sites<br />\
    <img src="styles/legend/CLCViiki2018_5_2.png" /> Discontinuous urban fabric<br />\
    <img src="styles/legend/CLCViiki2018_5_3.png" /> Green urban areas<br />\
    <img src="styles/legend/CLCViiki2018_5_4.png" /> Industrial or commercial units<br />\
    <img src="styles/legend/CLCViiki2018_5_5.png" /> Land principally occupied by agriculture, with significant areas of natural vegetation<br />\
    <img src="styles/legend/CLCViiki2018_5_6.png" /> Mixed forest<br />\
    <img src="styles/legend/CLCViiki2018_5_7.png" /> Non-irrigated arable land<br />\
    <img src="styles/legend/CLCViiki2018_5_8.png" /> Road and rail networks and associated land<br />\
    <img src="styles/legend/CLCViiki2018_5_9.png" /> Salt marshes<br />\
    <img src="styles/legend/CLCViiki2018_5_10.png" /> Sea and ocean<br />' });
var format_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6 = new ol.format.GeoJSON();
var features_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6 = format_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6.readFeatures(json_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6.addFeatures(features_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6);
var lyr_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6, 
                style: style_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6,
                popuplayertitle: 'Photovoltaic Potential Viiki Field Avg. [kWh/ kWp]',
                interactive: true,
    title: 'Photovoltaic Potential Viiki Field Avg. [kWh/ kWp]<br />\
    <img src="styles/legend/PhotovoltaicPotentialViikiFieldAvgkWhkWp_6_0.png" /> 2.825 - 2.842<br />\
    <img src="styles/legend/PhotovoltaicPotentialViikiFieldAvgkWhkWp_6_1.png" /> 2.842 - 2.855<br />\
    <img src="styles/legend/PhotovoltaicPotentialViikiFieldAvgkWhkWp_6_2.png" /> 2.855 - 2.859<br />\
    <img src="styles/legend/PhotovoltaicPotentialViikiFieldAvgkWhkWp_6_3.png" /> 2.859 - 2.8656<br />\
    <img src="styles/legend/PhotovoltaicPotentialViikiFieldAvgkWhkWp_6_4.png" /> 2.8656 - 2.873<br />' });

var format_ViikiSustainability_6 = new ol.format.GeoJSON();
var features_ViikiSustainability_6 = format_ViikiSustainability_6.readFeatures(json_ViikiSustainability_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViikiSustainability_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViikiSustainability_6.addFeatures(features_ViikiSustainability_6);
var lyr_ViikiSustainability_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViikiSustainability_6, 
                style: style_ViikiSustainability_6,
                popuplayertitle: 'Viiki Sustainability',
                interactive: true,
    title: 'Viiki Sustainability<br />\
    <img src="styles/legend/ViikiSustainability_6_0.png" /> Very sustainable<br />\
    <img src="styles/legend/ViikiSustainability_6_1.png" /> Sustainable<br />\
    <img src="styles/legend/ViikiSustainability_6_2.png" /> Moderate impact<br />\
    <img src="styles/legend/ViikiSustainability_6_3.png" /> High impact<br />\
    <img src="styles/legend/ViikiSustainability_6_4.png" /> Very high impact<br />' });
var format_ViikiProfitability_7 = new ol.format.GeoJSON();
var features_ViikiProfitability_7 = format_ViikiProfitability_7.readFeatures(json_ViikiProfitability_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViikiProfitability_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViikiProfitability_7.addFeatures(features_ViikiProfitability_7);
var lyr_ViikiProfitability_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViikiProfitability_7, 
                style: style_ViikiProfitability_7,
                popuplayertitle: 'Viiki Profitability',
                interactive: true,
    title: 'Viiki Profitability<br />\
    <img src="styles/legend/ViikiProfitability_7_0.png" /> Very profitable<br />\
    <img src="styles/legend/ViikiProfitability_7_1.png" /> Profitable<br />\
    <img src="styles/legend/ViikiProfitability_7_2.png" /> Moderate profitability<br />\
    <img src="styles/legend/ViikiProfitability_7_3.png" /> Low profitability<br />\
    <img src="styles/legend/ViikiProfitability_7_4.png" /> Very low profitability<br />' });
var format_ViikiCrops_8 = new ol.format.GeoJSON();
var features_ViikiCrops_8 = format_ViikiCrops_8.readFeatures(json_ViikiCrops_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViikiCrops_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViikiCrops_8.addFeatures(features_ViikiCrops_8);
var lyr_ViikiCrops_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViikiCrops_8, 
                style: style_ViikiCrops_8,
                popuplayertitle: 'Viiki Crops',
                interactive: true,
    title: 'Viiki Crops<br />\
    <img src="styles/legend/ViikiCrops_8_0.png" /> Broad bean<br />\
    <img src="styles/legend/ViikiCrops_8_1.png" /> Environmental agreement area (permanent grassland)<br />\
    <img src="styles/legend/ViikiCrops_8_2.png" /> Environmental agreement area (wooded/other)<br />\
    <img src="styles/legend/ViikiCrops_8_3.png" /> Fallow<br />\
    <img src="styles/legend/ViikiCrops_8_4.png" /> Feed barley<br />\
    <img src="styles/legend/ViikiCrops_8_5.png" /> Fodder grass<br />\
    <img src="styles/legend/ViikiCrops_8_6.png" /> Garden<br />\
    <img src="styles/legend/ViikiCrops_8_7.png" /> Green fallow (grass & meadow)<br />\
    <img src="styles/legend/ViikiCrops_8_8.png" /> Maize<br />\
    <img src="styles/legend/ViikiCrops_8_9.png" /> Natural pasture and meadow<br />\
    <img src="styles/legend/ViikiCrops_8_10.png" /> Oats<br />\
    <img src="styles/legend/ViikiCrops_8_11.png" /> Ornamental plants (<5 yrs)<br />\
    <img src="styles/legend/ViikiCrops_8_12.png" /> Other berry crops<br />\
    <img src="styles/legend/ViikiCrops_8_13.png" /> Other vegetables<br />\
    <img src="styles/legend/ViikiCrops_8_14.png" /> Rhubarb<br />\
    <img src="styles/legend/ViikiCrops_8_15.png" /> Spring rapeseed<br />\
    <img src="styles/legend/ViikiCrops_8_16.png" /> Spring wheat<br />\
    <img src="styles/legend/ViikiCrops_8_17.png" /> Uncultivated<br />\
    <img src="styles/legend/ViikiCrops_8_18.png" /> Unknown<br />' });
var format_ViikiLandUseOptimization_9 = new ol.format.GeoJSON();
var features_ViikiLandUseOptimization_9 = format_ViikiLandUseOptimization_9.readFeatures(json_ViikiLandUseOptimization_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViikiLandUseOptimization_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViikiLandUseOptimization_9.addFeatures(features_ViikiLandUseOptimization_9);
var lyr_ViikiLandUseOptimization_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViikiLandUseOptimization_9, 
                style: style_ViikiLandUseOptimization_9,
                popuplayertitle: 'Viiki Land Use Optimization',
                interactive: true,
    title: 'Viiki Land Use Optimization<br />\
    <img src="styles/legend/ViikiLandUseOptimization_9_0.png" /> Action needed<br />\
    <img src="styles/legend/ViikiLandUseOptimization_9_1.png" /> Action advisable<br />\
    <img src="styles/legend/ViikiLandUseOptimization_9_2.png" /> No action needed<br />' });
var format_PhotovoltaicPowerPotentialHelsinkikWhkWp_11 = new ol.format.GeoJSON();
var features_PhotovoltaicPowerPotentialHelsinkikWhkWp_11 = format_PhotovoltaicPowerPotentialHelsinkikWhkWp_11.readFeatures(json_PhotovoltaicPowerPotentialHelsinkikWhkWp_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhotovoltaicPowerPotentialHelsinkikWhkWp_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhotovoltaicPowerPotentialHelsinkikWhkWp_11.addFeatures(features_PhotovoltaicPowerPotentialHelsinkikWhkWp_11);
var lyr_PhotovoltaicPowerPotentialHelsinkikWhkWp_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PhotovoltaicPowerPotentialHelsinkikWhkWp_11, 
                style: style_PhotovoltaicPowerPotentialHelsinkikWhkWp_11,
                popuplayertitle: 'Photovoltaic Power Potential Helsinki [kWh/ kWp]',
                interactive: true,
    title: 'Photovoltaic Power Potential Helsinki [kWh/ kWp]<br />\
    <img src="styles/legend/PhotovoltaicPowerPotentialHelsinkikWhkWp_11_0.png" /> 2.792 - 2.827<br />\
    <img src="styles/legend/PhotovoltaicPowerPotentialHelsinkikWhkWp_11_1.png" /> 2.827 - 2.841<br />\
    <img src="styles/legend/PhotovoltaicPowerPotentialHelsinkikWhkWp_11_2.png" /> 2.841 - 2.859<br />\
    <img src="styles/legend/PhotovoltaicPowerPotentialHelsinkikWhkWp_11_3.png" /> 2.859 - 2.875<br />\
    <img src="styles/legend/PhotovoltaicPowerPotentialHelsinkikWhkWp_11_4.png" /> 2.875 - 2.963<br />' });

var lyr_NDVIViiki_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI Viiki<br />\
    <img src="styles/legend/NDVIViiki_10_0.png" /> 0.0<br />\
    <img src="styles/legend/NDVIViiki_10_1.png" /> 0.1<br />\
    <img src="styles/legend/NDVIViiki_10_2.png" /> 0.2<br />\
    <img src="styles/legend/NDVIViiki_10_3.png" /> 0.3<br />\
    <img src="styles/legend/NDVIViiki_10_4.png" /> 0.4<br />\
    <img src="styles/legend/NDVIViiki_10_5.png" /> 0.6<br />\
    <img src="styles/legend/NDVIViiki_10_6.png" /> 0.7<br />\
    <img src="styles/legend/NDVIViiki_10_7.png" /> 0.8<br />\
    <img src="styles/legend/NDVIViiki_10_8.png" /> 0.9<br />\
    <img src="styles/legend/NDVIViiki_10_9.png" /> 1.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVIViiki_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2778599.657298, 8440404.519550, 2797400.914271, 8454571.359983]
        })
    });
var lyr_SoilMoistureViiki_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SoilMoisture Viiki<br />\
    <img src="styles/legend/SoilMoistureViiki_11_0.png" /> 299.97<br />\
    <img src="styles/legend/SoilMoistureViiki_11_1.png" /> 304.15<br />\
    <img src="styles/legend/SoilMoistureViiki_11_2.png" /> 308.33<br />\
    <img src="styles/legend/SoilMoistureViiki_11_3.png" /> 312.51<br />\
    <img src="styles/legend/SoilMoistureViiki_11_4.png" /> 316.69<br />\
    <img src="styles/legend/SoilMoistureViiki_11_5.png" /> 320.87<br />\
    <img src="styles/legend/SoilMoistureViiki_11_6.png" /> 325.05<br />\
    <img src="styles/legend/SoilMoistureViiki_11_7.png" /> 329.23<br />\
    <img src="styles/legend/SoilMoistureViiki_11_8.png" /> 333.41<br />\
    <img src="styles/legend/SoilMoistureViiki_11_9.png" /> 337.59<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SoilMoistureViiki_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2778421.599769, 8440510.200392, 2797295.403098, 8454694.623931]
        })
    });
var lyr_PloughingIndicator2023Viiki_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ploughing Indicator 2023 Viiki<br />\
    <img src="styles/legend/PloughingIndicator2023Viiki_12_0.png" /> 1: 1 year since last indication of ploughing<br />\
    <img src="styles/legend/PloughingIndicator2023Viiki_12_1.png" /> 2: 2 years since last indication of ploughing<br />\
    <img src="styles/legend/PloughingIndicator2023Viiki_12_2.png" /> 3: 3 years since last indication of ploughing<br />\
    <img src="styles/legend/PloughingIndicator2023Viiki_12_3.png" /> 4:  4 years since last indication of ploughing<br />\
    <img src="styles/legend/PloughingIndicator2023Viiki_12_4.png" /> 5: 5 years since last indication of ploughing<br />\
    <img src="styles/legend/PloughingIndicator2023Viiki_12_5.png" /> 6: 6 years since last indication of ploughing<br />\
    <img src="styles/legend/PloughingIndicator2023Viiki_12_6.png" /> 100: Change of herbaceous cover<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PloughingIndicator2023Viiki_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2775565.421151, 8436531.139599, 2800430.496460, 8458446.176906]
        })
    });
var lyr_SmallWoodyFeatures2021Viiki_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Small Woody Features 2021 Viiki<br />\
    <img src="styles/legend/SmallWoodyFeatures2021Viiki_13_0.png" /> SWF area<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SmallWoodyFeatures2021Viiki_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2775555.625325, 8436654.888765, 2799861.736156, 8458448.296674]
        })
    });
var lyr_Grassland2023Viiki_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Grassland 2023 Viiki<br />\
    <img src="styles/legend/Grassland2023Viiki_14_0.png" /> Grassland<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Grassland2023Viiki_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2775565.421151, 8436654.888765, 2799861.736156, 8458446.176906]
        })
    });
var lyr_ForestType2021Viiki_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Forest Type 2021 Viiki<br />\
    <img src="styles/legend/ForestType2021Viiki_15_0.png" /> broadleaved forest<br />\
    <img src="styles/legend/ForestType2021Viiki_15_1.png" /> coniferous forest<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ForestType2021Viiki_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2775565.421151, 8436531.139599, 2800430.496460, 8458446.176906]
        })
    });
var lyr_SoilMoistureViikiFields_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SoilMoisture Viiki Fields<br />\
    <img src="styles/legend/SoilMoistureViikiFields_16_0.png" /> 311.01<br />\
    <img src="styles/legend/SoilMoistureViikiFields_16_1.png" /> 313.26<br />\
    <img src="styles/legend/SoilMoistureViikiFields_16_2.png" /> 315.51<br />\
    <img src="styles/legend/SoilMoistureViikiFields_16_3.png" /> 317.76<br />\
    <img src="styles/legend/SoilMoistureViikiFields_16_4.png" /> 320.00<br />\
    <img src="styles/legend/SoilMoistureViikiFields_16_5.png" /> 322.25<br />\
    <img src="styles/legend/SoilMoistureViikiFields_16_6.png" /> 324.50<br />\
    <img src="styles/legend/SoilMoistureViikiFields_16_7.png" /> 326.74<br />\
    <img src="styles/legend/SoilMoistureViikiFields_16_8.png" /> 328.99<br />\
    <img src="styles/legend/SoilMoistureViikiFields_16_9.png" /> 331.24<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SoilMoistureViikiFields_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2779428.202591, 8442028.651237, 2797295.403098, 8454187.565576]
        })
    });
var lyr_NDVIViikiFields_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI Viiki Fields<br />\
    <img src="styles/legend/NDVIViikiFields_17_0.png" /> 0.1<br />\
    <img src="styles/legend/NDVIViikiFields_17_1.png" /> 0.2<br />\
    <img src="styles/legend/NDVIViikiFields_17_2.png" /> 0.3<br />\
    <img src="styles/legend/NDVIViikiFields_17_3.png" /> 0.3<br />\
    <img src="styles/legend/NDVIViikiFields_17_4.png" /> 0.4<br />\
    <img src="styles/legend/NDVIViikiFields_17_5.png" /> 0.5<br />\
    <img src="styles/legend/NDVIViikiFields_17_6.png" /> 0.6<br />\
    <img src="styles/legend/NDVIViikiFields_17_7.png" /> 0.7<br />\
    <img src="styles/legend/NDVIViikiFields_17_8.png" /> 0.8<br />\
    <img src="styles/legend/NDVIViikiFields_17_9.png" /> 0.9<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVIViikiFields_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2779247.232164, 8441548.083040, 2797379.328532, 8454549.743308]
        })
    });
var format_WaterBodiesViiki_18 = new ol.format.GeoJSON();
var features_WaterBodiesViiki_18 = format_WaterBodiesViiki_18.readFeatures(json_WaterBodiesViiki_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterBodiesViiki_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterBodiesViiki_18.addFeatures(features_WaterBodiesViiki_18);
var lyr_WaterBodiesViiki_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterBodiesViiki_18, 
                style: style_WaterBodiesViiki_18,
                popuplayertitle: 'Water Bodies Viiki',
                interactive: false,
                title: '<img src="styles/legend/WaterBodiesViiki_18.png" /> Water Bodies Viiki'
            });
var format_ViikiFieldBorders_19 = new ol.format.GeoJSON();
var features_ViikiFieldBorders_19 = format_ViikiFieldBorders_19.readFeatures(json_ViikiFieldBorders_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViikiFieldBorders_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViikiFieldBorders_19.addFeatures(features_ViikiFieldBorders_19);
var lyr_ViikiFieldBorders_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViikiFieldBorders_19, 
                style: style_ViikiFieldBorders_19,
                popuplayertitle: 'Viiki Field Borders',
                interactive: false,
                title: '<img src="styles/legend/ViikiFieldBorders_19.png" /> Viiki Field Borders'
            });
var format_ViikiFarmBuildings_20 = new ol.format.GeoJSON();
var features_ViikiFarmBuildings_20 = format_ViikiFarmBuildings_20.readFeatures(json_ViikiFarmBuildings_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViikiFarmBuildings_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViikiFarmBuildings_20.addFeatures(features_ViikiFarmBuildings_20);
var lyr_ViikiFarmBuildings_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViikiFarmBuildings_20, 
                style: style_ViikiFarmBuildings_20,
                popuplayertitle: 'Viiki Farm Buildings',
                interactive: false,
                title: '<img src="styles/legend/ViikiFarmBuildings_20.png" /> Viiki Farm Buildings'
            });
var format_SolarPannelsViiki_21 = new ol.format.GeoJSON();
var features_SolarPannelsViiki_21 = format_SolarPannelsViiki_21.readFeatures(json_SolarPannelsViiki_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolarPannelsViiki_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolarPannelsViiki_21.addFeatures(features_SolarPannelsViiki_21);
var lyr_SolarPannelsViiki_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolarPannelsViiki_21, 
                style: style_SolarPannelsViiki_21,
                popuplayertitle: 'Solar Pannels Viiki',
                interactive: false,
                title: '<img src="styles/legend/SolarPannelsViiki_21.png" /> Solar Pannels Viiki'
            });


lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_SoilbodiesViikki_3.setVisible(false);lyr_EcozonesViikki_4.setVisible(false);lyr_CLCViiki2018_5.setVisible(false);lyr_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6.setVisible(false);lyr_ViikiSustainability_6.setVisible(false);lyr_ViikiProfitability_7.setVisible(false);lyr_ViikiCrops_8.setVisible(false);lyr_ViikiLandUseOptimization_9.setVisible(false);lyr_PhotovoltaicPowerPotentialHelsinkikWhkWp_11.setVisible(false);lyr_NDVIViiki_10.setVisible(false);lyr_SoilMoistureViiki_11.setVisible(false);lyr_PloughingIndicator2023Viiki_12.setVisible(false);lyr_SmallWoodyFeatures2021Viiki_13.setVisible(false);lyr_Grassland2023Viiki_14.setVisible(false);lyr_ForestType2021Viiki_15.setVisible(false);lyr_SoilMoistureViikiFields_16.setVisible(false);lyr_NDVIViikiFields_17.setVisible(false);lyr_WaterBodiesViiki_18.setVisible(false);lyr_ViikiFieldBorders_19.setVisible(false);lyr_ViikiFarmBuildings_20.setVisible(false);lyr_SolarPannelsViiki_21.setVisible(false);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleMaps_1,lyr_GoogleSatellite_2,lyr_SoilbodiesViikki_3,lyr_EcozonesViikki_4,lyr_CLCViiki2018_5,lyr_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6,lyr_ViikiSustainability_6,lyr_ViikiProfitability_7,lyr_ViikiCrops_8,lyr_ViikiLandUseOptimization_9,lyr_PhotovoltaicPowerPotentialHelsinkikWhkWp_11,lyr_NDVIViiki_10,lyr_SoilMoistureViiki_11,lyr_PloughingIndicator2023Viiki_12,lyr_SmallWoodyFeatures2021Viiki_13,lyr_Grassland2023Viiki_14,lyr_ForestType2021Viiki_15,lyr_SoilMoistureViikiFields_16,lyr_NDVIViikiFields_17,lyr_WaterBodiesViiki_18,lyr_ViikiFieldBorders_19,lyr_SolarPannelsViiki_21,lyr_ViikiFarmBuildings_20];
lyr_SoilbodiesViikki_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Soilbodies': 'Soilbodies', 'Soilbodi_1': 'Soilbodi_1', 'Soilbodi_2': 'Soilbodi_2', 'Soilbodi_3': 'Soilbodi_3', 'Soilbodi_4': 'Soilbodi_4', 'Soilbodi_5': 'Soilbodi_5', 'Table_18_S': 'Table_18_S', 'Table_18_1': 'Table_18_1', 'Soilbody': 'Soilbody', 'Table_18_3': 'Table_18_3', 'Table_18_4': 'Table_18_4', 'Table_18_5': 'Table_18_5', 'Table_18_6': 'Table_18_6', });
lyr_EcozonesViikki_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Ecozone': 'Ecozone', 'gez_code': 'gez_code', 'gez_abbrev': 'gez_abbrev', });
lyr_CLCViiki2018_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CLC_Code': 'CLC_Code', 'Remark': 'Remark', 'Area_Ha': 'Area_Ha', 'ID': 'ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Landuse Class': 'Landuse Class', 'CLC_legend_RGB': 'CLC_legend_RGB', });
lyr_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6.set('fieldAliases', {'Photovoltaic power potential [kWh/ kWp]': 'Photovoltaic power potential [kWh/ kWp]', });
lyr_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6.set('fieldImages', {'Photovoltaic power potential [kWh/ kWp]': 'TextEdit', });
lyr_PhotovoltaicPotentialViikiFieldAvgkWhkWp_6.set('fieldLabels', {'Photovoltaic power potential [kWh/ kWp]': 'no label', });

lyr_ViikiSustainability_6.set('fieldAliases', {'fid': 'fid', 'Field ID': 'Field ID', 'Area (Hectare)': 'Area (Hectare)', 'Area (Hect': 'Area (Hectare)', 'Year': 'Year', 'Crop': 'Crop', 'Soil Type': 'Soil Type', 'Organic Farm': 'Organic Farm', 'Organic Fa': 'Organic Farm', 'Ecozone': 'Ecozone', 'Sustainability': 'Sustainability', 'Sustainability Score': 'Sustainability Score', 'CO2 Emissions [kg/ha]': 'CO2 Emissions [kg/ha]', 'Diesel Use [L/ha]': 'Diesel Use [L/ha]', 'Fertilizer Use  [kg N/ha]': 'Fertilizer Use  [kg N/ha]', 'Pesticide Use [kg/ha]': 'Pesticide Use [kg/ha]', 'Fungicide Use [kg/ha]': 'Fungicide Use [kg/ha]', 'Distance to nearest Water Body [m]': 'Distance to nearest Water Body [m]', 'Distance to nearest Farm Building [m]': 'Distance to nearest Farm Building [m]', });
lyr_ViikiProfitability_7.set('fieldAliases', {'fid': 'fid', 'Field ID': 'Field ID', 'Area (Hectare)': 'Area (Hectare)', 'Area (Hect': 'Area (Hectare)', 'Year': 'Year', 'Crop': 'Crop', 'Profitability': 'Profitability', 'Profitability Score': 'Profitability Score', 'Current Profit [€/ha]': 'Current Profit [€/ha]', 'Crop Yield [t/ha]': 'Crop Yield [t/ha]', 'Crop Price [€/t]': 'Crop Price [€/t]', 'Diesel Use [L/ha]': 'Diesel Use [L/ha]', 'Fertilizer Use  [kg N/ha]': 'Fertilizer Use  [kg N/ha]', 'Pesticide Use [kg/ha]': 'Pesticide Use [kg/ha]', 'Fungicide Use [kg/ha]': 'Fungicide Use [kg/ha]', 'Distance to nearest Water Body [m]': 'Distance to nearest Water Body [m]', 'Distance to nearest Farm Building [m]': 'Distance to nearest Farm Building [m]', });
lyr_ViikiCrops_8.set('fieldAliases', {'fid': 'fid', 'Field ID': 'Field ID', 'Area (Hectare)': 'Area (Hectare)', 'Area (Hect': 'Area (Hectare)', 'Year': 'Year', 'Crop': 'Crop', 'Organic Farm': 'Organic Farm', 'Organic Fa': 'Organic Farm', 'Crop Yield [t/ha]': 'Crop Yield [t/ha]', 'Crop Price [€/t]': 'Crop Price [€/t]', 'Fertilizer Use  [kg N/ha]': 'Fertilizer Use  [kg N/ha]', 'Pesticide Use [kg/ha]': 'Pesticide Use [kg/ha]', 'Fungicide Use [kg/ha]': 'Fungicide Use [kg/ha]', 'Seeds/m2': 'Seeds/m2', });
lyr_ViikiLandUseOptimization_9.set('fieldAliases', {'fid': 'fid', 'Field ID': 'Field ID', 'Area (Hectare)': 'Area (Hectare)', 'Area (Hect': 'Area (Hectare)', 'Year': 'Year', 'Crop': 'Crop', 'Soil Type': 'Soil Type', 'Organic Farm': 'Organic Farm', 'Organic Fa': 'Organic Farm', 'Ecozone': 'Ecozone', 'Management Priority Class': 'Management Priority Class', 'Management Priority Score': 'Management Priority Score', 'Recommended Actions': 'Recommended Actions', 'Recommended_actions': 'Recommended Actions', 'Sustainability': 'Sustainability', 'Sustainability Score': 'Sustainability Score', 'Profitability': 'Profitability', 'Profitability Score': 'Profitability Score', 'Current Profit [€/ha]': 'Current Profit [€/ha]', 'Crop Yield [t/ha]': 'Crop Yield [t/ha]', 'Crop Price [€/t]': 'Crop Price [€/t]', 'Seeds/m2': 'Seeds/m2', 'CO2 Emissions [kg/ha]': 'CO2 Emissions [kg/ha]', 'Diesel Use [L/ha]': 'Diesel Use [L/ha]', 'Fertilizer Use  [kg N/ha]': 'Fertilizer Use  [kg N/ha]', 'Pesticide Use [kg/ha]': 'Pesticide Use [kg/ha]', 'Fungicide Use [kg/ha]': 'Fungicide Use [kg/ha]', 'NDVI Avg.': 'NDVI Avg.', 'Distance to nearest Water Body [m]': 'Distance to nearest Water Body [m]', 'Distance to nearest Farm Building [m]': 'Distance to nearest Farm Building [m]', });
lyr_PhotovoltaicPowerPotentialHelsinkikWhkWp_11.set('fieldAliases', {'Photovoltaic Power Poetential [kWh/ kWp]': 'Photovoltaic Power Poetential [kWh/ kWp]', });
lyr_PhotovoltaicPowerPotentialHelsinkikWhkWp_11.set('fieldImages', {'Photovoltaic Power Poetential [kWh/ kWp]': 'TextEdit', });
lyr_PhotovoltaicPowerPotentialHelsinkikWhkWp_11.set('fieldLabels', {'Photovoltaic Power Poetential [kWh/ kWp]': 'no label', });

lyr_WaterBodiesViiki_18.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'natural': 'natural', 'name': 'name', 'water': 'water', });
lyr_ViikiFieldBorders_19.set('fieldAliases', {'fid': 'fid', });
lyr_ViikiFarmBuildings_20.set('fieldAliases', {'fid': 'fid', '@id': '@id', 'building': 'building', });
lyr_SolarPannelsViiki_21.set('fieldAliases', {'fid': 'fid', 'Source': 'Source', });
lyr_SoilbodiesViikki_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Soilbodies': 'TextEdit', 'Soilbodi_1': 'TextEdit', 'Soilbodi_2': 'Range', 'Soilbodi_3': 'TextEdit', 'Soilbodi_4': 'TextEdit', 'Soilbodi_5': 'TextEdit', 'Table_18_S': 'Range', 'Table_18_1': 'TextEdit', 'Soilbody': 'TextEdit', 'Table_18_3': 'TextEdit', 'Table_18_4': 'TextEdit', 'Table_18_5': 'TextEdit', 'Table_18_6': 'TextEdit', });
lyr_EcozonesViikki_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Ecozone': 'TextEdit', 'gez_code': 'TextEdit', 'gez_abbrev': 'TextEdit', });
lyr_CLCViiki2018_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CLC_Code': 'TextEdit', 'Remark': 'TextEdit', 'Area_Ha': 'TextEdit', 'ID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Landuse Class': 'TextEdit', 'CLC_legend_RGB': 'TextEdit', });
lyr_ViikiSustainability_6.set('fieldImages', {'fid': 'TextEdit', 'Field ID': 'TextEdit', 'Area (Hectare)': 'TextEdit', 'Area (Hect': 'TextEdit', 'Year': 'TextEdit', 'Crop': 'TextEdit', 'Soil Type': 'TextEdit', 'Organic Farm': 'TextEdit', 'Organic Fa': 'TextEdit', 'Ecozone': 'TextEdit', 'Sustainability': 'TextEdit', 'Sustainability Score': 'Range', 'CO2 Emissions [kg/ha]': 'Range', 'Diesel Use [L/ha]': 'Range', 'Fertilizer Use  [kg N/ha]': 'Range', 'Pesticide Use [kg/ha]': 'TextEdit', 'Fungicide Use [kg/ha]': 'TextEdit', 'Distance to nearest Water Body [m]': 'TextEdit', 'Distance to nearest Farm Building [m]': 'TextEdit', });
lyr_ViikiProfitability_7.set('fieldImages', {'fid': 'TextEdit', 'Field ID': 'TextEdit', 'Area (Hectare)': 'TextEdit', 'Area (Hect': 'TextEdit', 'Year': 'TextEdit', 'Crop': 'TextEdit', 'Profitability': 'TextEdit', 'Profitability Score': 'Range', 'Current Profit [€/ha]': 'TextEdit', 'Crop Yield [t/ha]': 'TextEdit', 'Crop Price [€/t]': 'Range', 'Diesel Use [L/ha]': 'Range', 'Fertilizer Use  [kg N/ha]': 'Range', 'Pesticide Use [kg/ha]': 'TextEdit', 'Fungicide Use [kg/ha]': 'TextEdit', 'Distance to nearest Water Body [m]': 'TextEdit', 'Distance to nearest Farm Building [m]': 'TextEdit', });
lyr_ViikiCrops_8.set('fieldImages', {'fid': 'TextEdit', 'Field ID': 'TextEdit', 'Area (Hectare)': 'TextEdit', 'Area (Hect': 'TextEdit', 'Year': 'TextEdit', 'Crop': 'TextEdit', 'Organic Farm': 'TextEdit', 'Organic Fa': 'TextEdit', 'Crop Yield [t/ha]': 'TextEdit', 'Crop Price [€/t]': 'Range', 'Fertilizer Use  [kg N/ha]': 'Range', 'Pesticide Use [kg/ha]': 'TextEdit', 'Fungicide Use [kg/ha]': 'TextEdit', 'Seeds/m2': 'Range', });
lyr_ViikiLandUseOptimization_9.set('fieldImages', {'fid': 'TextEdit', 'Field ID': 'TextEdit', 'Area (Hectare)': 'TextEdit', 'Area (Hect': 'TextEdit', 'Year': 'TextEdit', 'Crop': 'TextEdit', 'Soil Type': 'TextEdit', 'Organic Farm': 'TextEdit', 'Organic Fa': 'TextEdit', 'Ecozone': 'TextEdit', 'Management Priority Class': 'TextEdit', 'Management Priority Score': 'Range', 'Recommended Actions': 'TextEdit', 'Recommended_actions': 'TextEdit', 'Sustainability': 'TextEdit', 'Sustainability Score': 'Range', 'Profitability': 'TextEdit', 'Profitability Score': 'Range', 'Current Profit [€/ha]': 'TextEdit', 'Crop Yield [t/ha]': 'TextEdit', 'Crop Price [€/t]': 'Range', 'Seeds/m2': 'Range', 'CO2 Emissions [kg/ha]': 'Range', 'Diesel Use [L/ha]': 'Range', 'Fertilizer Use  [kg N/ha]': 'Range', 'Pesticide Use [kg/ha]': 'TextEdit', 'Fungicide Use [kg/ha]': 'TextEdit', 'NDVI Avg.': 'TextEdit', 'Distance to nearest Water Body [m]': 'TextEdit', 'Distance to nearest Farm Building [m]': 'TextEdit', });
lyr_WaterBodiesViiki_18.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'natural': 'TextEdit', 'name': 'TextEdit', 'water': 'TextEdit', });
lyr_ViikiFieldBorders_19.set('fieldImages', {'fid': 'Range', });
lyr_ViikiFarmBuildings_20.set('fieldImages', {'fid': 'TextEdit', '@id': 'TextEdit', 'building': 'TextEdit', });
lyr_SolarPannelsViiki_21.set('fieldImages', {'fid': 'TextEdit', 'Source': 'TextEdit', });
lyr_SoilbodiesViikki_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Soilbodies': 'hidden field', 'Soilbodi_1': 'hidden field', 'Soilbodi_2': 'hidden field', 'Soilbodi_3': 'hidden field', 'Soilbodi_4': 'hidden field', 'Soilbodi_5': 'hidden field', 'Table_18_S': 'hidden field', 'Table_18_1': 'hidden field', 'Soilbody': 'no label', 'Table_18_3': 'hidden field', 'Table_18_4': 'hidden field', 'Table_18_5': 'hidden field', 'Table_18_6': 'hidden field', });
lyr_EcozonesViikki_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Ecozone': 'no label', 'gez_code': 'hidden field', 'gez_abbrev': 'hidden field', });
lyr_CLCViiki2018_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'CLC_Code': 'hidden field', 'Remark': 'hidden field', 'Area_Ha': 'hidden field', 'ID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Landuse Class': 'no label', 'CLC_legend_RGB': 'hidden field', });
lyr_ViikiSustainability_6.set('fieldLabels', {'fid': 'hidden field', 'Field ID': 'inline label - always visible', 'Area (Hectare)': 'inline label - always visible', 'Area (Hect': 'inline label - always visible', 'Year': 'inline label - always visible', 'Crop': 'inline label - always visible', 'Soil Type': 'inline label - always visible', 'Organic Farm': 'inline label - always visible', 'Organic Fa': 'inline label - always visible', 'Ecozone': 'inline label - always visible', 'Sustainability': 'inline label - always visible', 'Sustainability Score': 'hidden field', 'CO2 Emissions [kg/ha]': 'inline label - always visible', 'Diesel Use [L/ha]': 'inline label - always visible', 'Fertilizer Use  [kg N/ha]': 'inline label - always visible', 'Pesticide Use [kg/ha]': 'inline label - always visible', 'Fungicide Use [kg/ha]': 'inline label - always visible', 'Distance to nearest Water Body [m]': 'inline label - always visible', 'Distance to nearest Farm Building [m]': 'inline label - always visible', });
lyr_ViikiProfitability_7.set('fieldLabels', {'fid': 'hidden field', 'Field ID': 'inline label - always visible', 'Area (Hectare)': 'inline label - always visible', 'Area (Hect': 'inline label - always visible', 'Year': 'inline label - always visible', 'Crop': 'inline label - always visible', 'Profitability': 'inline label - always visible', 'Profitability Score': 'hidden field', 'Current Profit [€/ha]': 'inline label - always visible', 'Crop Yield [t/ha]': 'inline label - always visible', 'Crop Price [€/t]': 'inline label - always visible', 'Diesel Use [L/ha]': 'inline label - always visible', 'Fertilizer Use  [kg N/ha]': 'inline label - always visible', 'Pesticide Use [kg/ha]': 'inline label - always visible', 'Fungicide Use [kg/ha]': 'inline label - always visible', 'Distance to nearest Water Body [m]': 'inline label - always visible', 'Distance to nearest Farm Building [m]': 'inline label - always visible', });
lyr_ViikiCrops_8.set('fieldLabels', {'fid': 'hidden field', 'Field ID': 'inline label - always visible', 'Area (Hectare)': 'inline label - always visible', 'Area (Hect': 'inline label - always visible', 'Year': 'inline label - always visible', 'Crop': 'inline label - always visible', 'Organic Farm': 'inline label - always visible', 'Organic Fa': 'inline label - always visible', 'Crop Yield [t/ha]': 'inline label - always visible', 'Crop Price [€/t]': 'inline label - always visible', 'Fertilizer Use  [kg N/ha]': 'inline label - always visible', 'Pesticide Use [kg/ha]': 'inline label - always visible', 'Fungicide Use [kg/ha]': 'inline label - always visible', 'Seeds/m2': 'inline label - always visible', });
lyr_ViikiLandUseOptimization_9.set('fieldLabels', {'fid': 'hidden field', 'Field ID': 'inline label - always visible', 'Area (Hectare)': 'inline label - always visible', 'Area (Hect': 'inline label - always visible', 'Year': 'inline label - always visible', 'Crop': 'inline label - always visible', 'Soil Type': 'inline label - always visible', 'Organic Farm': 'inline label - always visible', 'Organic Fa': 'inline label - always visible', 'Ecozone': 'inline label - always visible', 'Management Priority Class': 'inline label - always visible', 'Management Priority Score': 'hidden field', 'Recommended Actions': 'inline label - always visible', 'Recommended_actions': 'inline label - always visible', 'Sustainability': 'inline label - always visible', 'Sustainability Score': 'hidden field', 'Profitability': 'inline label - always visible', 'Profitability Score': 'hidden field', 'Current Profit [€/ha]': 'inline label - always visible', 'Crop Yield [t/ha]': 'inline label - always visible', 'Crop Price [€/t]': 'inline label - always visible', 'Seeds/m2': 'inline label - always visible', 'CO2 Emissions [kg/ha]': 'inline label - always visible', 'Diesel Use [L/ha]': 'inline label - always visible', 'Fertilizer Use  [kg N/ha]': 'inline label - always visible', 'Pesticide Use [kg/ha]': 'inline label - always visible', 'Fungicide Use [kg/ha]': 'inline label - always visible', 'NDVI Avg.': 'inline label - always visible', 'Distance to nearest Water Body [m]': 'inline label - always visible', 'Distance to nearest Farm Building [m]': 'inline label - always visible', });
lyr_WaterBodiesViiki_18.set('fieldLabels', {'fid': 'inline label - always visible', 'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'natural': 'inline label - always visible', 'name': 'inline label - always visible', 'water': 'inline label - always visible', });
lyr_ViikiFieldBorders_19.set('fieldLabels', {'fid': 'inline label - always visible', });
lyr_ViikiFarmBuildings_20.set('fieldLabels', {'fid': 'inline label - always visible', '@id': 'inline label - always visible', 'building': 'inline label - always visible', });
lyr_SolarPannelsViiki_21.set('fieldLabels', {'fid': 'no label', 'Source': 'no label', });
lyr_ViikiFarmBuildings_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});