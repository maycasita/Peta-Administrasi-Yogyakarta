var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Yogyakartakota_1 = new ol.format.GeoJSON();
var features_Yogyakartakota_1 = format_Yogyakartakota_1.readFeatures(json_Yogyakartakota_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yogyakartakota_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yogyakartakota_1.addFeatures(features_Yogyakartakota_1);
var lyr_Yogyakartakota_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yogyakartakota_1, 
                style: style_Yogyakartakota_1,
                popuplayertitle: "Yogyakarta (kota)",
                interactive: true,
    title: 'Yogyakarta (kota)<br />\
    <img src="styles/legend/Yogyakartakota_1_0.png" /> Kelurahan Baciro<br />\
    <img src="styles/legend/Yogyakartakota_1_1.png" /> Kelurahan Brontokusuman<br />\
    <img src="styles/legend/Yogyakartakota_1_2.png" /> Kelurahan Bausasran<br />\
    <img src="styles/legend/Yogyakartakota_1_3.png" /> Kelurahan Bener<br />\
    <img src="styles/legend/Yogyakartakota_1_4.png" /> Kelurahan Bumijo<br />\
    <img src="styles/legend/Yogyakartakota_1_5.png" /> Kelurahan Cokrodiningratan<br />\
    <img src="styles/legend/Yogyakartakota_1_6.png" /> Kelurahan Demangan<br />\
    <img src="styles/legend/Yogyakartakota_1_7.png" /> Kelurahan Gedongkiwo<br />\
    <img src="styles/legend/Yogyakartakota_1_8.png" /> Kelurahan Giwangan<br />\
    <img src="styles/legend/Yogyakartakota_1_9.png" /> Kelurahan Gowongan<br />\
    <img src="styles/legend/Yogyakartakota_1_10.png" /> Kelurahan Gunungketur<br />\
    <img src="styles/legend/Yogyakartakota_1_11.png" /> Kelurahan Kadipaten<br />\
    <img src="styles/legend/Yogyakartakota_1_12.png" /> Kelurahan Karangwaru<br />\
    <img src="styles/legend/Yogyakartakota_1_13.png" /> Kelurahan Keparakan<br />\
    <img src="styles/legend/Yogyakartakota_1_14.png" /> Kelurahan Klitren<br />\
    <img src="styles/legend/Yogyakartakota_1_15.png" /> Kelurahan Kotabaru<br />\
    <img src="styles/legend/Yogyakartakota_1_16.png" /> Kelurahan Kricak<br />\
    <img src="styles/legend/Yogyakartakota_1_17.png" /> Kelurahan Mantrijeron<br />\
    <img src="styles/legend/Yogyakartakota_1_18.png" /> Kelurahan Muja Muju<br />\
    <img src="styles/legend/Yogyakartakota_1_19.png" /> Kelurahan Ngampilan<br />\
    <img src="styles/legend/Yogyakartakota_1_20.png" /> Kelurahan Ngupasan<br />\
    <img src="styles/legend/Yogyakartakota_1_21.png" /> Kelurahan Notoprajan<br />\
    <img src="styles/legend/Yogyakartakota_1_22.png" /> Kelurahan Pakuncen<br />\
    <img src="styles/legend/Yogyakartakota_1_23.png" /> Kelurahan Pandeyan<br />\
    <img src="styles/legend/Yogyakartakota_1_24.png" /> Kelurahan Panembahan<br />\
    <img src="styles/legend/Yogyakartakota_1_25.png" /> Kelurahan Patangpuluhan<br />\
    <img src="styles/legend/Yogyakartakota_1_26.png" /> Kelurahan Patehan<br />\
    <img src="styles/legend/Yogyakartakota_1_27.png" /> Kelurahan Prawirodirjan<br />\
    <img src="styles/legend/Yogyakartakota_1_28.png" /> Kelurahan Prenggan<br />\
    <img src="styles/legend/Yogyakartakota_1_29.png" /> Kelurahan Pringgokusuman<br />\
    <img src="styles/legend/Yogyakartakota_1_30.png" /> Kelurahan Purbayan<br />\
    <img src="styles/legend/Yogyakartakota_1_31.png" /> Kelurahan Purwokinanti<br />\
    <img src="styles/legend/Yogyakartakota_1_32.png" /> Kelurahan Rejowinangun<br />\
    <img src="styles/legend/Yogyakartakota_1_33.png" /> Kelurahan Semaki<br />\
    <img src="styles/legend/Yogyakartakota_1_34.png" /> Kelurahan Sorosutan<br />\
    <img src="styles/legend/Yogyakartakota_1_35.png" /> Kelurahan Sosromenduran<br />\
    <img src="styles/legend/Yogyakartakota_1_36.png" /> Kelurahan Suryatmajan<br />\
    <img src="styles/legend/Yogyakartakota_1_37.png" /> Kelurahan Suryodiningratan<br />\
    <img src="styles/legend/Yogyakartakota_1_38.png" /> Kelurahan Tahunan<br />\
    <img src="styles/legend/Yogyakartakota_1_39.png" /> Kelurahan Tegalpanggung<br />\
    <img src="styles/legend/Yogyakartakota_1_40.png" /> Kelurahan Tegalrejo<br />\
    <img src="styles/legend/Yogyakartakota_1_41.png" /> Kelurahan Terban<br />\
    <img src="styles/legend/Yogyakartakota_1_42.png" /> Kelurahan Warungboto<br />\
    <img src="styles/legend/Yogyakartakota_1_43.png" /> Kelurahan Wirobrajan<br />\
    <img src="styles/legend/Yogyakartakota_1_44.png" /> Kelurahan Wirogunan<br />\
    <img src="styles/legend/Yogyakartakota_1_45.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Yogyakartakota_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Yogyakartakota_1];
lyr_Yogyakartakota_1.set('fieldAliases', {'NAMA': 'NAMA', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'KOTA': 'KOTA', 'PROVINSI': 'PROVINSI', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_Yogyakartakota_1.set('fieldImages', {'NAMA': 'Hidden', 'NAMOBJ': 'TextEdit', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'KDBBPS': 'Hidden', 'KDCBPS': 'Hidden', 'KDCPUM': 'Hidden', 'KDEBPS': 'Hidden', 'KDEPUM': 'Hidden', 'KDPBPS': 'Hidden', 'KDPKAB': 'Hidden', 'KDPPUM': 'Hidden', 'LUASWH': 'Hidden', 'TIPADM': 'Hidden', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', 'WIADKC': 'Hidden', 'WIADKK': 'Hidden', 'WIADPR': 'Hidden', 'WIADKD': 'Hidden', 'UUPP': 'Hidden', 'LUAS': 'Hidden', });
lyr_Yogyakartakota_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'KECAMATAN': 'inline label - always visible', 'KELURAHAN': 'inline label - always visible', 'KOTA': 'inline label - always visible', 'PROVINSI': 'inline label - always visible', });
lyr_Yogyakartakota_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});