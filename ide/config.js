window.FileVersions={"api/ApiRequestR.js":"3e2ff4f4","api/ApiRequestRDefs.js":"98710ac0","api/api.js":"7f081e3d","cloudres/CrBundle.js":"b65b3acd","component/AwsDialog.js":"bef39556","component/Exporter.js":"73a19096","component/StateStatus.js":"a16b7ed5","component/Validation.js":"53b893a7","component/jsonviewer/JsonDiffLib.js":"72283278","component/jsonviewer/JsonViewer.js":"792e638f","component/jsonviewer/diff.js":"f22a6a84","component/jsonviewer/jqUi.js":"d923bd6e","component/jsonviewer/view.js":"4f4c2a14","component/sharedrescomp.js":"080da866","component/stateeditor/stateeditor.js":"ea1240ad","ide/AppBundle.js":"62344c02","ide/config.js":"910aa259","ide/subviews/DebugTool.js":"fe819843","lib/aws.js":"c3953cd7","lib/lib.js":"6e12dca9","nls/en-us/lang.js":"6c4616d5","nls/lang.js":"1f8e5098","nls/zh-cn/lang.js":"465b5e3d","service/service.js":"69f78c79","service/stack_model.js":"416dc0cc","ui/UI.tour.js":"fc26cabd","ui/ui.js":"5954737a","user/main.js":"7bff74c7","vender/crypto-js/hmac-sha256.js":"9c71f2c7","vender/handlebars/handlebars.js":"d7201a49","vender/jquery/jquery.1.0.js":"6f208095","vender/jquery/jquery.cookie.min.js":"5b0faadb","vender/qunit/qunit.js":"3ecb8d51","vender/requirejs/require.js":"502e8699","vender/requirejs/requirelib.js":"56d23e84","vender/select2/select2.js":"e1af08ce","vender/select2/select2.min.js":"5776132c","vender/select2/select2_locale_zh-CN.js":"e753b135","vender/vender.js":"85589bcd","workspaces/Dashboard.js":"28a59737","workspaces/OpsEditor.js":"966d8c32","workspaces/editor/PropertyPanel.js":"ffe24a21","workspaces/editor/framework/DesignBundle.js":"8ae744bd","workspaces/editor/framework/util/DesignDebugger.js":"8a7de963","workspaces/editor/property/acl/template/app.js":"cc778dc4","workspaces/editor/property/sgrule/template/app.js":"6b6e2d5f"};
(function(){(function(){var e,t,n,r,i,s,o,u,a;if(!window)return;n=window.location;if(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.exec(n.hostname)){void 0;return}t=n.hostname.split("."),t.length>=3?window.MC_DOMAIN=t[t.length-2]+"."+t[t.length-1]:window.MC_DOMAIN=n.hostname,window.MC_API_HOST=n.protocol+"//api."+window.MC_DOMAIN,window.language=window.version="";if(n.hostname.toLowerCase().indexOf("visualops.io")>=0&&n.protocol==="http:"){window.location=n.href.replace("http:","https:");return}e=function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null};if(!e("usercode")||!e("session_id")){r=window.location.pathname,r==="/"&&(r=window.location.hash.replace("#","/")),r&&r!=="/"?window.location.href="/login?ref="+r:window.location.href="/login";return}s=document.getElementsByTagName("script");for(u=0,a=s.length;u<a;u++){i=s[u],o=i.getAttribute("data-main");if(o){window.version=o.split("?")[1];break}}return window.version==="#{version}"&&(window.version="dev"),window.language=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*lang\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1")||"en-us",null})(),require.config({baseUrl:"/",waitSeconds:30,locale:language,urlArgs:"v="+version,shim:{underscore:{exports:"_"},Meteor:{deps:["underscore"],exports:"Meteor"}},bundles:{"vender/requirejs/requirelib":["i18n"],"vender/vender":["jquery","backbone","underscore","handlebars","sprintf","Meteor","crypto","q","svg"],"lib/lib":["MC","constant","MC.canvas","MC.validate","lib/handlebarhelpers","event"],"ui/ui":["UI.tooltip","UI.scrollbar","UI.bubble","UI.modal","UI.table","UI.tablist","UI.selectbox","UI.searchbar","UI.filter","UI.radiobuttons","UI.notification","UI.multiinputbox","UI.canvg","UI.sortable","UI.parsley","UI.errortip","UI.dnd","jqpagination","jquerysort","jqtimepicker","UI.modalplus","UI.nanoscroller"],"api/api":["ApiRequest"],"service/service":["base_model","state_model","keypair_model","instance_model","result_vo","stack_service","state_service","ami_service","ebs_service","instance_service","keypair_service","customergateway_service"],"component/Exporter":["ThumbnailUtil","JsonExporter"],"component/Validation":["validation","component/trustedadvisor/gui/main"],"component/StateStatus":["state_status"],"component/AwsDialog":["component/sgrule/SGRulePopup","component/dbsbgroup/DbSubnetGPopup","appAction","og_manage","og_manage_app","og_dropdown"],"component/stateeditor/stateeditor":[],"component/sharedrescomp":["kp_dropdown","kp_manage","kp_upload","sns_dropdown","sns_manage","combo_dropdown","toolbar_modal","dhcp","snapshotManager","sslcert_manage","sslcert_dropdown","ResDiff","DiffTree","rds_pg","rds_snapshot"],"cloudres/CrBundle":["CloudResources"],"ide/AppBundle":["ide/Application","Workspace","OpsModel","ide/Router"],"workspaces/Dashboard":[],"workspaces/editor/PropertyPanel":["workspaces/editor/subviews/PropertyPanel"],"workspaces/editor/framework/DesignBundle":["Design"],"workspaces/OpsEditor":[]},bundleExcludes:{"component/AwsDialog":["Design"],"component/stateeditor/stateeditor":["Design"],"component/sharedrescomp":["Design"],"component/Validation":["Design"],"workspaces/editor/PropertyPanel":["Design"],"workspaces/editor/framework/DesignBundle":[],"workspaces/editor/subviews/PropertyPanel":["component/sgrule/SGRulePopup"]}}),requirejs.onError=function(e){var t,n,r,i;e=e||{requireType:"timeout"};if(e.requireType==="timeout"){i=e.requireModules||[];for(n=0,r=i.length;n<r;n++)t=i[n],requirejs.undef(t);return require(e.requireModules||[],function(){})}return void 0},require(["ide/Application","cloudres/CrBundle","workspaces/Dashboard","workspaces/OpsEditor","ide/Router","MC","MC.canvas","lib/aws"],function(e,t,n,r,i){return window.Router=new i,window.OpsEditor=r,(new e).initialize().then(function(){window.Router.start(),window.Dashboard=new n})},function(e){e=e||{requireType:"timeout"},e.requireType==="timeout"?(requirejs.onError=function(){},void 0,window.location.reload()):void 0})}).call(this);