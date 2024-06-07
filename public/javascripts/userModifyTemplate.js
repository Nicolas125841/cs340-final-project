(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['user_mod.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class='flex justify-center items-center relative'>\r\n  <form action=\"/user\" method=\"post\">\r\n    <h3 class='font-bold text-2xl' >Update account details</h3>\r\n    <div>\r\n      <label for=\"name\">New username:</label>\r\n      <input type=\"text\" name=\"username\" id=\"username\" />\r\n    </div>\r\n    <div>\r\n      <label for=\"name\">New name:</label>\r\n      <input type=\"text\" name=\"name\" id=\"name\" />\r\n    </div>\r\n    <div>\r\n      <input type=\"submit\" value=\"Update\" />\r\n    </div>\r\n  </form>\r\n  <form action=\"/user/remove\" method=\"post\">\r\n      <input type=\"submit\" value=\"Remove Account\" />\r\n  </form>\r\n</div>";
},"useData":true});
})();