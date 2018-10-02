/*---------------------------------------------------------
 * Odoo base_geoengine
 * Author Yannick Vaucher Copyright 2018 Camptocamp SA
 * License in __manifest__.py at root level of the module
 *---------------------------------------------------------
*/

odoo.define('base_geoengine.geoengine_field_registry', function (require) {

var registry = require('web.field_registry');
var geoengine_widgets = require('base_geoengine.geoengine_widgets');

// Special fields
registry
    .add('geo_edit_map', geoengine_widgets.FieldGeoEngineEditMap)
    .add('geo_edit_map_readonly', geoengine_widgets.FieldGeoEngineEditMapReadonly)
    .add('geo_point_xy', geoengine_widgets.FieldGeoPointXY)
    .add('geo_point_xy', geoengine_widgets.FieldGeoPointXYReadonly)
    .add('geo_rect', geoengine_widgets.FieldGeoRect)
    .add('geo_rect', geoengine_widgets.FieldGeoRectReadonly);

});
