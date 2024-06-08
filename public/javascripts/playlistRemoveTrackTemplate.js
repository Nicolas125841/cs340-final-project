(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['playlist_rem.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div>\n        <input type=\"radio\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playlist_id") || (depth0 != null ? lookupProperty(depth0,"playlist_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playlist_id","hash":{},"data":data,"loc":{"start":{"line":7,"column":32},"end":{"line":7,"column":47}}}) : helper)))
    + "\" name=\"playlist_id\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playlist_id") || (depth0 != null ? lookupProperty(depth0,"playlist_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playlist_id","hash":{},"data":data,"loc":{"start":{"line":7,"column":75},"end":{"line":7,"column":90}}}) : helper)))
    + "\" />\n        <label for =\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playlist_id") || (depth0 != null ? lookupProperty(depth0,"playlist_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playlist_id","hash":{},"data":data,"loc":{"start":{"line":8,"column":21},"end":{"line":8,"column":36}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":38},"end":{"line":8,"column":46}}}) : helper)))
    + "</label>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div>\n        <input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":16,"column":35},"end":{"line":16,"column":44}}}) : helper)))
    + "\" name=\"titles\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":16,"column":67},"end":{"line":16,"column":76}}}) : helper)))
    + ","
    + alias4(((helper = (helper = lookupProperty(helpers,"artist_id") || (depth0 != null ? lookupProperty(depth0,"artist_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist_id","hash":{},"data":data,"loc":{"start":{"line":16,"column":77},"end":{"line":16,"column":90}}}) : helper)))
    + "\" />\n        <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":17,"column":20},"end":{"line":17,"column":29}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":17,"column":31},"end":{"line":17,"column":40}}}) : helper)))
    + "</label>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form action=\"/playlist/rem\" method=\"post\">\n  <h3>Remove track from playlist</h3>\n  <fieldset>\n    <legend>Playlist to remove:</legend>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"playlists") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":3},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "  </fieldset>\n  <fieldset>\n    <legend>Tracks:</legend>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tracks") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":19,"column":13}}})) != null ? stack1 : "")
    + "  </fieldset>\n  <div>\n    <input type=\"submit\" value=\"Add\" />\n  </div>\n</form>";
},"useData":true});
})();