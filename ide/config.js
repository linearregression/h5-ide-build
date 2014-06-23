window.FileVersions={"api/api.js":"6a21839c","component/Exporter.js":"eaadbfca","component/StateStatus.js":"6838a32d","component/Validation.js":"3faec581","component/jsonviewer/JsonDiffLib.js":"72283278","component/jsonviewer/JsonViewer.js":"0561e53e","component/jsonviewer/diff.js":"bd56bf86","component/jsonviewer/jqUi.js":"d923bd6e","component/jsonviewer/view.js":"b2aa40ba","component/sgrule/SGRulePopup.js":"2ace93a5","component/sharedrescomp.js":"31580f1b","component/stateeditor/stateeditor.js":"3cc33376","ide/AppBundle.js":"97cfd17a","ide/Application.js":"497cfc30","ide/cloudres/CrBundle.js":"546c6299","ide/config.js":"6b7e6b53","ide/subviews/DebugTool.js":"189fe8e4","lib/aws.js":"5188f041","lib/lib.js":"c991bc75","nls/en-us/lang.js":"11982ae4","nls/lang.js":"1f8e5098","nls/zh-cn/lang.js":"cf88869d","service/service.js":"69f78c79","service/stack_model.js":"416dc0cc","ui/ui.js":"29165e7e","user/main.js":"2f5b303f","vender/crypto-js/hmac-sha256.js":"9c71f2c7","vender/handlebars/handlebars.js":"d7201a49","vender/jquery/jquery.1.0.js":"6f208095","vender/jquery/jquery.cookie.min.js":"5b0faadb","vender/jsondiffpatch/bundle.js":"9612cd57","vender/qunit/qunit.js":"3ecb8d51","vender/requirejs/require.js":"502e8699","vender/requirejs/requirelib.js":"56d23e84","vender/select2/select2.js":"e1af08ce","vender/select2/select2.min.js":"5776132c","vender/select2/select2_locale_zh-CN.js":"e753b135","vender/vender.js":"1a10bcce","workspaces/Dashboard.js":"22b0aee9","workspaces/OpsEditor.js":"baab809e","workspaces/editor/PropertyPanel.js":"4e79bdbc","workspaces/editor/framework/DesignBundle.js":"405ee0ee","workspaces/editor/framework/util/DesignDebugger.js":"cceff56c","workspaces/editor/property/acl/template/app.js":"a72aad5e","workspaces/editor/property/sgrule/template/app.js":"9529c748"};
(function(){(function(){var e,t,n,r,i,s,o,u,a;if(!window)return;window.MC_DOMAIN="visualops.io",window.MC_PROTO="http",s=!1,t=!0,s=t,window.MC_PROTO="https",n=window.location,window.language=window.version="";if(s&&n.protocol==="http:"){window.location=n.href.replace("http:","https:");return}e=function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null};if(!e("usercode")||!e("session_id")){window.location.href="/login/";return}i=document.getElementsByTagName("script");for(u=0,a=i.length;u<a;u++){r=i[u],o=r.getAttribute("data-main");if(o){window.version=o.split("?")[1];break}}return window.version==="#{version}"&&(window.version="dev"),window.language=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*lang\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1")||"en-us",null})(),require.config({baseUrl:"./",waitSeconds:30,locale:language,urlArgs:"v="+version,shim:{canvon:{deps:["jquery"],exports:"Canvon"},underscore:{exports:"_"},handlebars:{exports:"Handlebars"},Meteor:{deps:["underscore"],exports:"Meteor"}},bundles:{"vender/requirejs/requirelib":["i18n"],"vender/vender":["jquery","backbone","underscore","handlebars","sprintf","Meteor","canvon","crypto","q"],"lib/lib":["MC","constant","MC.canvas","MC.canvas.constant","MC.validate","lib/handlebarhelpers","event"],"ui/ui":["UI.tooltip","UI.scrollbar","UI.bubble","UI.modal","UI.table","UI.tablist","UI.selectbox","UI.searchbar","UI.filter","UI.radiobuttons","UI.notification","UI.multiinputbox","UI.canvg","UI.sortable","UI.parsley","UI.errortip","UI.tour","jqpagination","jquerysort","UI.modalplus"],"api/api":["ApiRequest"],"service/service":["base_model","state_model","keypair_model","instance_model","result_vo","stack_service","state_service","ami_service","ebs_service","instance_service","keypair_service","customergateway_service"],"component/Exporter":["ThumbnailUtil","JsonExporter"],"component/Validation":["validation","component/trustedadvisor/main"],"component/StateStatus":["state_status"],"component/sgrule/SGRulePopup":[],"component/stateeditor/stateeditor":[],"component/sharedrescomp":["kp_dropdown","kp_manage","kp_upload","sns_dropdown","sns_manage","combo_dropdown","toolbar_modal","dhcp","snapshotManager","sslcert_manage","sslcert_dropdown","ResDiff","DiffTree"],"ide/cloudres/CrBundle":["CloudResources"],"ide/Application":["Workspace","OpsModel"],"workspaces/Dashboard":[],"workspaces/editor/PropertyPanel":["workspaces/editor/subviews/PropertyPanel"],"workspaces/editor/framework/DesignBundle":["Design","CanvasManager"],"workspaces/OpsEditor":[]},bundleExcludes:{"component/sgrule/SGRulePopup":["Design"],"component/stateeditor/stateeditor":["Design"],"component/sharedrescomp":["Design"],"component/Validation":["Design"],"workspaces/editor/PropertyPanel":["Design"],"workspaces/editor/framework/DesignBundle":[],"workspaces/editor/subviews/PropertyPanel":["component/sgrule/SGRulePopup"]}}),requirejs.onError=function(e){var t,n,r,i;e=e||{requireType:"timeout"};if(e.requireType==="timeout"){i=e.requireModules||[];for(n=0,r=i.length;n<r;n++)t=i[n],requirejs.undef(t);return require(e.requireModules||[],function(){})}return void 0},require(["ide/Application","ide/cloudres/CrBundle","workspaces/Dashboard","workspaces/OpsEditor","MC","lib/aws"],function(e,t,n,r){return window.OpsEditor=r,(new e).initialize().then(function(){new n})},function(e){e=e||{requireType:"timeout"},e.requireType==="timeout"?(requirejs.onError=function(){},void 0,window.location.reload()):void 0})}).call(this);