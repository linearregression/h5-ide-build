define("component/common/comboDropdownTpl",["handlebars"],function(e){var t,n={};return t=function(e,t,n,r,i){function l(e,t){var n="",r;return n+='\n            <input class="input combo-dd-filter" type="text" placeholder="'+a((r=e&&e.filterPlaceHolder,typeof r===u?r.apply(e):r))+'"/>\n        ',n}function c(e,t){var n="",r;return n+='\n            <div class="combo-dd-manage btn btn-primary" style="display:none;">'+a((r=e&&e.manageBtnValue,typeof r===u?r.apply(e):r))+"</div>\n        ",n}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+='<div class="selectbox combo-dd multiopen '+a((o=t&&t.classList,typeof o===u?o.apply(t):o))+'" data-silent-close="#modal-wrap">\n    <div class="selection"></div>\n\n    <div class="dropdown">\n        ',o=n.unless.call(t,t&&t.noFilter,{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+='\n        <div class="scroll-wrap scrollbar-auto-hide clearfix">\n            <div class="scrollbar-veritical-wrap"><div class="scrollbar-veritical-thumb"></div></div>\n            <div class="scroll-content combo-dd-content">\n            </div>\n        </div>\n        ',o=n.unless.call(t,t&&t.noManage,{hash:{},inverse:f.noop,fn:f.program(3,c,i),data:i});if(o||o===0)s+=o;return s+="\n    </div>\n</div>",s},n.frame=e.template(t),t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<ul class="combo-dd-list"></ul>'},n.listframe=e.template(t),t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div class="loading-spinner loading-spinner-small"></div>'},n.loading=e.template(t),t=function(e,t,n,r,i){function f(e,t){var r="";return r+='\n        <a class="show-credential">'+u(n.i18n.call(e,"COMBO_DROPDOWN_PRIVIDE_AWS_CREDENTIAL_WITH_TYPE",e&&e.resourceName,{hash:{},data:t}))+"</a>\n    ",r}function l(e,t){var r="";return r+='\n        <a class="show-credential">'+u(n.i18n.call(e,"COMBO_DROPDOWN_PRIVIDE_AWS_CREDENTIAL",{hash:{},data:t}))+"</a>\n    ",r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a=this;s+='<div class="no-credential tac">\n    <p>'+u(n.i18n.call(t,"COMBO_DROPDOWN_DEMO_AWS_ACCOUNT",{hash:{},data:i}))+"</p>\n    ",o=n["if"].call(t,t&&t.resourceName,{hash:{},inverse:a.program(3,l,i),fn:a.program(1,f,i),data:i});if(o||o===0)s+=o;return s+="\n</div>",s},n.nocredential=e.template(t),n}),define("credentialFormView",["constant","ApiRequest","Credential","UI.modalplus","i18n!/nls/lang.js","backbone"],function(e,t,n,r,i){var s,o;return o={add:i.IDE.SETTINGS_CRED_ADDING,update:i.IDE.SETTINGS_CRED_UPDATING,remove:i.IDE.SETTINGS_CRED_REMOVING},s=Backbone.View.extend({events:{"keyup input":"updateSubmitBtn","paste input":"deferUpdateSubmitBtn"},initialize:function(e){return _.extend(this,e)},render:function(){var e,t,n;return this.credential?(t=this.credential.toJSON(),n=i.IDE.UPDATE_CLOUD_CREDENTIAL,e=i.IDE.HEAD_BTN_UPDATE):(t={},n=i.IDE.ADD_CLOUD_CREDENTIAL,e=i.IDE.CFM_BTN_ADD),this.$el.html(MC.template.credentialForm(t)),this.modal=new r({title:n,template:this.el,width:480,confirm:{text:e,disabled:!0}}),this.modal.on("confirm",function(){return this.credential?this.updateCredential():this.addCredential(),this.trigger("confirm")},this),this},loading:function(){var e;return this.$("#CredSetupWrap").hide(),e=this.credential?"Update":"Add",this.$el.append(MC.template.credentialLoading({tip:o[e]})),this.modal.toggleFooter(!1)},loadingEnd:function(){return this.$(".loading-zone").remove(),this.$("#CredSetupWrap").show(),this.modal.toggleFooter(!0)},remove:function(){var e,t;return(e=this.updateConfirmView)!=null&&e.close(),(t=this.modal)!=null&&t.close(),Backbone.View.prototype.remove.apply(this,arguments)},deferUpdateSubmitBtn:function(e){return _.defer(_.bind(this.updateSubmitBtn,this,e))},updateSubmitBtn:function(){var e;e=this.getData(),e.alias.length&&e.awsAccount.length&&e.awsAccessKey.length&&e.awsSecretKey.length?this.modal.toggleConfirm(!1):this.modal.toggleConfirm(!0)},addCredential:function(){var e,r,s,o,u;return u=this,s=this.getData(),o=n.PROVIDER.AWSGLOBAL,e=this.model.credentials().findWhere({provider:o}),e?e.set(s,{silent:!0}):(r={alias:s.alias,account_id:s.awsAccount,access_key:s.awsAccessKey,secret_key:s.awsSecretKey},r.provider=s.provider||n.PROVIDER.AWSGLOBAL,e=new n(r,{project:this.model})),this.loading(),e.save().then(function(){return u.remove()},function(e){var n;return e.error===t.Errors.UserInvalidCredentia?n=i.IDE.SETTINGS_ERR_CRED_VALIDATE:n=i.IDE.SETTINGS_ERR_CRED_UPDATE,u.loadingEnd(),u.showModalError(n)})},showUpdateConfirmModel:function(){var e;return(e=this.updateConfirmView)!=null&&e.close(),this.updateConfirmView=new r({title:i.IDE.UPDATE_CLOUD_CREDENTIAL,template:MC.template.updateCredentialConfirm,confirm:{text:i.IDE.SETTINGS_LABEL_UPDATE_CONFIRM,color:"red"}}),this.updateConfirmView.on("confirm",function(){return this.updateCredential(!0),this.updateConfirmView.close()},this)},updateCredential:function(e){var n,r;return e==null&&(e=!1),r=this,this.credential?(this.loading(),n=this.getData(),this.credential.save(n,e,!0).then(function(){var e;return(e=r.updateConfirmView)!=null&&e.close(),r.remove()},function(e){var n;return r.loadingEnd(),e.error===t.Errors.UserInvalidCredentia?n=i.IDE.SETTINGS_ERR_CRED_VALIDATE:e.error===t.Errors.ChangeCredConfirm?(r.hideModalError(),r.showUpdateConfirmModel()):n=i.IDE.SETTINGS_ERR_CRED_UPDATE,n&&r.showModalError(n)})):!1},showModalError:function(e){return this.$el.find(".cred-setup-msg").show().html(e)},hideModalError:function(){return this.$el.find(".cred-setup-msg").hide()},getData:function(){var e;return e=this,{alias:e.$("#CredSetupAlias").val(),awsAccount:e.$("#CredSetupAccount").val(),awsAccessKey:e.$("#CredSetupAccessKey").val(),awsSecretKey:e.$("#CredSetupSecretKey").val()}}}),s}),define("combo_dropdown",["component/common/comboDropdownTpl","backbone","jquery","credentialFormView"],function(e,t,n,r){return t.View.extend({tagName:"section",events:{"click .combo-dd-manage":"__manage","click .show-credential":"__showCredential","OPTION_SHOW .selectbox":"__optionShow","OPTION_CHANGE .selectbox":"__optionChange","keyup .combo-dd-filter":"__filter","keydown .combo-dd-filter":"__stopPropagation","click .combo-dd-filter":"__returnFalse","click .create-one":"__quickCreate"},__quickCreate:function(){return this.trigger("quick_create")},__stopPropagation:function(e){return e.stopPropagation()},__returnFalse:function(){return!1},__showCredential:function(){return(new r({model:Design.instance().project()})).render()},__filter:function(e){return this.trigger("filter",e.currentTarget.value)},__manage:function(e){return this.trigger("manage"),e.stopPropagation()},__optionShow:function(){return this.$(".combo-dd-filter").val(""),this.$(".combo-dd-content").html().trim()||this.render("loading"),this.trigger("open")},__optionChange:function(e,t,n){return this.trigger("change",t,n)},initialize:function(t){return this.options=t,this.$el.html(e.frame(this.options)),this},render:function(t){return this.$(".combo-dd-content").html(e[t]&&e[t](this.options)||t),this},setSelection:function(e){return this.$(".selection").html(e),this},getSelection:function(e){return n.trim(this.$(".selection").text())},setContent:function(t){return this.$(".combo-dd-content").html(e.listframe),this.$(".combo-dd-list").html(t),this},toggleControls:function(e,t){return t?this.$(".combo-dd-"+t).toggle(e):this.$(".combo-dd-filter, .combo-dd-manage").toggle(e),this},delegate:function(e,t){var n,r,i,s,o,u,a;if(!e||!_.isObject(e))return this;for(s=u=0,a=e.length;u<a;s=++u){r=e[s];if(!s)continue;i=r.match(/^(\S+)\s*(.*)$/),n=i[1],o=i[2],s=_.bind(s,t||this),n+=".delegateEvents"+this.cid,o===""?this.$el.on(n,s):this.$el.on(n,o,s)}return this}})}),define("component/common/toolbarModalTpl",["handlebars"],function(e){var t,n={};return t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression;return s+='<div class="modal-toolbar '+a((o=t&&t.classList,typeof o===u?o.apply(t):o))+'">\n    <div class="content-wrap">\n\n    </div>\n</div>',s},n.frame=e.template(t),t=function(e,t,n,r,i){function l(e,t){var r="",i;r+='\n<div class="toolbar">\n        ',i=n["if"].call(e,e&&e.btnValueCreate,{hash:{},inverse:u.noop,fn:u.program(2,c,t),data:t});if(i||i===0)r+=i;r+='\n        <div class="btn-group">\n            ',i=n.each.call(e,e&&e.buttons,{hash:{},inverse:u.noop,fn:u.program(5,p,t),data:t});if(i||i===0)r+=i;return r+="\n        </div>\n</div>\n",r}function c(e,t){var r="",i;r+='\n        <button class="icon-new-stack btn btn-blue t-m-btn ',i=n["if"].call(e,e&&e.active,{hash:{},inverse:u.noop,fn:u.program(3,h,t),data:t});if(i||i===0)r+=i;return r+='" data-btn="create">'+f((i=e&&e.btnValueCreate,typeof i===a?i.apply(e):i))+"</button>\n        ",r}function h(e,t){return"active"}function p(e,t){var r="",i;r+='\n            <button class="icon-'+f((i=e&&e.icon,typeof i===a?i.apply(e):i))+" t-m-btn ",i=n["if"].call(e,e&&e.active,{hash:{},inverse:u.noop,fn:u.program(3,h,t),data:t});if(i||i===0)r+=i;r+='" data-btn="'+f((i=e&&e.type,typeof i===a?i.apply(e):i))+'" ',i=n["if"].call(e,e&&e.disabled,{hash:{},inverse:u.noop,fn:u.program(6,d,t),data:t});if(i||i===0)r+=i;return r+=">"+f((i=e&&e.name,typeof i===a?i.apply(e):i))+"</button>\n            ",r}function d(e,t){return"disabled"}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this,a="function",f=this.escapeExpression;o=n["if"].call(t,t&&t.hasButton,{hash:{},inverse:u.noop,fn:u.program(1,l,i),data:i});if(o||o===0)s+=o;return s+='\n\n<div class="list">\n    <div class="slidebox" style="'+f((o=t&&t.slideStyle,typeof o===a?o.apply(t):o))+'">\n        <div class="content clearfix">\n            <div class="loading-spinner"></div>\n        </div>\n        <div class="error">\n            something wrong\n        </div>\n    </div>\n    '+f((o=t&&t.beforeTable,typeof o===a?o.apply(t):o))+'\n    <div class="list-content">\n    </div>\n\n\n</div>',s},n.toolbar_slide=e.template(t),t=function(e,t,n,r,i){function l(e,t){return'\n                <th>\n                    <div class="checkbox">\n                        <input id="t-m-select-all" type="checkbox" value="None">\n                        <label for="t-m-select-all"></label>\n                    </div>\n                </th>\n                '}function c(e,t){var r="",i;r+='\n                <th class="',i=n["if"].call(e,e&&e.sortable,{hash:{},inverse:f.noop,fn:f.program(4,h,t),data:t});if(i||i===0)r+=i;r+='" data-row-type="',i=n["if"].call(e,e&&e.rowType,{hash:{},inverse:f.program(8,d,t),fn:f.program(6,p,t),data:t});if(i||i===0)r+=i;r+='" style="',i=n["if"].call(e,e&&e.width,{hash:{},inverse:f.noop,fn:f.program(10,v,t),data:t});if(i||i===0)r+=i;return r+='">'+a((i=e&&e.name,typeof i===u?i.apply(e):i))+"</th>\n                ",r}function h(e,t){return"sortable"}function p(e,t){var n;return a((n=e&&e.rowType,typeof n===u?n.apply(e):n))}function d(e,t){return"string"}function v(e,t){var n="",r;return n+="width:"+a((r=e&&e.width,typeof r===u?r.apply(e):r))+";",n}function m(e,t){var n="",r;return n+='\n    <div style="overflow-y:auto;overflow-x:hidden;height: '+a((r=e&&e.height,typeof r===u?r.apply(e):r))+'px;">\n        ',n}function g(e,t){var r="",i;r+='\n        <div class="scroll-wrap" ',i=n["if"].call(e,e&&e.height,{hash:{},inverse:f.noop,fn:f.program(15,y,t),data:t});if(i||i===0)r+=i;return r+='>\n            <div class="scrollbar-veritical-wrap" style="display: block;"><div class="scrollbar-veritical-thumb"></div></div>\n            <div class="scroll-content" style="display:block;">\n                ',r}function y(e,t){var n="",r;return n+='style="height: '+a((r=e&&e.height,typeof r===u?r.apply(e):r))+'px" ',n}function b(e,t){return'<th><div class="th-inner"></div></th>'}function w(e,t){var r="",i;r+='\n                            <th style="',i=n["if"].call(e,e&&e.width,{hash:{},inverse:f.noop,fn:f.program(10,v,t),data:t});if(i||i===0)r+=i;return r+='"><div class="th-inner"></div></th>\n                            ',r}function E(e,t){return"\n            </div>\n            "}function S(e,t){return"\n        </div>\n    </div>\n    "}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+='<div class="table-head-fix will-be-covered">\n    <table class="table-head">\n        <thead>\n            <tr>\n                ',o=n.unless.call(t,t&&t.noCheckbox,{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+="\n                ",o=n.each.call(t,t&&t.columns,{hash:{},inverse:f.noop,fn:f.program(3,c,i),data:i});if(o||o===0)s+=o;s+="\n            </tr>\n        </thead>\n    </table>\n    ",o=n.unless.call(t,t&&t.useCustomScroll,{hash:{},inverse:f.program(14,g,i),fn:f.program(12,m,i),data:i});if(o||o===0)s+=o;s+='\n\n                <table class="table">\n                    <thead>\n                        <tr>\n                            ',o=n.unless.call(t,t&&t.noCheckbox,{hash:{},inverse:f.noop,fn:f.program(17,b,i),data:i});if(o||o===0)s+=o;s+="\n                            ",o=n.each.call(t,t&&t.columns,{hash:{},inverse:f.noop,fn:f.program(19,w,i),data:i});if(o||o===0)s+=o;s+="\n                        </tr>\n                    </thead>\n                    <tbody class='t-m-content'>\n                    </tbody>\n                </table>\n                ",o=n.unless.call(t,t&&t.useCustomScroll,{hash:{},inverse:f.program(23,S,i),fn:f.program(21,E,i),data:i});if(o||o===0)s+=o;return s+="\n</div>",s},n.table=e.template(t),t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div class="loading-spinner"></div>'},n.loading=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression;return s+='<tr class="table tr-detail">\n    <td colspan="'+a((o=t&&t.columnCount,typeof o===u?o.apply(t):o))+'"></td>\n</tr>',s},n.tr_detail=e.template(t),t=function(e,t,n,r,i){function f(e,t){var r="";return r+='\n        <a class="show-credential">'+u(n.i18n.call(e,"COMBO_DROPDOWN_PRIVIDE_AWS_CREDENTIAL_WITH_TYPE",e&&e.resourceName,{hash:{},data:t}))+"</a>\n    ",r}function l(e,t){var r="";return r+='\n        <a class="show-credential">'+u(n.i18n.call(e,"COMBO_DROPDOWN_PRIVIDE_AWS_CREDENTIAL",{hash:{},data:t}))+"</a>\n    ",r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a=this;s+='<div class="no-credential tac">\n    <p>'+u(n.i18n.call(t,"COMBO_DROPDOWN_DEMO_AWS_ACCOUNT",{hash:{},data:i}))+"</p>\n    ",o=n["if"].call(t,t&&t.resourceName,{hash:{},inverse:a.program(3,l,i),fn:a.program(1,f,i),data:i});if(o||o===0)s+=o;return s+="\n</div>",s},n.nocredential=e.template(t),n}),define("toolbar_modal",["component/common/toolbarModalTpl","backbone","jquery","UI.modalplus","credentialFormView","UI.notification"],function(e,t,n,r,i){return t.View.extend({tagName:"section",__slide:null,__modalplus:null,events:{"change #t-m-select-all":"__checkAll","change .one-cb":"__checkOne","click .t-m-btn":"__handleSlide","click tr .show-detail":"__handleDetail","click .cancel":"cancel","click .do-action":"__doAction","click [data-btn=refresh]":"__refresh","click .table-head .sortable":"__sort","click .show-credential":"__showCredential"},initialize:function(e){return this.options=e||{},this.options.title||(this.options.title="Default Title"),e.context&&(this.options.context.modal=this,this.options.context.M$=_.bind(this.$,this)),null},__showCredential:function(){return(new i({model:Design.instance().project()})).render()},__sort:function(){return this.$(".tr-detail").remove()},__doAction:function(e){var t;return this.error(),t=n(e.currentTarget).data("action"),this.trigger("action",t,this.getChecked())},getChecked:function(){var e,t;return e=this.$(".one-cb:checked"),t=[],e.each(function(){return t.push({id:this.id,value:this.value,data:n(this).data()})}),t},__slideReject:function(){return _.isFunction(this.options.slideable)&&!this.options.slideable()},__handleSlide:function(e){var t,r,i,s;r=n(e.currentTarget),s=r.data("btn");if(s==="refresh")return this;if(this.__slideReject())return this;t=this.$(".toolbar .active"),i=t&&t.data("btn");if(t.length)if(t.get(0)===r.get(0)){if(this.options.longtermActive)return;r.removeClass("active"),this.toggleSlide(!1),this.__slide=null,this.trigger("slideup",s,this.getChecked())}else t.removeClass("active"),r.addClass("active"),this.toggleSlide(!0),this.__slide=s,this.trigger("slidedown",s,this.getChecked());else r.addClass("active"),this.toggleSlide(!0),this.__slide=s,this.trigger("slidedown",s,this.getChecked());return null},__handleDetail:function(t){var r,i;return r=n(t.currentTarget),i=r.closest("tr"),i.hasClass("detailed")?(i.removeClass("detailed"),i.next(".tr-detail").remove()):(i.addClass("detailed").after(e.tr_detail({columnCount:this.options.columns.length+1})),this.trigger("detail",t,i.data(),i))},__refresh:function(){return this.__slideReject()?this:(this.renderLoading(),this.trigger("refresh"))},__close:function(e){return this.trigger("close"),this.remove(),!1},__checkOne:function(e){var t,r,i,s;return t=n(e.currentTarget),this.__processDelBtn(),r=this.$("#t-m-select-all"),i=this.$(".one-cb").length,s=this.$(".one-cb:checked").length,t.closest("tr").toggleClass("selected"),s===i?r.prop("checked",!0):i-s===1&&r.prop("checked",!1),this.__triggerChecked(e)},__checkAll:function(e){return this.__processDelBtn(),e.currentTarget.checked?this.$('input[type="checkbox"]:not(:disabled)').prop("checked",!0).parents("tr.item").addClass("selected"):(this.$('input[type="checkbox"]').prop("checked",!1),this.$("tr.item").removeClass("selected")),this.__triggerChecked(e)},__triggerChecked:function(e){return this.trigger("checked",e,this.getChecked())},__processDelBtn:function(e){var t;return arguments.length===1?this.$("[data-btn=delete]").prop("disabled",!e):(t=this,_.defer(function(){return t.$(".one-cb:checked").length?t.$("[data-btn=delete]").prop("disabled",!1):t.$("[data-btn=delete]").prop("disabled",!0)}))},__stopPropagation:function(e){var t;t=".sortable, #download-kp, .selection, .item";if(!n(e.target).is(t))return e.stopPropagation()},__open:function(){var e;return e={template:this.el,title:this.options.title,disableFooter:!0,disableClose:!0,width:"855px",height:"473px",compact:!0,hasScroll:!0,mode:"panel"},this.__modalplus=new r(e),this.__modalplus.on("closed",this.__close,this),this.__modalplus.on("resize",this.__resizeModal.bind(this)),this},__getHeightOfContent:function(){var e,t,r,i;return i=n(window).height(),e=this.__modalplus.tpl,r=e.find(".modal-header").outerHeight(),t=e.find(".modal-footer").height()||0,i-r-t-75},__resizeModal:function(){var e,t;t=this,this.__modalplus.tpl.find(".scrollbar-veritical-thumb").removeAttr("style"),e=this.__modalplus.tpl.find(".table-head-fix.will-be-covered .scroll-wrap"),e=e.size()>0?e:this.__modalplus.find(".will-be-covered>div");if(e.size())return e.height(t.__getHeightOfContent())},__renderToolbarSlide:function(){var t,n,r,i;r=this,t=this.$(".content-wrap");if(!t.find(".toolbar").size())return n=this.options,n.hasButton=(i=n.buttons)!=null?!!i.length:!!void 0,n.buttons=_.reject(n.buttons,function(e){if(e.type==="create")return n.btnValueCreate=e.name,!0}),n.height=r.__getHeightOfContent(),this.$(".content-wrap").html(e.toolbar_slide(n)),this},render:function(t){var n;return this.$el.html(e.frame(this.options)),_.isString(t)?(n=t,this.$(".content-wrap").html(e[n]&&e[n](this.options)||n)):this.renderLoading(),t||this.__open(),this},renderLoading:function(){return this.$(".content-wrap").html(e.loading),this},renderListLoading:function(){return this.$(".list-content").html(e.loading),this},setContent:function(t,n){return this.tempDom=t,this.__renderToolbarSlide(),n?this.$(".list-content").html(t):(this.$(".list-content").html(e.table(this.options)),this.$(".t-m-content").html(t)),this.__triggerChecked(null),this.trigger("rendered",this),this},setSlide:function(e){return this.$(".slidebox .content").html(e),this.error(),this},setDetail:function(e,t){var n;return n=e.next(".tr-detail"),n.find("td").html(t),n},triggerSlide:function(e){return this.$("[data-btn="+e+"]").click()},cancel:function(){var e;return this.__slideReject()?this:(e=this.$(".toolbar .active"),this.trigger("slideup",e.data("btn"),this.getChecked()),this.options.longtermActive||e.removeClass("active"),this.toggleSlide(!1),this)},unCheckSelectAll:function(){return this.$("#t-m-select-all").get(0).checked=!1,this.__processDelBtn(!1)},delegate:function(e,t){var n,r,i,s,o;if(!e||!_.isObject(e))return this;t=t||this;for(r in e){s=e[r],_.isFunction(s)||(s=t[e[r]]);if(!s)continue;i=r.match(/^(\S+)\s*(.*)$/),n=i[1],o=i[2],s=_.bind(s,t),n+=".delegateEvents"+this.cid,o===""?this.$el.on(n,s):this.$el.on(n,o,s)}return this},error:function(e){var t;return t=this.$(".error"),e?t.text(e).show():t.hide()},getSlide:function(){return this.__slide},toggleSlide:function(t){var n;return n=this.$(".slidebox"),t&&this.setSlide(e.loading),n.toggleClass("show",t||!1),this}})}),define("component/Common",function(){});