(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['artist_mod.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"\" method=\"post\">\r\n  <h3>Update account details</h3>\r\n  <div>\r\n    <label for=\"name\">New name:</label>\r\n    <input type=\"text\" name=\"name\" id=\"name\" />\r\n  </div>\r\n  <div>\r\n    <label for=\"name\">New producer:</label>\r\n    <input type=\"text\" name=\"producer\" id=\"producer\" />\r\n  </div>\r\n  <div>\r\n    <input type=\"submit\" value=\"Update\" />\r\n  </div>\r\n</form>\r\n<form action=\"/artist/remove\" method=\"post\">\r\n    <input type=\"submit\" value=\"Remove Account\" />\r\n</form>";
},"useData":true});
})();