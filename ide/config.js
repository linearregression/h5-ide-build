(function(){(function(){var e,t,n,r,i,s,o,u,a;if(!window)return;window.MC_DOMAIN="visualops.io",window.MC_PROTO="http",s=!1,t=!0,s=t,window.MC_PROTO="https",n=window.location,window.language=window.version="";if(s&&n.protocol==="http:"){window.location=n.href.replace("http:","https:");return}e=function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null};if(!e("usercode")||!e("session_id")){window.location.href="/login/";return}i=document.getElementsByTagName("script");for(u=0,a=i.length;u<a;u++){r=i[u],o=r.getAttribute("data-main");if(o){window.version=o.split("?")[1];break}}return window.version==="#{version}"&&(window.version="dev"),window.language=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*lang\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1")||"en-us",null})(),require.config({baseUrl:"./",waitSeconds:30,locale:language,urlArgs:"v="+version,paths:{validation:"component/trustedadvisor/validation",ApiRequest:"api/ApiRequest",ApiRequestDefs:"api/ApiRequestDefs",base_main:"module/base/base_main",navigation:"module/navigation/main",navigation_view:"module/navigation/view",navigation_model:"module/navigation/model",tabbar:"module/tabbar/main",tabbar_view:"module/tabbar/view",tabbar_model:"module/tabbar/model",dashboard:"module/dashboard/main",dashboard_view:"module/dashboard/overview/view",dashboard_model:"module/dashboard/overview/model",process:"module/process/main",process_view:"module/process/view",process_model:"module/process/model",design_module:"module/design/main",design_view:"module/design/view",design_model:"module/design/model",resource:"module/design/resource/main",property:"module/design/property/property",canvas:"module/design/canvas/main",toolbar:"module/design/toolbar/main",state_status:"component/statestatus/main",kp_dropdown:"component/kp/kpDropdown",kp_manage:"component/kp/kpManage",kp_upload:"component/kp/kpUpload",sns_dropdown:"component/sns/snsDropdown",sns_manage:"component/sns/snsManage",combo_dropdown:"component/common/comboDropdown",toolbar_modal:"component/common/toolbarModal",dhcp:"component/dhcp/dhcp",snapshotManager:"component/snapshot/snapshot",sslcert_manage:"component/sslcert/sslCertManage",sslcert_dropdown:"component/sslcert/sslCertDropdown",unmanagedvpc:"component/unmanagedvpc/main",unmanagedvpc_view:"component/unmanagedvpc/view",unmanagedvpc_model:"component/unmanagedvpc/model"},shim:{canvon:{deps:["jquery"],exports:"Canvon"},underscore:{exports:"_"},handlebars:{exports:"Handlebars"},Meteor:{deps:["underscore"],exports:"Meteor"},navigation:{deps:["navigation_view","navigation_model","MC"]},tabbar:{deps:["tabbar_view","tabbar_model","MC"]},dashboard:{deps:["dashboard_view","dashboard_model","MC"]},process:{deps:["process_view","process_model","MC"]},select2:{deps:["jquery"],exports:"$"}},bundles:{"vender/requirejs/requirelib":["i18n"],"vender/vender":["jquery","backbone","underscore","handlebars","sprintf","Meteor","canvon","crypto","q"],"lib/lib":["MC","constant","MC.canvas","MC.canvas.constant","MC.validate","canvas_layout","lib/handlebarhelpers","event"],"lib/deprecated":["aws_handle","forge_handle","common_handle"],"ui/ui":["UI.tooltip","UI.scrollbar","UI.tabbar","UI.bubble","UI.modal","UI.table","UI.tablist","UI.selectbox","UI.searchbar","UI.filter","UI.radiobuttons","UI.notification","UI.multiinputbox","UI.canvg","UI.sortable","UI.parsley","UI.errortip","UI.tour","jqpagination","jquerysort","UI.modalplus"],ApiRequest:[],"model/model":["base_model","account_model","favorite_model","app_model","stack_model","state_model","ec2_model","vpc_model","aws_model","ami_model","ebs_model","elb_model","dhcp_model","customergateway_model","vpngateway_model","keypair_model","autoscaling_model","cloudwatch_model","sns_model","subnet_model","instance_model","result_vo","favorite_service","account_service","app_service","stack_service","aws_service","state_service","ami_service","ebs_service","ec2_service","eip_service","instance_service","keypair_service","placementgroup_service","securitygroup_service","acl_service","customergateway_service","dhcp_service","eni_service","internetgateway_service","routetable_service","subnet_service","vpc_service","vpngateway_service","vpn_service","elb_service","iam_service","autoscaling_service","cloudwatch_service","sns_service"],"component/sgrule/SGRulePopup":[],"component/exporter/Exporter":["component/exporter/Download","component/exporter/Thumbnail","component/exporter/JsonExporter"],"ide/cloudres/CrBundle":["CloudResources"],"ide/Application":[],"module/design/framework/DesignBundle":["Design","CanvasManager"],validation:[],"component/stateeditor/stateeditor":[],"component/sharedrescomp":["kp_dropdown","kp_manage","kp_upload","sns_dropdown","sns_manage","combo_dropdown","toolbar_modal","dhcp","snapshotManager","sslcert_manage","sslcert_dropdown"],property:[]},bundleExcludes:{"lib/deprecated":["Design"],"component/sgrule/SGRulePopup":["Design"],"component/stateeditor/stateeditor":["component/stateeditor/lib/ace","component/stateeditor/lib/markdown"],"module/design/framework/DesignBundle":["component/sgrule/SGRulePopup"],property:["component/sgrule/SGRulePopup"]}}),requirejs.onError=function(e){var t,n,r,i;e=e||{requireType:"timeout"};if(e.requireType==="timeout"){i=e.requireModules||[];for(n=0,r=i.length;n<r;n++)t=i[n],requirejs.undef(t);return require(e.requireModules||[],function(){})}return void 0},require(["ide/Application","ide/deprecated/ide","ide/cloudres/CrBundle"],function(e,t){(new e).initialize().then(function(){return t.initialize()})},function(e){e=e||{requireType:"timeout"},e.requireType==="timeout"?(requirejs.onError=function(){},void 0,window.location.reload()):void 0})}).call(this);