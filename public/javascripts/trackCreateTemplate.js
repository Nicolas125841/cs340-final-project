(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['track_cre.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class='flex justify-center items-center relative'>\r\n  <form action=\"/track/create\" method=\"post\">\r\n    <div class='flex flex-col justify-center items-center'>\r\n      <h3 class='font-bold text-2xl' >Create Track</h3>\r\n      <div class='flex flex-row items-center text-center space-x-5 mt-5 mb-5'>\r\n        <label for=\"title\" class=\"block text-lg font-medium text-gray-700\">Title:</label>\r\n        <input type=\"text\" name=\"title\" id=\"title\" required class=\"rounded mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\" />\r\n      </div>\r\n      <div class='flex flex-row items-center text-center space-x-5 mt-5 mb-5'>\r\n        <label for=\"genre\" class=\"block text-lg font-medium text-gray-700\">Genre:</label>\r\n        <input type=\"text\" name=\"genre\" id=\"genre\" required class=\"rounded mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\" />\r\n      </div>\r\n      <div class='flex flex-row items-center text-center space-x-5 mt-5 mb-5'>\r\n        <label for=\"length\" class=\"block text-lg font-medium text-gray-700\">Length:</label>\r\n        <input type=\"number\" name=\"length\" id=\"length\" required class=\"rounded mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\" />\r\n      </div>\r\n      <fieldset class='w-full flex flex-row space-x-3 justify-center mb-5'>\r\n        <p>Explicit?</p>\r\n        <div>\r\n          <input type=\"radio\" id=\"false\" name=\"is_explicit\" value=\"0\" checked />\r\n          <label for=\"false\">No</label>\r\n        </div>\r\n        <div>\r\n          <input type=\"radio\" id=\"true\" name=\"is_explicit\" value=\"1\" />\r\n          <label for=\"true\">Yes</label>\r\n        </div>\r\n      </fieldset>\r\n      <div>\r\n        <button type=\"submit\" value=\"Create\" class=\"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\" >Create</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>";
},"useData":true});
})();