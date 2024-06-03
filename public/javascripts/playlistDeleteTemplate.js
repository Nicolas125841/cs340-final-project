(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['playlist_del.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div>\r\n        <input type=\"radio\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playlist_id") || (depth0 != null ? lookupProperty(depth0,"playlist_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playlist_id","hash":{},"data":data,"loc":{"start":{"line":7,"column":32},"end":{"line":7,"column":47}}}) : helper)))
    + "\" name=\"playlist_id\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playlist_id") || (depth0 != null ? lookupProperty(depth0,"playlist_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playlist_id","hash":{},"data":data,"loc":{"start":{"line":7,"column":75},"end":{"line":7,"column":90}}}) : helper)))
    + "\" />\r\n        <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playlist_id") || (depth0 != null ? lookupProperty(depth0,"playlist_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playlist_id","hash":{},"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":8,"column":35}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"playlist_id") || (depth0 != null ? lookupProperty(depth0,"playlist_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playlist_id","hash":{},"data":data,"loc":{"start":{"line":8,"column":37},"end":{"line":8,"column":52}}}) : helper)))
    + ": "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":54},"end":{"line":8,"column":62}}}) : helper)))
    + "</label>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form action=\"/playlist/delete\" method=\"post\">\r\n  <h3>Delete playlist</h3>\r\n  <fieldset>\r\n    <legend>Playlists:</legend>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"playlists") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "  </fieldset>\r\n  <div>\r\n    <input type=\"submit\" value=\"Delete\" />\r\n  </div>\r\n</form>";
},"useData":true});
})();