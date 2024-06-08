(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['playlist_rem.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div>\n        <input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":35},"end":{"line":7,"column":44}}}) : helper)))
    + "\" name=\"titles\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"idx") || (depth0 != null ? lookupProperty(depth0,"idx") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"idx","hash":{},"data":data,"loc":{"start":{"line":7,"column":67},"end":{"line":7,"column":74}}}) : helper)))
    + "\" />\n        <label for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":8,"column":29}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"idx") || (depth0 != null ? lookupProperty(depth0,"idx") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"idx","hash":{},"data":data,"loc":{"start":{"line":8,"column":31},"end":{"line":8,"column":38}}}) : helper)))
    + ": "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":40},"end":{"line":8,"column":49}}}) : helper)))
    + "</label>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form action=\"/playlist/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"playlist_id") || (depth0 != null ? lookupProperty(depth0,"playlist_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"playlist_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":24},"end":{"line":1,"column":39}}}) : helper)))
    + "/rem\" method=\"post\">\n  <h3 class='font-bold text-2xl' >Remove tracks from playlist</h3>\n  <fieldset class=\"mb-5\">\n    <p class=\"text-lg font-medium text-gray-700\">Tracks</p>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"tracks") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "  </fieldset>\n  <div>\n    <button type=\"submit\" value=\"Update\" class=\"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\" >Remove</button>\n  </div>\n</form>";
},"useData":true});
})();