(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['playlist_cre.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"/playlist/create\" method=\"post\">\r\n  <h3>Create playlist</h3>\r\n  <div>\r\n    <label for=\"name\">Name:</label>\r\n    <input type=\"text\" name=\"name\" id=\"name\" required />\r\n  </div>\r\n  <fieldset>\r\n    <legend>Public:</legend>\r\n    <div>\r\n      <input type=\"radio\" id=\"false\" name=\"is_public\" value=\"0\" checked />\r\n      <label for=\"false\">False</label>\r\n    </div>\r\n    <div>\r\n      <input type=\"radio\" id=\"true\" name=\"is_public\" value=\"1\" />\r\n      <label for=\"true\">True</label>\r\n    </div>\r\n  </fieldset>\r\n  <div>\r\n    <input type=\"submit\" value=\"Create\" />\r\n  </div>\r\n</form>";
},"useData":true});
})();