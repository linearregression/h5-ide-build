(function(){define("ide/Websocket",["Meteor","backbone","event","MC"],function(e,t,n){var r,i,s;return r=""+MC.API_HOST+"/ws/",e._debug=function(){return console.log.apply(console,arguments)},s=null,i=function(){var t;return s?s:(s=this,this.__readyDefer=Q.defer(),this.__isReady=!1,this.connection=e.connect(r,!0),t={connection:this.connection},this.collection={request:new e.Collection("request",t),request_detail:new e.Collection("request_detail",t),stack:new e.Collection("stack",t),app:new e.Collection("app",t),status:new e.Collection("status",t),imports:new e.Collection("imports",t)},Deps.autorun(function(e){return function(){return e.statusChanged()}}(this)),this.subscribe(),this.pipeChanges(),setTimeout(function(e){return function(){e.shouldNotify=!0;if(!e.connection.status.connected)return e.statusChanged()}}(this),5e3),this)},i.prototype.statusChanged=function(){var e;e=this.connection.status().connected,e&&(this.shouldNotify=!0);if(!this.shouldNotify)return;return this.trigger("StatusChanged",e)},i.prototype.subscribe=function(){var e,t,n,r,i;if(this.subscribed)return;r=!0,t=function(){return this.__isReady=!0,this.__readyDefer.resolve()},i=App.user.get("usercode"),n=App.user.get("session"),e={onReady:_.bind(t,this),onError:_.bind(this.onError,this)},this.connection.subscribe("request",i,n,e),this.connection.subscribe("stack",i,n),this.connection.subscribe("app",i,n),this.connection.subscribe("status",i,n),this.connection.subscribe("imports",i,n)},i.prototype.ready=function(){return this.__readyDefer.promise},i.prototype.isReady=function(){return this.__isReady},i.prototype.onError=function(e){void 0,this.subscribed=!1,this.trigger("Disconnected")},i.prototype.pipeChanges=function(){return this.collection.request.find().fetch(),this.collection.request.find().observeChanges({added:function(e,t){return n.trigger(n.UPDATE_REQUEST_ITEM,e,t)},changed:function(e,t){return n.trigger(n.UPDATE_REQUEST_ITEM,e,t)}}),this.collection.imports.find().fetch(),this.collection.imports.find().observe({added:function(e,t){return n.trigger(n.UPDATE_IMPORT_ITEM,e)},changed:function(e,t){return n.trigger(n.UPDATE_IMPORT_ITEM,e)}})},_.extend(i.prototype,t.Events),i})}).call(this),define("ide/subviews/SessionDialogTpl",["handlebars"],function(e){var t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<section style="width:400px;" class="invalid-session" id="SessionDialog">\r\n  <div class="confirmSession">\r\n  <div class="modal-header"><h3>Invalid Session</h3></div>\r\n\r\n  <article class="modal-body">\r\n    <div class="modal-text-major"> <p>Your account has signed in from other location or you last login has timed out.</p> <p>Would you like to reconnect this session or close it?</p> </div>\r\n    <div class="modal-text-minor">If you have unsaved changes, close this session will cause all your change to lose.</div>\r\n  </article>\r\n\r\n  <footer class="modal-footer">\r\n    <button id="SessionReconnect" class="btn btn-blue">Reconnect</button>\r\n    <button id="SessionClose" class="btn btn-silver">Close Session</button>\r\n  </footer>\r\n  </div>\r\n\r\n  <div class="reconnectSession" style="display:none;">\r\n  <div class="modal-header"><h3>Reconnect Session</h3></div>\r\n  <article class="modal-body">\r\n    <div class="modal-text-major">Please provide your password to reconnect:</div>\r\n    <div class="modal-input">\r\n      <input type="password" id="SessionPassword" class="input" placeholder="Password" style="width:200px;" autofocus>\r\n    </div>\r\n  </article>\r\n  <footer class="modal-footer">\r\n    <button id="SessionConnect" class="btn btn-blue" disabled>Connect</button>\r\n    <button id="SessionClose2" class="btn btn-red">Close Session</button>\r\n  </footer>\r\n  </div>\r\n</section>\r\n'};return e.template(t)}),function(){define("ide/subviews/SessionDialog",["i18n!nls/lang.js","./SessionDialogTpl","backbone"],function(e,t){var n,r;return n=null,r=Backbone.View.extend({events:{"click #SessionReconnect":"showReconnect","click #SessionClose":"closeSession","click #SessionClose2":"closeSession","click #SessionConnect":"connect","keypress #SessionPassword":"passwordChanged"},constructor:function(){return n?n:(n=this,this.defer=Q.defer(),modal(t(),!1),this.setElement($("#modal-wrap")))},promise:function(){return this.defer.promise},showReconnect:function(){$(".invalid-session .confirmSession").hide(),$(".invalid-session .reconnectSession").show()},closeSession:function(){return App.logout()},connect:function(){if($("#SessionConnect").is(":disabled"))return;return $("#SessionConnect").attr("disabled","disabled"),App.user.acquireSession($("#SessionPassword").val()).then(function(e){return function(){e.remove(),e.defer.resolve()}}(this),function(t){$("#SessionConnect").removeAttr("disabled"),notification("error",e.ide.NOTIFY_MSG_WARN_AUTH_FAILED),$("#SessionPassword").toggleClass("parsley-error",!0)})},passwordChanged:function(e){$("#SessionPassword").toggleClass("parsley-error",!1),($("#SessionPassword").val()||"").length>=6?$("#SessionConnect").removeAttr("disabled"):$("#SessionConnect").attr("disabled","disabled"),e.which===13&&this.connect()}}),r})}.call(this),define("ide/subviews/HeaderTpl",["handlebars"],function(e){var t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a="function";return s+='<nav class="header-menu" id="header">\r\n  <a id="support" class="icon-support" href="mailto:3rp02j1w@incoming.intercom.io" target="_blank">Support</a>\r\n\r\n  <section class="dropdown">\r\n    <div id="HeaderNotification" class="js-toggle-dropdown">\r\n      <i class="icon-notification"></i>\r\n      <span id="NotificationCounter"></span>\r\n    </div>\r\n\r\n    <div class="dropdown-menu">\r\n      <div id="notification-panel-wrapper" class="scroll-wrap">\r\n        <div class="scrollbar-veritical-wrap"><div class="scrollbar-veritical-thumb"></div></div>\r\n        <ul class="scroll-content"></ul>\r\n\r\n        <div class="notification-empty">\r\n          <div class="title">'+u(n.i18n.call(t,"HEAD_LABEL_BLANK_NOTIFICATION",{hash:{},data:i}))+'</div>\r\n          <div class="description">'+u(n.i18n.call(t,"HEAD_LABEL_BLANK_NOTIFICATION_DESC",{hash:{},data:i}))+'</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </section>\r\n\r\n  <section class="dropdown">\r\n    <div id="HeaderUser" class="js-toggle-dropdown tooltip" data-tooltip="'+u((o=t&&t.user_email,typeof o===a?o.apply(t):o))+'">\r\n      <span class="truncate left" style="max-width:100px;">'+u((o=t&&t.user_name,typeof o===a?o.apply(t):o))+'</span>\r\n      <i class="icon-caret-down"></i>\r\n    </div>\r\n\r\n    <ul id="user-dropdown-wrapper" class="dropdown-menu">\r\n      <li id="HeaderShortcuts">'+u(n.i18n.call(t,"HEAD_LABEL_MENUITEM_KEY_SHORT",{hash:{},data:i}))+'</li>\r\n      <li><a href="http://docs.visualops.io" target="_blank" >'+u(n.i18n.call(t,"HEAD_LABEL_MENUITEM_DOC",{hash:{},data:i}))+'</a></li>\r\n      <li id="HeaderSettings">'+u(n.i18n.call(t,"HEAD_LABEL_MENUITEM_SETTING",{hash:{},data:i}))+'</li>\r\n      <li id="HeaderLogout">'+u(n.i18n.call(t,"HEAD_LABEL_MENUITEM_LOGOUT",{hash:{},data:i}))+"</li>\r\n    </ul>\r\n  </section>\r\n</nav>\r\n",s};return e.template(t)}),define("ide/subviews/SettingsDialogTpl",["handlebars"],function(e){var t=function(e,t,n,r,i){function l(e,t){return'style="display:block;"'}function c(e,t){var r="";return r+='\r\n        <button id="CredSetupRemove" class="link-style">'+u(n.i18n.call(e,"SETTINGS_LABEL_REMOVE_CREDENTIAL",{hash:{},data:t}))+"</button>\r\n        ",r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a="function",f=this;s+='<div class="modal-header">\r\n  <h3>'+u(n.i18n.call(t,"HEAD_LABEL_SETTING",{hash:{},data:i}))+'</h3><i class="modal-close">&times;</i>\r\n</div>\r\n\r\n<nav id="SettingsNav">\r\n  <span data-target="AccountTab">'+u(n.i18n.call(t,"HEAD_LABEL_ACCOUNT",{hash:{},data:i}))+'</span>\r\n  <span data-target="CredentialTab">'+u(n.i18n.call(t,"HEAD_LABEL_CREDENTIAL",{hash:{},data:i}))+'</span>\r\n  <!-- <span data-target="TokenTab">'+u(n.i18n.call(t,"SETTINGS_LABEL_ACCESSTOKEN",{hash:{},data:i}))+'</span> -->\r\n</nav>\r\n\r\n<div class="modal-body" id="SettingsBody">\r\n  <section id="AccountTab">\r\n    <dl class="dl-horizontal">\r\n      <dt>'+u(n.i18n.call(t,"HEAD_LABEL_ACCOUNT_USERNAME",{hash:{},data:i}))+"</dt><dd>"+u((o=t&&t.username,typeof o===a?o.apply(t):o))+"</dd>\r\n      <dt>"+u(n.i18n.call(t,"HEAD_LABEL_ACCOUNT_EMAIL",{hash:{},data:i}))+"</dt><dd>"+u((o=t&&t.email,typeof o===a?o.apply(t):o))+'</dd>\r\n    </dl>\r\n\r\n    <button id="AccountPwd" class="link-style">'+u(n.i18n.call(t,"HEAD_LABEL_CHANGE_PASSWORD",{hash:{},data:i}))+'</button>\r\n    <div id="AccountPwdWrap">\r\n\r\n      <dl class="dl-horizontal">\r\n        <dt>'+u(n.i18n.call(t,"HEAD_LABEL_CURRENT_PASSWORD",{hash:{},data:i}))+'</dt>\r\n        <dd><input type="password" class="input" id="AccountCurrentPwd" /></dd>\r\n\r\n        <dt>'+u(n.i18n.call(t,"HAED_LABEL_NEW_PASSWORD",{hash:{},data:i}))+'</dt>\r\n        <dd><input type="password" class="input" id="AccountNewPwd" /></dd>\r\n      </dl>\r\n\r\n      <div id="AccountInfo" class="empty-hide"></div>\r\n\r\n      <div id="AccountPwdBtns">\r\n        <button class="btn btn-blue" id="AccountUpdatePwd" disabled>'+u(n.i18n.call(t,"HEAD_BTN_UPDATE",{hash:{},data:i}))+'</button>\r\n        <span id="AccountCancelPwd" class="link-style">'+u(n.i18n.call(t,"HEAD_BTN_CANCEL",{hash:{},data:i}))+'</span>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id="CredentialTab">\r\n    <div id="CredDemoWrap" ',o=n.unless.call(t,t&&t.account,{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+=">\r\n      <h3>"+u(n.i18n.call(t,"SETTINGS_CRED_DEMO_TIT",{hash:{},data:i}))+"</h3>\r\n      <p>"+u(n.i18n.call(t,"SETTINGS_CRED_DEMO_TEXT",{hash:{},data:i}))+'</p>\r\n      <p class="tac"><button class="btn btn-blue cred-setup">'+u(n.i18n.call(t,"SETTINGS_CRED_DEMO_SETUP",{hash:{},data:i}))+'</button></p>\r\n    </div>\r\n\r\n    <div id="CredAwsWrap" class="pos-r" ',o=n["if"].call(t,t&&t.account,{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+=">\r\n      <h3>"+u(n.i18n.call(t,"SETTINGS_CRED_CONNECTED_TIT",{hash:{},data:i}))+'</h3>\r\n      <button class="cred-setup link-style">'+u(n.i18n.call(t,"SETTINGS_LABEL_ACCOUNT_UPDATE",{hash:{},data:i}))+'</button>\r\n      <dl class="dl-horizontal cred-setup-msg" style="margin-top:15px;">\r\n        <dt>'+u(n.i18n.call(t,"SETTINGS_LABEL_ACCOUNTID",{hash:{},data:i}))+"</dt><dd>"+u((o=t&&t.account,typeof o===a?o.apply(t):o))+"</dd>\r\n        <dt>"+u(n.i18n.call(t,"SETTINGS_LABEL_ACCESSKEY",{hash:{},data:i}))+"</dt><dd>"+u((o=t&&t.awsAccessKey,typeof o===a?o.apply(t):o))+"</dd>\r\n        <dt>"+u(n.i18n.call(t,"SETTINGS_LABEL_SECRETKEY",{hash:{},data:i}))+"</dt><dd>"+u((o=t&&t.awsSecretKey,typeof o===a?o.apply(t):o))+'</dd>\r\n      </dl>\r\n    </div>\r\n\r\n    <div id="CredSetupWrap">\r\n      <div id="CredSetupMsg" class="cred-setup-msg empty-hide"></div>\r\n      <ul>\r\n        <li>\r\n          <i class="icon-info icon-label tooltip" data-tooltip="'+u(n.i18n.call(t,"SETTINGS_TIP_CRED_ACCOUNTID",{hash:{},data:i}))+'"></i>\r\n          <label>'+u(n.i18n.call(t,"SETTINGS_LABEL_ACCOUNTID",{hash:{},data:i}))+'</label>\r\n          <input autocomplete="off" class="input" id="CredSetupAccount" type="text" value="'+u((o=t&&t.account,typeof o===a?o.apply(t):o))+'">\r\n        </li>\r\n        <li>\r\n          <i class="icon-info icon-label tooltip" data-tooltip="'+u(n.i18n.call(t,"SETTINGS_TIP_CRED_ACCESSKEY",{hash:{},data:i}))+'"></i>\r\n          <label>'+u(n.i18n.call(t,"SETTINGS_LABEL_ACCESSKEY",{hash:{},data:i}))+'</label>\r\n          <input autocomplete="off" class="input" id="CredSetupAccessKey" type="text" placeholder="'+u((o=t&&t.awsAccessKey,typeof o===a?o.apply(t):o))+'">\r\n        </li>\r\n        <li>\r\n          <i class="icon-info icon-label tooltip" data-tooltip="'+u(n.i18n.call(t,"SETTINGS_TIP_CRED_SECRETKEY",{hash:{},data:i}))+'"></i>\r\n          <label>'+u(n.i18n.call(t,"SETTINGS_LABEL_SECRETKEY",{hash:{},data:i}))+'</label>\r\n          <input autocomplete="off" class="input" id="CredSetupSecretKey" type="password" placeholder="'+u((o=t&&t.awsSecretKey,typeof o===a?o.apply(t):o))+'">\r\n        </li>\r\n      </ul>\r\n\r\n      <div class="cred-btn-wrap clearfix">\r\n        ',o=n.unless.call(t,t&&t.credNeeded,{hash:{},inverse:f.noop,fn:f.program(3,c,i),data:i});if(o||o===0)s+=o;return s+='\r\n        <button class="right link-style cred-setup-cancel">'+u(n.i18n.call(t,"SETTINGS_LABEL_ACCOUNT_CANCEL",{hash:{},data:i}))+'</button>\r\n        <button id="CredSetupSubmit" class="btn btn-blue right">'+u(n.i18n.call(t,"HEAD_BTN_SUBMIT",{hash:{},data:i}))+'</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div id="CredRemoveWrap">\r\n      <h3>'+u((o=t&&t.credRemoveTitle,typeof o===a?o.apply(t):o))+"</h3>\r\n      <div>"+u(n.i18n.call(t,"SETTINGS_CRED_REMOVE_TEXT",{hash:{},data:i}))+'</div>\r\n      <div class="cred-btn-wrap clearfix">\r\n        <button class="right link-style cred-cancel">'+u(n.i18n.call(t,"SETTINGS_LABEL_ACCOUNT_CANCEL",{hash:{},data:i}))+'</button>\r\n        <button id="CredRemoveConfirm" class="btn btn-red right">'+u(n.i18n.call(t,"SETTINGS_LABEL_REMOVE_CREDENTIAL",{hash:{},data:i}))+'</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div id="CredConfirmWrap">\r\n      <h3>'+u(n.i18n.call(t,"SETTINGS_CRED_UPDATE_CONFIRM_TIT",{hash:{},data:i}))+"</h3>\r\n      <div>"+u(n.i18n.call(t,"SETTINGS_CRED_UPDATE_CONFIRM_TEXT",{hash:{},data:i}))+'</div>\r\n      <div class="cred-btn-wrap clearfix">\r\n        <button class="right link-style cred-cancel">'+u(n.i18n.call(t,"SETTINGS_LABEL_ACCOUNT_CANCEL",{hash:{},data:i}))+'</button>\r\n        <button id="CredSetupConfirm" class="btn btn-red right">'+u(n.i18n.call(t,"SETTINGS_LABEL_UPDATE_CONFIRM",{hash:{},data:i}))+'</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div id="CredRemoving"><p>'+u(n.i18n.call(t,"SETTINGS_CRED_REMOVING",{hash:{},data:i}))+'</p><div class="loading-spinner"></div></div>\r\n    <div id="CredUpdating"><p>'+u(n.i18n.call(t,"SETTINGS_CRED_UPDATING",{hash:{},data:i}))+'</p><div class="loading-spinner"></div></div>\r\n\r\n  </section>\r\n\r\n  <section id="TokenTab">\r\n    <div id="TokenManager">\r\n      <p class="clearfix"> <button class="btn btn-blue right" id="TokenCreate">'+u(n.i18n.call(t,"SETTINGS_BTN_TOKEN_CREATE",{hash:{},data:i}))+"</button>"+u(n.i18n.call(t,"SETTINGS_INFO_TOKEN",{hash:{},data:i}))+'<a href="" target="_blank">'+u(n.i18n.call(t,"SETTINGS_INFO_TOKEN_LINK",{hash:{},data:i}))+'</a> </p>\r\n      <ul class="token-table" data-empty="'+u(n.i18n.call(t,"SETTINGS_INFO_TOKEN_EMPTY",{hash:{},data:i}))+'"></ul>\r\n    </div>\r\n    <div id="TokenRmConfirm" class="hide">\r\n      <h3 id="TokenRmTit"></h3>\r\n      <p>'+u(n.i18n.call(t,"SETTINGS_CONFIRM_TOKEN_RM",{hash:{},data:i}))+'</p>\r\n      <div class="cred-btn-wrap clearfix">\r\n        <button class="right link-style" id="TokenRmCancel">'+u(n.i18n.call(t,"SETTINGS_LABEL_ACCOUNT_CANCEL",{hash:{},data:i}))+'</button>\r\n        <button id="TokenRemove" class="btn btn-red right">'+u(n.i18n.call(t,"SETTINGS_BTN_TOKEN_REMOVE",{hash:{},data:i}))+"</button>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n",s};return e.template(t)}),function(){define("ide/subviews/SettingsDialog",["./SettingsDialogTpl","i18n!nls/lang.js","ApiRequest","backbone"],function(e,t,n){var r;return r=Backbone.View.extend({events:{"click #SettingsNav span":"switchTab","click #AccountPwd":"showPwd","click #AccountCancelPwd":"hidePwd","click #AccountUpdatePwd":"changePwd","click .cred-setup, .cred-cancel":"showCredSetup","click .cred-setup-cancel":"cancelCredSetup","click #CredSetupRemove":"showRemoveCred","click #CredRemoveConfirm":"removeCred","click #CredSetupSubmit":"submitCred","click #CredSetupConfirm":"confirmCred","click #TokenCreate":"createToken","click .tokenControl .icon-edit":"editToken","click .tokenControl .icon-delete":"removeToken","click .tokenControl .tokenDone":"doneEditToken","click #TokenRemove":"confirmRmToken","click #TokenRmCancel":"cancelRmToken","keyup #CredSetupAccount, #CredSetupAccessKey, #CredSetupSecretKey":"updateSubmitBtn","keyup #AccountCurrentPwd, #AccountNewPwd":"updatePwdBtn"},initialize:function(n){var i,s;i={username:App.user.get("username"),email:App.user.get("email"),account:App.user.get("account"),awsAccessKey:App.user.get("awsAccessKey"),awsSecretKey:App.user.get("awsSecretKey"),credRemoveTitle:sprintf(t.ide.SETTINGS_CRED_REMOVE_TIT,App.user.get("username")),credNeeded:!!_.reduce(_.map(MC.data.app_list,function(e){return e.length}),function(e,t){return e+t},0)},modal(e(i)),this.setElement($("#modal-box")),s=0,n&&(s=n.defaultTab||0,s===r.TAB.CredentialInvalid&&(this.showCredSetup(),$(".modal-close").hide(),$("#CredSetupMsg").text(t.ide.SETTINGS_ERR_CRED_VALIDATE)),s<0&&(s=Math.abs(defaultTab))),$("#SettingsNav").children().eq(s).click(),this.updateTokenTab()},updateCredSettings:function(){var n;return n={username:App.user.get("username"),email:App.user.get("email"),account:App.user.get("account"),awsAccessKey:App.user.get("awsAccessKey"),awsSecretKey:App.user.get("awsSecretKey"),credRemoveTitle:sprintf(t.ide.SETTINGS_CRED_REMOVE_TIT,App.user.get("username"))},$("#modal-box").html(e(n)),$("#SettingsNav").children().eq(r.TAB.Credential).click()},switchTab:function(e){var t;t=$(e.currentTarget);if(t.hasClass("selected"))return;$("#SettingsBody").children().hide(),$("#SettingsNav").children().removeClass("selected"),$("#"+t.addClass("selected").attr("data-target")).show()},showPwd:function(){$("#AccountPwd").hide(),$("#AccountPwdWrap").show(),$("#AccountCurrentPwd").focus()},hidePwd:function(){$("#AccountPwd").show(),$("#AccountPwdWrap").hide(),$("#AccountCurrentPwd, #AccountNewPwd").val(""),$("#AccountInfo").empty()},updatePwdBtn:function(){var e,t;t=$("#AccountCurrentPwd").val()||"",e=$("#AccountNewPwd").val()||"",t.length&&e.length?$("#AccountUpdatePwd").removeAttr("disabled"):$("#AccountUpdatePwd").attr("disabled","disabled")},changePwd:function(){var e,n;n=$("#AccountCurrentPwd").val()||"",e=$("#AccountNewPwd").val()||"";if(e.length<6){$("#AccountInfo").text(t.ide.SETTINGS_ERR_INVALID_PWD);return}$("#AccountInfo").empty(),$("#AccountUpdatePwd").attr("disabled","disabled"),App.user.changePassword(n,e).then(function(){notification("info",t.ide.SETTINGS_UPDATE_PWD_SUCCESS),$("#AccountCancelPwd").click(),$("#AccountUpdatePwd").removeAttr("disabled")},function(e){return e.error===2?$("#AccountInfo").html(""+t.ide.SETTINGS_ERR_WRONG_PWD+" <a href='/reset/' target='_blank'>"+t.ide.SETTINGS_INFO_FORGET_PWD+"</a>"):$("#AccountInfo").text(t.ide.SETTINGS_UPDATE_PWD_FAILURE),$("#AccountUpdatePwd").removeAttr("disabled")})},showCredSetup:function(){$("#CredentialTab").children().hide(),$("#CredSetupWrap").show(),$("#CredSetupAccount").focus()[0].select(),$("#CredSetupRemove").toggle(App.user.hasCredential()),this.updateSubmitBtn()},cancelCredSetup:function(){$("#CredentialTab").children().hide(),App.user.hasCredential()?$("#CredAwsWrap").show():$("#CredDemoWrap").show()},showRemoveCred:function(){$("#CredentialTab").children().hide(),$("#CredRemoveWrap").show()},removeCred:function(){var e;$("#CredentialTab").children().hide(),$("#CredRemoving").show(),$("#modal-box .modal-close").hide(),e=this,App.user.changeCredential().then(function(){e.updateCredSettings()},function(){return $("#CredSetupMsg").text(t.ide.SETTINGS_ERR_CRED_REMOVE),$("#modal-box .modal-close").show(),e.showCredSetup()})},updateSubmitBtn:function(){var e,t,n;t=$("#CredSetupAccount").val(),e=$("#CredSetupAccessKey").val(),n=$("#CredSetupSecretKey").val(),t.length&&e.length&&n.length?$("#CredSetupSubmit").removeAttr("disabled"):$("#CredSetupSubmit").attr("disabled","disabled")},submitCred:function(){var e,n,r;return $("#CredentialTab").children().hide(),$("#CredUpdating").show(),$("#modal-box .modal-close").hide(),e=$("#CredSetupAccessKey").val(),n=$("#CredSetupSecretKey").val(),r=this,App.user.validateCredential(e,n).then(function(){r.setCred()},function(){$("#CredSetupMsg").text(t.ide.SETTINGS_ERR_CRED_VALIDATE),$("#modal-box .modal-close").show(),r.showCredSetup()})},setCred:function(){var e,t,r,i;return t=$("#CredSetupAccount").val(),e=$("#CredSetupAccessKey").val(),r=$("#CredSetupSecretKey").val(),i=this,App.user.changeCredential(t,e,r,!1).then(function(){return i.updateCredSettings()},function(e){e.error===n.Errors.ChangeCredConfirm?i.showCredConfirm():i.showCredUpdateFail()})},showCredUpdateFail:function(){return $("#CredSetupMsg").text(t.ide.SETTINGS_ERR_CRED_UPDATE),$("#modal-box .modal-close").show(),this.showCredSetup()},showCredConfirm:function(){return $("#CredentialTab").children().hide(),$("#CredConfirmWrap").show(),$("#modal-box .modal-close").show()},confirmCred:function(){var e,t,n,r;t=$("#CredSetupAccount").val(),e=$("#CredSetupAccessKey").val(),n=$("#CredSetupSecretKey").val(),r=this,App.user.changeCredential(t,e,n,!0).then(function(){return r.updateCredSettings()},function(){return r.showCredUpdateFail()})},editToken:function(e){var t,n;n=$(e.currentTarget),t=n.closest("li").toggleClass("editing",!0),t.children(".tokenName").removeAttr("readonly").focus().select()},removeToken:function(e){var n,r;n=$(e.currentTarget).closest("li"),r=n.children(".tokenName").val(),this.rmToken=n.children(".tokenToken").text(),$("#TokenManager").hide(),$("#TokenRmConfirm").show(),$("#TokenRmTit").text(sprintf(t.ide.SETTINGS_CONFIRM_TOKEN_RM_TIT,r))},createToken:function(){var e;$("#TokenCreate").attr("disabled","disabled"),e=this,Q.defer().promise.then(function(){return e.updateTokenTab(),$("#TokenCreate").removeAttr("disabled")},function(){return $("#TokenCreate").removeAttr("disabled")})},doneEditToken:function(e){var t;t=$(e.currentTarget).closest("li").removeClass("editing"),t.children(".tokenName").attr("readonly",!0),Q.defer().promise.then(function(){},function(){var e;return e="",t.children(".tokenName").val(e)})},confirmRmToken:function(){var e;$("#TokenRemove").attr("disabled","disabled"),e=this,Q.defer().promise.then(function(){return e.updateTokenTab(),e.cancelRmToken()},function(){return notification("Fail to delete access token, please retry.")})},cancelRmToken:function(){this.rmToken="",$("#TokenManager").show(),$("#TokenRmConfirm").hide()},updateTokenTab:function(){var e;e=[{name:"Token1",token:"aaabbbccc"},{name:"Token2",token:"bbbdddccc"}],e.length?$("#TokenManager").children("ul").html(MC.template.accessTokenTable(e)):$("#TokenManager").empty()}}),r.TAB={CredentialInvalid:-1,Normal:0,Credential:1,Token:2},r})}.call(this),function(){define("ide/subviews/HeaderView",["./HeaderTpl","./SettingsDialog","backbone"],function(e,t){var n;return n=Backbone.View.extend({events:{"click #HeaderLogout":"logout","click #HeaderSettings":"settings","click #HeaderShortcuts":"shortcuts","DROPDOWN_CLOSE #HeaderNotification":"dropdownClosed"},initialize:function(){this.listenTo(App.user,"change",this.update),this.listenTo(App.model,"change:notification",this.updateNotification),this.setElement($(e(App.user.toJSON())).prependTo("#header-wrapper"))},logout:function(){return App.logout()},shortcuts:function(){return modal(MC.template.shortkey())},settings:function(){return new t},update:function(){return $("#HeaderUser").data("tooltip",App.user.get("email")).children("span").text(App.user.get("username"))},setAlertCount:function(e){return $("#NotificationCounter").text(e||"")},updateNotification:function(){var e,t,n,r,i,s;void 0,n=App.model.get("notification"),e="",r=0;for(i=0,s=n.length;i<s;i++)t=n[i],e+=MC.template.headerNotifyItem(t),t.is_readed||r++;return this.setAlertCount(r),$("#notification-panel-wrapper").find(".scroll-content").html(e),$("#notification-panel-wrapper").css("max-height",Math.ceil(window.innerHeight*.8)),null},dropdownClosed:function(){return $("#notification-panel-wrapper").find(".scroll-content").children().removeClass("unread"),this.setAlertCount(),App.model.markNotificationRead(),null}}),n})}.call(this),define("ide/subviews/WelcomeTpl",["handlebars"],function(e){var t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a="function";return s+='<div class="modal-header"> <h3>'+u(n.i18n.call(t,"WELCOME_DIALOG_TIT",{hash:{},data:i}))+'</h3> </div>\r\n\r\n<div id="WelcomeDialog">\r\n\r\n<section id="WelcomeSettings">\r\n  <header>\r\n    <h2>'+u(n.i18n.call(t,"WELCOME_TIT",{hash:{},data:i}))+"<span>"+u((o=t&&t.username,typeof o===a?o.apply(t):o))+"</span></h2>\r\n    <p>"+u(n.i18n.call(t,"WELCOME_DESC",{hash:{},data:i}))+'</p>\r\n  </header>\r\n  <div id="CredSetupWrap">\r\n    <div id="CredSetupMsg" class="cred-setup-msg empty-hide"></div>\r\n    <ul>\r\n      <li>\r\n        <i class="icon-info icon-label tooltip" data-tooltip="'+u(n.i18n.call(t,"SETTINGS_TIP_CRED_ACCOUNTID",{hash:{},data:i}))+'"></i>\r\n        <label>'+u(n.i18n.call(t,"SETTINGS_LABEL_ACCOUNTID",{hash:{},data:i}))+'</label>\r\n        <input autocomplete="off" class="input" id="CredSetupAccount" type="text">\r\n      </li>\r\n      <li>\r\n        <i class="icon-info icon-label tooltip" data-tooltip="'+u(n.i18n.call(t,"SETTINGS_TIP_CRED_ACCESSKEY",{hash:{},data:i}))+'"></i>\r\n        <label>'+u(n.i18n.call(t,"SETTINGS_LABEL_ACCESSKEY",{hash:{},data:i}))+'</label>\r\n        <input autocomplete="off" class="input" id="CredSetupAccessKey" type="text">\r\n      </li>\r\n      <li>\r\n        <i class="icon-info icon-label tooltip" data-tooltip="'+u(n.i18n.call(t,"SETTINGS_TIP_CRED_SECRETKEY",{hash:{},data:i}))+'"></i>\r\n        <label>'+u(n.i18n.call(t,"SETTINGS_LABEL_SECRETKEY",{hash:{},data:i}))+'</label>\r\n        <input autocomplete="off" class="input" id="CredSetupSecretKey" type="password">\r\n      </li>\r\n    </ul>\r\n\r\n    <footer class="cred-btn-wrap clearfix tar">\r\n      <button id="WelcomeSkip" class="link-style">'+u(n.i18n.call(t,"HEAD_LABEL_ACCOUNT_SKIP",{hash:{},data:i}))+'</button>\r\n      <button id="CredSetupSubmit" class="btn btn-blue" disabled="disabled">'+u(n.i18n.call(t,"HEAD_BTN_SUBMIT",{hash:{},data:i}))+'</button>\r\n    </footer>\r\n  </div>\r\n</section>\r\n\r\n<section id="WelcomeCredUpdate" class="hide">\r\n  <p>'+u(n.i18n.call(t,"SETTINGS_CRED_UPDATING",{hash:{},data:i}))+'</p>\r\n  <div class="loading-spinner"></div>\r\n</section>\r\n\r\n<section id="WelcomeSkipWarning" class="hide modal-body">\r\n  <h3>'+u(n.i18n.call(t,"WELCOME_SKIP_TIT",{hash:{},data:i}))+"</h3>\r\n  <h5>"+u(n.i18n.call(t,"WELCOME_SKIP_SUBTIT",{hash:{},data:i}))+"</h5>\r\n  <p>"+u(n.i18n.call(t,"WELCOME_SKIP_MSG",{hash:{},data:i}))+"</p>\r\n  <p>"+u(n.i18n.call(t,"WELCOME_SKIP_MSG_EXTRA",{hash:{},data:i}))+'</p>\r\n  <footer class="cred-btn-wrap clearfix tar">\r\n    <button id="WelcomeBack" class="link-style">'+u(n.i18n.call(t,"HEAD_BTN_BACK",{hash:{},data:i}))+'</button>\r\n    <button id="WelcomeDone" class="btn btn-blue">'+u(n.i18n.call(t,"HEAD_BTN_DONE",{hash:{},data:i}))+'</button>\r\n  </footer>\r\n</section>\r\n\r\n<section id="WelcomeDoneWrap" class="hide">\r\n  <p id="WelcomeDoneTitDemo">'+u(n.i18n.call(t,"WELCOME_DONE_HINT_DEMO",{hash:{},data:i}))+'</p>\r\n  <p id="WelcomeDoneTit">'+u(n.i18n.call(t,"WELCOME_DONE_HINT",{hash:{},data:i}))+" <span></span></p>\r\n  <h3>"+u(n.i18n.call(t,"WELCOME_DONE_TIT",{hash:{},data:i}))+"</h3>\r\n  <ul>"+u(n.i18n.call(t,"WELCOME_DONE_MSG",{hash:{},data:i}))+'</ul>\r\n  <footer class="cred-btn-wrap clearfix tar">\r\n    <button id="WelcomeClose" class="btn btn-blue">'+u(n.i18n.call(t,"HEAD_BTN_DONE",{hash:{},data:i}))+"</button>\r\n  </footer>\r\n</section>\r\n\r\n</div>\r\n",s};return e.template(t)}),function(){define("ide/subviews/WelcomeDialog",["./WelcomeTpl","i18n!nls/lang.js","backbone"],function(e,t){var n;return n=Backbone.View.extend({events:{"click #WelcomeSkip":"skip","click #WelcomeBack":"back","click #WelcomeDone":"done","click #WelcomeClose":"close","click #CredSetupSubmit":"submitCred","keyup #CredSetupAccount, #CredSetupAccessKey, #CredSetupSecretKey":"updateSubmitBtn"},initialize:function(t){var n;n={username:App.user.get("username")},modal(e(n)),this.setElement($("#modal-box"))},skip:function(){return $("#WelcomeSettings").hide(),$("#WelcomeSkipWarning").show()},back:function(){return $("#WelcomeSettings").show(),$("#WelcomeSkipWarning").hide()},done:function(){return $("#WelcomeSettings, #WelcomeSkipWarning, #WelcomeCredUpdate").hide(),$("#WelcomeDoneWrap").show(),App.user.hasCredential()?($("#WelcomeDoneTitDemo").hide(),$("#WelcomeDoneTit").children("span").text(App.user.get("account"))):($("#WelcomeDoneTitDemo").show(),$("#WelcomeDoneTit").hide())},close:function(){return modal.close()},updateSubmitBtn:function(){var e,t,n;t=$("#CredSetupAccount").val(),e=$("#CredSetupAccessKey").val(),n=$("#CredSetupSecretKey").val(),t.length&&e.length&&n.length?$("#CredSetupSubmit").removeAttr("disabled"):$("#CredSetupSubmit").attr("disabled","disabled")},submitCred:function(){var e,n,r;return $("#WelcomeSettings").hide(),$("#WelcomeCredUpdate").show(),e=$("#CredSetupAccessKey").val(),n=$("#CredSetupSecretKey").val(),r=this,App.user.validateCredential(e,n).then(function(){r.setCred()},function(){$("#CredSetupMsg").text(t.ide.SETTINGS_ERR_CRED_VALIDATE),r.showCredSetup()})},setCred:function(){var e,n,r,i;return n=$("#CredSetupAccount").val(),e=$("#CredSetupAccessKey").val(),r=$("#CredSetupSecretKey").val(),i=this,App.user.changeCredential(n,e,r,!0).then(function(){i.done()},function(e){$("#CredSetupMsg").text(t.ide.SETTINGS_ERR_CRED_UPDATE),i.showCredSetup()})},showCredSetup:function(){$("#WelcomeDialog").children().hide(),$("#WelcomeSettings").show(),$("#CredSetupAccount").focus()[0].select(),this.updateSubmitBtn()}}),n})}.call(this),function(){define("ide/ApplicationView",["backbone","./subviews/SessionDialog","./subviews/HeaderView","./subviews/WelcomeDialog"],function(e,t,n,r){return e.View.extend({el:"body",events:{"click .click-select":"selectText"},initialize:function(){this.header=new n,this.listenTo(App.user,"change:state",this.toggleWelcome)},toggleWSStatus:function(e){if(e)return $(".disconnected-msg").remove();if($(".disconnected-msg").show().length>0)return;return $(MC.template.disconnectedMsg()).appendTo("body").on("mouseover",function(){$(".disconnected-msg").addClass("hovered"),$("body").on("mousemove.disconnectedmsg",function(e){var t,n,r,i;t=$(".disconnected-msg");if(!t.length){$("body").off("mousemove.disconnectedmsg");return}n=t.offset(),r=e.pageX,i=e.pageY;if(r<n.left||i<n.top||r>=n.left+t.outerWidth()||i>=n.top+t.outerHeight())$("body").off("mousemove.disconnectedmsg"),t.removeClass("hovered")})})},toggleWelcome:function(){App.user.isFirstVisit()&&new r},showSessionDialog:function(){return(new t).promise()},selectText:function(e){var t,n;try{n=document.body.createTextRange(),n.moveToElementText(e.currentTarget),n.select(),void 0}catch(r){t=r,window.getSelection&&(n=document.createRange(),n.selectNode(e.currentTarget),window.getSelection().addRange(n),void 0)}return!1}})})}.call(this),function(){define("ide/ApplicationModel",["backbone","./Websocket","event","constant"],function(e,t,n,r){return e.Model.extend({defaults:function(){return{notification:[],__websocketReady:!1}},initialize:function(){this.__initializeNotification()},__initializeNotification:function(){var e;return e=this,n.onLongListen(n.UPDATE_REQUEST_ITEM,function(t){return e.__processSingleNotification(t)})},__processSingleNotification:function(e){var t,n,r,i,s,o,u;i=App.WS.collection.request.findOne({_id:e});if(!i)return;r=this.__parseRequestInfo(i);if(!r)return;n=this.attributes.notification;for(e=o=0,u=n.length;o<u;e=++o){t=n[e];if(t.id===r.id){s=t;break}}if(s&&s.is_request===r.is_request&&s.is_process===r.is_process&&s.is_complete===r.is_complete)return;return r.is_readed=!App.WS.isReady(),n.splice(e,1),n.splice(0,0,r),this.__notifyDebounce||(this.__notifyDebounce=setTimeout(function(e){return function(){e.trigger("change:notification"),e.__notifyDebounce=null}}(this),300)),null},__parseRequestInfo:function(e){var t,n,i,s,o;if(!e.brief)return;return i=e.brief.split(" "),n={is_readed:!0,is_request:e.state===r.OPS_STATE.OPS_STATE_PENDING,is_process:e.state===r.OPS_STATE.OPS_STATE_INPROCESS,is_complete:e.state===r.OPS_STATE.OPS_STATE_DONE,operation:i[0].toLowerCase(),name:i[i.length-1],region_label:r.REGION_SHORT_LABEL[e.region],time:e.time_end},n=$.extend({},e,n),e.state===r.OPS_STATE.OPS_STATE_FAILED?n.error=e.data:e.state===r.OPS_STATE.OPS_STATE_INPROCESS&&(n.time=e.time_begin),e.state!==r.OPS_STATE.OPS_STATE_PENDING&&(n.time_str=MC.dateFormat(new Date(n.time*1e3),"hh:mm yyyy-MM-dd"),e.state!==r.OPS_STATE.OPS_STATE_INPROCESS&&(s=parseInt(e.time_begin,10),o=parseInt(e.time_end,10),!isNaN(s)&&!isNaN(o)&&o>=s&&(t=o-s,t<60?n.duration="Took "+t+" sec.":n.duration="Took "+Math.round(t/60)+" min."))),n.rid.search("stack")===0&&(n.name=i[2]),n.is_terminated=n.is_complete&&n.operation==="terminate",n},markNotificationRead:function(){var e,t,n,r;r=this.attributes.notification;for(t=0,n=r.length;t<n;t++)e=r[t],e.is_readed=!0}})})}.call(this),function(){define("ide/User",["ApiRequest","event","backbone"],function(e,t){var n;return n={NotFirstTime:2},Backbone.Model.extend({initialize:function(){this.set({usercode:$.cookie("usercode"),username:MC.base64Decode($.cookie("usercode")),session:$.cookie("session_id")})},hasCredential:function(){return!!this.get("account")},isFirstVisit:function(){return!(n.NotFirstTime&this.get("state"))},userInfoAccuired:function(t){var r;r={email:MC.base64Decode(t.email),repo:t.mod_repo,tag:t.mod_tag,state:parseInt(t.state,10),intercomHash:t.intercom_secret,account:t.account_id,awsAccessKey:t.access_key,awsSecretKey:t.secret_key},t.account_id==="demo_account"&&(r.account=r.awsAccessKey=r.awsSecretKey=""),this.set(r),this.isFirstVisit()&&e("updateAccount",{params:{state:this.get("state")|n.NotFirstTime}})},bootIntercom:function(){var e;if(!window.Intercom){e=setInterval(function(t){return function(){window.Intercom&&(void 0,clearInterval(e),t.bootIntercom())}}(this),1e3);return}window.Intercom("boot",{app_id:"3rp02j1w",email:this.get("email"),username:this.get("username"),user_hash:this.get("intercomHash"),widget:{activator:"#feedback"}})},fetch:function(){return e("login",{username:this.get("username"),password:this.get("session")}).then(function(e){return function(t){return e.userInfoAccuired(t),e.bootIntercom()}}(this),function(e){throw e.error<0?window.location.reload():App.logout(),e})},acquireSession:function(t){return e("login",{username:this.get("username"),password:t}).then(function(e){return function(t){$.cookie("session_id",t.session_id,{expires:30,path:"/"}),e.set("session",t.session_id),e.userInfoAccuired(t),e.trigger("SessionUpdated")}}(this))},logout:function(){var e,t,n,r;n={domain:window.location.hostname.replace("ide","")},r=$.cookie();for(t in r)e=r[t],$.removeCookie(t,n),$.removeCookie(t)},changePassword:function(t,n){return e("updateAccount",{params:{password:t,new_password:n}})},validateCredential:function(t,n){return e("validateCred",{access_key:t,secret_key:n})},changeCredential:function(n,r,i,s){var o;return n==null&&(n=""),r==null&&(r=""),i==null&&(i=""),s==null&&(s=!1),o=this,e("updateCred",{access_key:r,secret_key:i,account_id:n,force:s}).then(function(){var e;e={account:n,awsAccessKey:r,awsSecretKey:i},e.awsAccessKey.length>6&&(e.awsAccessKey=(new Array(r.length-6)).join("*")+r.substr(-6)),e.awsSecretKey.length>6&&(e.awsSecretKey=(new Array(i.length-6)).join("*")+i.substr(-6)),o.set(e),o.trigger("change:credential"),t.trigger(t.UPDATE_AWS_CREDENTIAL)})}})})}.call(this),function(){define("ide/Application",["./Websocket","./ApplicationView","./ApplicationModel","./User","./subviews/SettingsDialog","common_handle","event","vpc_model","constant"],function(e,t,n,r,i,s,o,u,a){var f;return f=function(){if(window.App){void 0;return}window.App=this},f.prototype.initialize=function(){return this.__createUser(),this.__createWebsocket(),this.model=new n,this.__view=new t,this.user.fetch()},f.prototype.__createWebsocket=function(){this.WS=new e,this.WS.on("Disconnected",function(e){return function(){return e.acquireSession()}}(this)),this.WS.on("StatusChanged",function(e){return function(t){return void 0,e.__view.toggleWSStatus(t)}}(this))},f.prototype.__createUser=function(){this.user=new r,this.user.on("SessionUpdated",function(e){return function(){return o.trigger(o.UPDATE_APP_LIST),o.trigger(o.UPDATE_DASHBOARD),e.WS.subscribe()}}(this)),this.user.on("change:credential",function(e){return function(){return e.__onCredentialChanged()}}(this))},f.prototype.__onCredentialChanged=function(){return u.DescribeAccountAttributes({sender:u},App.user.get("usercode"),App.user.get("session"),"",["supported-platforms","default-vpc"]),u.once("VPC_VPC_DESC_ACCOUNT_ATTRS_RETURN",function(e){var t;void 0;if(e.is_error)return;return t=e.resolved_data,_.map(a.REGION_KEYS,function(e){var n,r;if(t[e]&&t[e].accountAttributeSet)return r=t[e].accountAttributeSet.item[0].attributeValueSet.item,r&&$.type(r)==="array"&&(r.length===2?MC.data.account_attribute[e].support_platform=r[0].attributeValue+","+r[1].attributeValue:r.length===1&&(MC.data.account_attribute[e].support_platform=r[0].attributeValue)),n=t[e].accountAttributeSet.item[1].attributeValueSet.item,n&&$.type(n)==="array"&&n.length===1&&(MC.data.account_attribute[e].default_vpc=n[0].attributeValue),null})})},f.prototype.acquireSession=function(){return o.trigger(o.SWITCH_MAIN),this.__view.showSessionDialog()},f.prototype.logout=function(){App.user.logout(),window.location.href="/login/"},f.prototype.showSettings=function(e){return new i({defaultTab:e})},f.prototype.showSettings.TAB=i.TAB,f})}.call(this);