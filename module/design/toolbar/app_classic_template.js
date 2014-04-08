define(['handlebars'], function(Handlebars){ var TEMPLATE = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.has_instance_store_ami), {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<button ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_pending), {hash:{},inverse:self.program(23, program23, data),fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-tooltip=\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_TIP_TERMINATE_APP", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></button>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<button ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_running), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"modal tooltip btn-toolbar icon-stop disabled\" data-modal-data='{\"title\":\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_TIT_STOP_APP", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\", \"body\":\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_BODY_STOP_APP_LEFT", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_BODY_STOP_APP_RIGHT", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\", \"confirm\":\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_BTN_STOP_APP", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\", \"color\":\"red\" }' data-modal-dismiss=\"true\" data-tooltip=\""
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_TIP_CONTAINS_INSTANCE_STORED", {hash:{},data:data}))
    + "\"></button>\r\n";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "style=\"display:none;\"";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<button ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_running), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_pending), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-tooltip=\""
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_TIP_STOP_APP", {hash:{},data:data}))
    + "\"></button>\r\n<button ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_running), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_pending), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-tooltip=\""
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_TIP_START_APP", {hash:{},data:data}))
    + "\"></button>\r\n";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "class=\"tooltip btn-toolbar icon-stop disabled\"";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " class=\"modal tooltip btn-toolbar icon-stop\" data-modal-template=\"modalApp\" data-modal-data='{\"title\":";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_production), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", \"body\":\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_BODY_STOP_APP_LEFT", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_BODY_STOP_APP_RIGHT", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\", \"confirm\":\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_BTN_STOP_APP", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\", \"color\":\"red\", \"is_asg\":";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_asg), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", \"is_production\":";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_production), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", \"app_name\": \""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\", \"is_stop\": true}' data-modal-dismiss=\"true\" id=\"toolbar-stop-app\"";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_TIT_STOP_PRD_APP", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_TIT_STOP_APP", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

function program13(depth0,data) {
  
  
  return "true";
  }

function program15(depth0,data) {
  
  
  return "false";
  }

function program17(depth0,data) {
  
  
  return "class=\"tooltip btn-toolbar icon-play disabled\" ";
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "class=\"modal tooltip btn-toolbar icon-play\"  data-modal-template=\"modalApp\" data-modal-data='{\"title\":\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_TIT_START_APP", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\", \"body\":\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_BODY_START_APP_LEFT", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_BODY_START_APP_RIGHT", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\", \"confirm\":\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_BTN_START_APP", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\", \"color\":\"blue\" }' data-modal-dismiss=\"true\" id=\"toolbar-start-app\"";
  return buffer;
  }

function program21(depth0,data) {
  
  
  return "class=\"btn-toolbar tooltip icon-terminate disabled\"";
  }

function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "class=\"modal btn-toolbar tooltip icon-terminate seperator\" data-modal-template=\"modalApp\" data-modal-data='{\"title\":";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_production), {hash:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", \"body\":\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_BODY_TERMINATE_APP_LEFT", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_BODY_TERMINATE_APP_RIGHT", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\", \"confirm\":\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_BTN_TERMINATE_APP", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\", \"color\":\"red\", \"is_production\":";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_production), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ", \"app_name\": \""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" }' data-modal-dismiss=\"true\" id=\"toolbar-terminate-app\"";
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_TIT_TERMINATE_PRD_APP", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\"";
  stack1 = helpers.i18n.call(depth0, "TOOL_POP_TIT_TERMINATE_APP", {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"";
  return buffer;
  }

function program28(depth0,data) {
  
  
  return "tooltip";
  }

function program30(depth0,data) {
  
  
  return "disabled";
  }

function program32(depth0,data) {
  
  
  return "selected";
  }

  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_app_updating), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n<button class=\"btn-toolbar icon-zoom-in ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_zoomin), {hash:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-tooltip='"
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_TIP_ZOOM_IN", {hash:{},data:data}))
    + "'></button>\r\n<button class=\"btn-toolbar icon-zoom-out seperator ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.item_flags)),stack1 == null || stack1 === false ? stack1 : stack1.is_zoomout), {hash:{},inverse:self.program(30, program30, data),fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-tooltip='"
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_TIP_ZOOM_OUT", {hash:{},data:data}))
    + "'></button>\r\n\r\n<button class=\"btn-toolbar icon-export-png tooltip seperator\" id=\"toolbar-export-png\" data-tooltip='"
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_EXPORT_AS_PNG", {hash:{},data:data}))
    + "'></button>\r\n\r\n<!-- line style -->\r\n<div class=\"selectbox btn-toolbar toolbar-line-style seperator\">\r\n  <button class=\"selection tooltip\" data-tooltip=\""
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_TIP_LINESTYLE", {hash:{},data:data}))
    + "\" id=\"toolbar-line-style\"><i class=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.lines)),stack1 == null || stack1 === false ? stack1 : stack1.icon)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i></button>\r\n  <ul class=\"dropdown\">\r\n    <li id=\"toolbar-straight\" class='item ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.lines)),stack1 == null || stack1 === false ? stack1 : stack1.is_style0), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'> <i class=\"icon-straight\"></i><span>"
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_LBL_LINESTYLE_STRAIGHT", {hash:{},data:data}))
    + "</span></li>\r\n    <li id=\"toolbar-elbow\" class='item ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.lines)),stack1 == null || stack1 === false ? stack1 : stack1.is_style1), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'> <i class=\"icon-elbow\"></i><span>"
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_LBL_LINESTYLE_ELBOW", {hash:{},data:data}))
    + "</span></li>\r\n    <li id=\"toolbar-bezier-q\" class='item ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.lines)),stack1 == null || stack1 === false ? stack1 : stack1.is_style2), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'> <i class=\"icon-bezier-q\"></i><span>"
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_LBL_LINESTYLE_QUADRATIC_BELZIER", {hash:{},data:data}))
    + "</span></li>\r\n    <li id=\"toolbar-bezier-qt\" class='item ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.lines)),stack1 == null || stack1 === false ? stack1 : stack1.is_style3), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'><i class=\"icon-bezier-qt\"></i><span>"
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_LBL_LINESTYLE_SMOOTH_QUADRATIC_BELZIER", {hash:{},data:data}))
    + "</span></li>\r\n  </ul>\r\n</div>\r\n\r\n<button class=\"btn-toolbar tooltip icon-refresh seperator\" data-tooltip=\""
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_TIP_REFRESH_REOURCES", {hash:{},data:data}))
    + "\" id=\"btn-app-refresh\"></button>\r\n\r\n<!-- env:dev                                                                                                                                                                                                                                                                                       env:dev:end -->\r\n\r\n<a href=\"http://blog.visualops.io/2014/02/18/vpc-always-forget-about-the-res\" target=\"_blank\" class=\"tooltip no-classic-toolbar\" data-tooltip=\""
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_TIP_NO_CLASSIC_DATA_APP", {hash:{},data:data}))
    + "\">"
    + escapeExpression(helpers.i18n.call(depth0, "TOOL_LBL_NO_CLASSIC", {hash:{},data:data}))
    + "</a>\r\n\r\n";
  return buffer;
  }; return Handlebars.template(TEMPLATE); });