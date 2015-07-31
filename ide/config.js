(function(){var e,t,n,r,i,s,o,u,a;if(!window)return;n=window.location;if(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.exec(n.hostname)){void 0;return}t=n.hostname.split("."),t.length>=3?window.MC_DOMAIN=t[t.length-2]+"."+t[t.length-1]:window.MC_DOMAIN=n.hostname,window.MC_API_HOST=n.protocol+"//api."+window.MC_DOMAIN,window.language=window.version="";if(n.hostname.toLowerCase().indexOf("visualops.io")>=0&&n.protocol==="http:"){window.location=n.href.replace("http:","https:");return}e=function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null};if(!e("usercode")||!e("session_id")){r=window.location.pathname,r==="/"&&(r=window.location.hash.replace("#","/")),r&&r!=="/"?window.location.href="/login?ref="+r:window.location.href="/login";return}s=document.getElementsByTagName("script");for(u=0,a=s.length;u<a;u++){i=s[u],o=i.getAttribute("data-main");if(o){window.version=o.split("?")[1];break}}return window.version==="#{version}"&&(window.version="dev"),window.language=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*lang\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1")||(navigator.language&&navigator.language.toLowerCase()==="zh-cn"?"zh-cn":"en-us"),null})(),require.config({baseUrl:"/",waitSeconds:30,locale:language,urlArgs:"v="+version,shim:{underscore:{exports:"_"},Meteor:{deps:["underscore"],exports:"Meteor"}},bundles:{"vender/requirejs/requirelib":["i18n"],"vender/vender":["jquery","backbone","underscore","handlebars","sprintf","Meteor","crypto","q","svg"],"lib/lib":["MC","constant","MC.validate","lib/handlebarhelpers","event"],"ui/ui":["UI.tooltip","UI.scrollbar","UI.bubble","UI.modal","UI.table","UI.tablist","UI.selectbox","UI.notification","UI.multiinputbox","UI.canvg","UI.sortable","UI.parsley","UI.errortip","UI.dnd","jqpagination","jquerysort","jqtimepicker","jqdatetimepicker","UI.modalplus","UI.nanoscroller","UI.selectize","UI.selection","UI.bubblepopup","UI.select2"],"api/api":["ApiRequest","ApiRequestR","ApiRequestOs"],"cloudres/CrBundle":["CloudResources"],"component/Exporter":["ThumbnailUtil","JsonExporter"],"component/Validation":["validation","TaHelper","TaGui"],"component/StateStatus":["state_status"],"component/StateEditor":["StateEditor","StateEditorView"],"ide/AppBundle":["ide/Application","OpsModel","Project","Credential","Scene","ProjectLog"],"component/ResDiff":["ResDiff","DiffTree"],"component/Common":["combo_dropdown","toolbar_modal","credentialFormView"],"component/AwsComps":["dhcp","kp_dropdown","kp_manage","kp_upload","sns_dropdown","sns_manage","dhcp_manage","snapshotManager","rds_pg","rds_snapshot","eip_manager","eip_selector","tag_manager","sslcert_manage","sslcert_dropdown","og_manage","og_manage_app","og_dropdown","SGRulePopup","DbSubnetGPopup","FilterInput"],"component/OsComps":["OsKp","OsSnapshot"],"component/AppAction":["AppAction"],"scenes/Scenes":["scenes/Router","scenes/ProjectScene","scenes/Settings","scenes/StackStore","scenes/Cheatsheet","Workspace"],"wspace/dashboard/Dashboard":[],"wspace/progress/ProgressViewer":[],"wspace/coreeditor/CoreEditorBundle":["Design","ResourceModel","ComplexResModel","ConnectionModel","GroupModel","CoreEditor","CoreEditorView","CoreEditorApp","CoreEditorViewApp","CanvasElement","CanvasLine","CanvasView","CanvasViewLayout","CanvasManager","CanvasPopup"],"wspace/awseditor/EditorAws":["wspace/awseditor/AwsEditorStack","wspace/awseditor/AwsEditorApp"]},bundleExcludes:{"component/StateEditor":["Design","OpsModel"],"component/Validation":["Design"],"component/AwsComps":["Design","OpsModel"],"component/OsComps":["Design","OpsModel"],"component/AppAction":["Design"],"wspace/dashboard/Dashboard":["Design"],"wspace/osdashboard/DashboardOs":["Design"]}}),requirejs.onError=function(e){var t,n,r,i;e=e||{requireType:"timeout"};if(e.requireType==="timeout"){i=e.requireModules||[];for(n=0,r=i.length;n<r;n++)t=i[n],requirejs.undef(t);return require(e.requireModules||[],function(){})}return void 0},window.define&&define("/nls/lang.js",[],{"en-us":!0,"zh-cn":!0}),require(["ide/Application","scenes/Router","cloudres/CrBundle","MC","lib/aws","wspace/dashboard/Dashboard","wspace/progress/ProgressViewer","wspace/awseditor/AwsEditorStack","wspace/awseditor/AwsEditorApp","wspace/mesoseditor/MarathonEditorStack","wspace/mesoseditor/MarathonEditorApp"],function(e,t,n){return window.Router=new t,(new e).initialize().then(function(){window.Router.start(),void 0,window.__IDE__INITED=!0})},function(e){e=e||{requireType:"timeout"},e.requireType==="timeout"?(requirejs.onError=function(){},void 0,window.location.reload()):void 0});