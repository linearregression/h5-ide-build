window.FileVersions={"api/ApiRequestR.js":"3e2ff4f4","api/ApiRequestRDefs.js":"98710ac0","api/api.js":"75694a1a","cloudres/CloudImportVpc.js":"1652749c","cloudres/CrBundle.js":"38ae03c7","component/AwsDialog.js":"fc8fef95","component/Exporter.js":"fe01a521","component/StateStatus.js":"a16b7ed5","component/Validation.js":"e1d5b8b6","component/jsonviewer/JsonDiffLib.js":"72283278","component/jsonviewer/JsonViewer.js":"792e638f","component/jsonviewer/diff.js":"bd56bf86","component/jsonviewer/jqUi.js":"d923bd6e","component/jsonviewer/view.js":"b2aa40ba","component/sharedrescomp.js":"b82d87be","component/stateeditor/stateeditor.js":"2ac3a53f","ide/AppBundle.js":"23863693","ide/config.js":"04f66292","ide/subviews/DebugTool.js":"fe819843","lib/aws.js":"7fea1368","lib/lib.js":"5ba89662","nls/en-us/lang.js":"c2965141","nls/lang.js":"1f8e5098","nls/zh-cn/lang.js":"c23675a9","service/service.js":"69f78c79","service/stack_model.js":"416dc0cc","ui/UI.tour.js":"fc26cabd","ui/ui.js":"88cc822c","user/main.js":"7bff74c7","vender/crypto-js/hmac-sha256.js":"9c71f2c7","vender/handlebars/handlebars.js":"d7201a49","vender/jquery/jquery.1.0.js":"6f208095","vender/jquery/jquery.cookie.min.js":"5b0faadb","vender/qunit/qunit.js":"3ecb8d51","vender/requirejs/require.js":"502e8699","vender/requirejs/requirelib.js":"56d23e84","vender/select2/select2.js":"e1af08ce","vender/select2/select2.min.js":"5776132c","vender/select2/select2_locale_zh-CN.js":"e753b135","vender/vender.js":"4d29eda7","workspaces/Dashboard.js":"b85d5028","workspaces/OpsEditor.js":"182fc8c5","workspaces/editor/PropertyPanel.js":"f52a4757","workspaces/editor/framework/DesignBundle.js":"f1055c9b","workspaces/editor/framework/util/DesignDebugger.js":"8a7de963","workspaces/editor/property/acl/template/app.js":"a72aad5e","workspaces/editor/property/sgrule/template/app.js":"9529c748"};
(function(){(function(){var e,t,n,r,i,s,o,u,a;if(!window)return;n=window.location;if(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.exec(n.hostname)){void 0;return}t=n.hostname.split("."),t.length>=3?window.MC_DOMAIN=t[t.length-2]+"."+t[t.length-1]:window.MC_DOMAIN=n.hostname,window.MC_API_HOST=n.protocol+"//api."+window.MC_DOMAIN,window.language=window.version="";if(n.hostname.toLowerCase().indexOf("visualops.io")>=0&&n.protocol==="http:"){window.location=n.href.replace("http:","https:");return}e=function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null};if(!e("usercode")||!e("session_id")){r=window.location.pathname,r==="/"&&(r=window.location.hash.replace("#","/")),r&&r!=="/"?window.location.href="/login?ref="+r:window.location.href="/login";return}s=document.getElementsByTagName("script");for(u=0,a=s.length;u<a;u++){i=s[u],o=i.getAttribute("data-main");if(o){window.version=o.split("?")[1];break}}return window.version==="#{version}"&&(window.version="dev"),window.language=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*lang\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1")||"en-us",null})(),require.config({baseUrl:"/",waitSeconds:30,locale:language,urlArgs:"v="+version,shim:{underscore:{exports:"_"},Meteor:{deps:["underscore"],exports:"Meteor"}},bundles:{"vender/requirejs/requirelib":["i18n"],"vender/vender":["jquery","backbone","underscore","handlebars","sprintf","Meteor","crypto","q","svg"],"lib/lib":["MC","constant","MC.canvas","MC.validate","lib/handlebarhelpers","event"],"ui/ui":["UI.tooltip","UI.scrollbar","UI.bubble","UI.modal","UI.table","UI.tablist","UI.selectbox","UI.searchbar","UI.filter","UI.radiobuttons","UI.notification","UI.multiinputbox","UI.canvg","UI.sortable","UI.parsley","UI.errortip","UI.dnd","jqpagination","jquerysort","jqtimepicker","jqdatetimepicker","UI.modalplus","UI.nanoscroller"],"api/api":["ApiRequest"],"service/service":["base_model","state_model","keypair_model","instance_model","result_vo","stack_service","state_service","ami_service","ebs_service","instance_service","keypair_service","customergateway_service"],"component/Exporter":["ThumbnailUtil","JsonExporter"],"component/Validation":["validation","component/trustedadvisor/gui/main"],"component/StateStatus":["state_status"],"component/AwsDialog":["component/sgrule/SGRulePopup","component/dbsbgroup/DbSubnetGPopup","appAction","og_manage","og_manage_app","og_dropdown"],"component/stateeditor/stateeditor":[],"component/sharedrescomp":["kp_dropdown","kp_manage","kp_upload","sns_dropdown","sns_manage","combo_dropdown","toolbar_modal","dhcp","snapshotManager","sslcert_manage","sslcert_dropdown","ResDiff","DiffTree","rds_pg","rds_snapshot"],"cloudres/CrBundle":["CloudResources"],"ide/AppBundle":["ide/Application","Workspace","OpsModel","ide/Router"],"workspaces/Dashboard":[],"workspaces/editor/PropertyPanel":["workspaces/editor/subviews/PropertyPanel"],"workspaces/editor/framework/DesignBundle":["Design"],"workspaces/OpsEditor":[]},bundleExcludes:{"component/AwsDialog":["Design"],"component/stateeditor/stateeditor":["Design"],"component/sharedrescomp":["Design"],"component/Validation":["Design"],"workspaces/editor/PropertyPanel":["Design"],"workspaces/editor/framework/DesignBundle":[],"workspaces/editor/subviews/PropertyPanel":["component/sgrule/SGRulePopup"]}}),requirejs.onError=function(e){var t,n,r,i;e=e||{requireType:"timeout"};if(e.requireType==="timeout"){i=e.requireModules||[];for(n=0,r=i.length;n<r;n++)t=i[n],requirejs.undef(t);return require(e.requireModules||[],function(){})}return void 0},require(["ide/Application","cloudres/CrBundle","workspaces/Dashboard","workspaces/OpsEditor","ide/Router","MC","MC.canvas","lib/aws"],function(e,t,n,r,i){return window.Router=new i,window.OpsEditor=r,(new e).initialize().then(function(){window.Router.start(),window.Dashboard=new n})},function(e){e=e||{requireType:"timeout"},e.requireType==="timeout"?(requirejs.onError=function(){},void 0,window.location.reload()):void 0})}).call(this);