define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a href=\""
    + alias3(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\r\n";
},"useData":true}); });