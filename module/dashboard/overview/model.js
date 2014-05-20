(function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};define(["MC","event","constant","vpc_model","aws_model","app_model","stack_model","ami_service","elb_service","dhcp_service","vpngateway_service","customergateway_service","i18n!nls/lang.js","common_handle","component/exporter/JsonExporter"],function(t,n,r,i,s,o,u,a,f,l,c,h,p,d,v){var m,g,y,b,w,E,S,x,T,N,C;return E=[],b=[],w=[],x={total_app:0,total_stack:0,total_aws:0,plural_app:"",plural_stack:"",plural_aws:"",region_infos:[]},T=0,C=0,N=0,g=null,y={unmanaged_bubble:{DescribeVolumes:{status:["status"],title:"volumeId",sub_info:[{key:["createTime"],show_key:"Create Time"},{key:["availabilityZone"],show_key:"Availability Zone"},{key:["attachmentSet","item","status"],show_key:"Attachment Status"}]},DescribeCustomerGateways:{title:"customerGatewayId",status:"state",sub_info:[{key:["customerGatewayId"],show_key:"CustomerGatewayId"},{key:["type"],show_key:"Type"},{key:["ipAddress"],show_key:"IpAddress"},{key:["bgpAsn"],show_key:"BgpAsn"}]},DescribeVpnGateways:{title:"vpnGatewayId",status:"state",sub_info:[{key:["vpnGatewayId"],show_key:"VPNGatewayId"},{key:["type"],show_key:"Type"}]},DescribeInstances:{status:["instanceState","name"],title:"instanceId",sub_info:[{key:["launchTime"],show_key:"Launch Time"},{key:["placement","availabilityZone"],show_key:"Availability Zone"}]},DescribeVpnConnections:{status:["state"],title:"vpnConnectionId",sub_info:[{key:["vpnConnectionId"],show_key:"VPC"},{key:["type"],show_key:"Type"},{key:["routes","item","source"],show_key:"Routing"}]},DescribeVpcs:{status:["state"],title:"vpcId",sub_info:[{key:["cidrBlock"],show_key:"CIDR"},{key:["isDefault"],show_key:"Default VPC:"},{key:["instanceTenancy"],show_key:"Tenacy"}]},DescribeAutoScalingGroups:{status:["state"],title:"AutoScalingGroupName",sub_info:[{key:["AutoScalingGroupName"],show_key:"AutoScalingGroupName"},{key:["type"],show_key:"Type"},{key:["Status"],show_key:"Status"}]}},detail:{DescribeVolumes:{title:"volumeId",sub_info:[{key:["volumeId"],show_key:p.ide.PROP_VOLUME_ID},{key:["attachmentSet","item",0,"device"],show_key:p.ide.DASH_LBL_DEVICE_NAME},{key:["snapshotId"],show_key:p.ide.PROP_VOLUME_SNAPSHOT_ID},{key:["size"],show_key:""+p.ide.PROP_VOLUME_SIZE+"(GiB)"},{key:["createTime"],show_key:p.ide.PROP_VOLUME_CREATE_TIME},{key:["attachmentSet"],show_key:p.ide.PROP_VOLUME_ATTACHMENT_SET},{key:["status"],show_key:p.ide.PROP_VOLUME_STATE},{key:["attachmentSet","item","status"],show_key:p.ide.PROP_VOLUME_ATTACHMENT_SET},{key:["availabilityZone"],show_key:p.ide.DASH_LBL_AVAILABILITY_ZONE},{key:["volumeType"],show_key:p.ide.PROP_VOLUME_TYPE},{key:["Iops"],show_key:p.ide.PROP_VOLUME_TYPE_IOPS}]},DescribeInstances:{title:"instanceId",sub_info:[{key:["instanceState","name"],show_key:p.ide.PROP_INSTANCE_STATUS},{key:["keyName"],show_key:p.ide.PROP_INSTANCE_KEY_PAIR},{key:["monitoring","state"],show_key:p.ide.PROP_INSTANCE_KEY_MONITORING},{key:["ipAddress"],show_key:p.ide.PROP_INSTANCE_PRIMARY_PUBLIC_IP},{key:["dnsName"],show_key:p.ide.PROP_INSTANCE_PUBLIC_DNS},{key:["privateIpAddress"],show_key:p.ide.PROP_INSTANCE_PRIMARY_PRIVATE_IP},{key:["privateDnsName"],show_key:p.ide.PROP_INSTANCE_PRIVATE_DNS},{key:["launchTime"],show_key:p.ide.PROP_INSTANCE_LAUNCH_TIME},{key:["placement","availabilityZone"],show_key:p.ide.PROP_INSTANCE_KEY_ZONE},{key:["amiLaunchIndex"],show_key:p.ide.PROP_INSTANCE_AMI_LAUNCH_INDEX},{key:["instanceType"],show_key:p.ide.PROP_INSTANCE_TYPE},{key:["ebsOptimized"],show_key:p.ide.PROP_INSTANCE_EBS_OPTIMIZED},{key:["rootDeviceType"],show_key:p.ide.PROP_INSTANCE_ROOT_DEVICE_TYPE},{key:["placement","tenancy"],show_key:p.ide.PROP_INSTANCE_TENANCY},{key:["blockDeviceMapping","item"],show_key:p.ide.PROP_INSTANCE_BLOCK_DEVICE},{key:["networkInterfaceSet","item"],show_key:p.ide.PROP_INSTANCE_AMI_NETWORK_INTERFACE}]},DescribeVpnConnections:{title:"vpnConnectionId",sub_info:[{key:["state"],show_key:p.ide.DASH_LBL_STATE},{key:["vpnGatewayId"],show_key:p.ide.DASH_LBL_VIRTUAL_PRIVATE_GATEWAY},{key:["customerGatewayId"],show_key:p.ide.DASH_LBL_CUSTOMER_GATEWAY},{key:["type"],show_key:p.ide.PROP_CGW_APP_VPN_LBL_TYPE},{key:["routes","item",0],show_key:p.ide.PROP_CGW_LBL_ROUTING}],btns:[{type:"download_configuration",name:p.ide.PROP_CGW_APP_TIT_DOWNLOAD_CONF}],detail_table:[{key:["vgwTelemetry","item"],show_key:p.ide.PROP_CGW_APP_VPN_LBL_TUNNEL,count_name:"tunnel"},{key:["outsideIpAddress"],show_key:p.ide.PROP_CGW_LBL_IPADDR},{key:["status"],show_key:p.ide.DASH_LBL_STATUS},{key:["lastStatusChange"],show_key:p.ide.IDE_LBL_LAST_STATUS_CHANGE},{key:["statusMessage"],show_key:p.ide.DASH_LBL_DETAIL}]},DescribeVpcs:{title:"vpcId",sub_info:[{key:["state"],show_key:p.ide.DASH_LBL_STATE},{key:["cidrBlock"],show_key:p.ide.DASH_LBL_CIDR},{key:["instanceTenancy"],show_key:p.ide.PROP_VPC_DETAIL_LBL_TENANCY}]},DescribeLoadBalancers:{title:"LoadBalancerName",sub_info:[{key:["state"],show_key:p.ide.DASH_LBL_STATE},{key:["AvailabilityZones","member"],show_key:p.ide.DASH_LBL_AVAILABILITY_ZONE},{key:["CreatedTime"],show_key:p.ide.DASH_LBL_CREATE_TIME},{key:["DNSName"],show_key:"DNSName"},{key:["HealthCheck"],show_key:p.ide.PROP_ELB_HEALTH_CHECK},{key:["Instances","member"],show_key:p.ide.DASH_LBL_DNS_NAME},{key:["ListenerDescriptions","member"],show_key:p.ide.PROP_ELB_LBL_LISTENER_DESCRIPTIONS},{key:["SecurityGroups","member"],show_key:p.ide.PROP_ELB_SG_DETAIL},{key:["Subnets","member"],show_key:p.ide.DASH_LBL_SUBNETS}]},DescribeAddresses:{title:"publicIp",sub_info:[{key:["domain"],show_key:p.ide.DASH_LBL_DOMAIN},{key:["instanceId"],show_key:p.ide.DASH_LBL_INSTANCE_ID},{key:["publicIp"],show_key:p.ide.PROP_INSTANCE_PUBLIC_IP},{key:["associationId"],show_key:p.ide.DASH_LBL_ASSOCIATION_ID},{key:["allocationId"],show_key:p.ide.DASH_LBL_ALLOCATION_ID},{key:["networkInterfaceId"],show_key:p.ide.DASH_LBL_NETWORK_INTERFACE_ID},{key:["privateIpAddress"],show_key:p.ide.DASH_LBL_PRIVATE_IP_ADDRESS},{key:["SecurityGroups"],show_key:p.ide.PROP_INSTANCE_SG_DETAIL},{key:["Subnets"],show_key:p.ide.DASH_LBL_SUBNETS}]},DescribeAutoScalingGroups:{title:"AutoScalingGroupName",sub_info:[{key:["AutoScalingGroupName"],show_key:p.ide.DASH_LBL_AUTOSCALING_GROUP_NAME},{key:["AutoScalingGroupARN"],show_key:p.ide.DASH_LBL_AUTOSCALING_GROUP_ARN},{key:["AvailabilityZones","member"],show_key:p.ide.DASH_LBL_AVAILABILITY_ZONE},{key:["CreatedTime"],show_key:p.ide.DASH_LBL_CREATE_TIME},{key:["DefaultCooldown"],show_key:p.ide.PROP_ASG_COOL_DOWN},{key:["DesiredCapacity"],show_key:p.ide.PROP_ASG_DESIRE_CAPACITY},{key:["EnabledMetrics"],show_key:p.ide.DASH_LBL_ENABLED_METRICS},{key:["HealthCheckGracePeriod"],show_key:p.ide.PROP_ASG_HEALTH_CHECK_CRACE_PERIOD},{key:["HealthCheckType"],show_key:p.ide.PROP_ASG_HEALTH_CHECK_TYPE},{key:["Instances"],show_key:p.ide.DASH_LBL_INSTANCE},{key:["LaunchConfigurationName"],show_key:p.ide.DASH_LBL_LAUNCH_CONFIGURATION_NAME},{key:["LoadBalancerNames","member"],show_key:p.ide.DASH_LBL_LOADBALANCER_NAMES},{key:["MaxSize"],show_key:p.ide.DASH_LBL_MAX_SIZE},{key:["MinSize"],show_key:p.ide.DASH_LBL_MIN_SIZE},{key:["Status"],show_key:p.ide.DASH_LBL_STATUS},{key:["TerminationPolicies","member"],show_key:p.ide.DASH_LBL_TERMINATION_POLICIES},{key:["VPCZoneIdentifier"],show_key:p.ide.DASH_LBL_VPC_ZONE_IDENTIFIER}]},DescribeAlarms:{title:"AlarmName",sub_info:[{key:["ActionsEnabled"],show_key:p.ide.DASH_LBL_ACTIONS_ENABLED},{key:["AlarmActions","member"],show_key:p.ide.DASH_LBL_ALARM_ACTIONS},{key:["AlarmArn"],show_key:p.ide.DASH_LBL_ALARM_ARN},{key:["AlarmDescription"],show_key:p.ide.DASH_LBL_ALARM_DESCRIPTION},{key:["AlarmName"],show_key:p.ide.DASH_LBL_ALARM_NAME},{key:["ComparisonOperator"],show_key:p.ide.DASH_LBL_COMPARISON_OPERATOR},{key:["Dimensions"],show_key:p.ide.DASH_LBL_DIMENSIONS},{key:["EvaluationPeriods"],show_key:p.ide.DASH_LBL_EVALUATION_PERIODS},{key:["InsufficientDataActions"],show_key:p.ide.DASH_LBL_INSUFFICIENT_DATA_ACTIONS},{key:["MetricName"],show_key:p.ide.DASH_LBL_METRIC_NAME},{key:["Namespace"],show_key:p.ide.DASH_LBL_NAMESPACE},{key:["OKActions"],show_key:p.ide.DASH_LBL_OK_ACTIONS},{key:["Period"],show_key:p.ide.DASH_LBL_PERIOD},{key:["Statistic"],show_key:p.ide.DASH_LBL_STATISTIC},{key:["StateValue"],show_key:p.ide.DASH_LBL_STATE_VALUE},{key:["Threshold"],show_key:p.ide.DASH_LBL_THRESHOLD},{key:["Unit"],show_key:p.ide.DASH_LBL_UNIT}]},ListSubscriptions:{title:"Endpoint",sub_info:[{key:["Endpoint"],show_key:p.ide.DASH_LBL_ENDPOINT},{key:["Owner"],show_key:p.ide.DASH_LBL_OWNER},{key:["Protocol"],show_key:p.ide.DASH_LBL_PROTOCOL},{key:["SubscriptionArn"],show_key:p.ide.DASH_LBL_SUBSCRIPTION_ARN},{key:["TopicArn"],show_key:p.ide.DASH_LBL_TOPIC_ARN}]}}},S=["arrow-left map-tooltip-pointer-left","arrow-up map-tooltip-pointer-up","arrow-down map-tooltip-pointer","arrow-down map-tooltip-pointer","arrow-down map-tooltip-pointer","arrow-down map-tooltip-pointer","arrow-down map-tooltip-pointer","arrow-down map-tooltip-pointer"],m=Backbone.Model.extend({defaults:{result_list:null,region_classic_list:null,region_empty_list:null,recent_edited_stacks:null,recent_launched_apps:null,recent_stoped_apps:null,cur_app_list:null,cur_stack_list:null,global_list:{},cached_resources:{},cached_complex_resources:{},cached_resource_info:{},cur_region_resource:null,cur_region_resource_info:null,supported_platforms:!1},store:{awsResource:null},status:{isAccountInfoGot:!1,isAwsHandleWait:!1},initialize:function(){return this.on("AWS_RESOURCE_RETURN",this.awsReturnHandler),this.on("APP_INFO_RETURN",this.appInfoHandler),i.on("VPC_VPC_DESC_ACCOUNT_ATTRS_RETURN",this.vpcAccountAttrsReturnHandler,this),null},initAwsState:function(){return this.status.isAwsHandleWait=!1,null},initAccountState:function(){return this.status.isAccountInfoGot=!1,null},accountReturnHandler:function(){this.status.isAccountInfoGot=!0;if(this.status.isAwsHandleWait)return this.awsReturnHandler()},awsReturnHandler:function(e){var r,i,s;void 0,n.trigger(n.IDE_AVAILABLE),e?this.store.awsResource=e:e=this.store.awsResource;if(!this.status.isAccountInfoGot){this.status.isAwsHandleWait=!0;return}if(!App.user.hasCredential())return;r=e.resolved_data;if(!_.size(r))return;return s=e.param[3],this.trigger("AWS:LOADING:STOP",s),s===null?($.each(r,function(e,n){var r;try{return t.aws.aws.cacheResource(n,e,!0)}catch(i){return r=i,void 0,void 0,!0}}),this.cacheResource("raw",r),i=this.globalRegionhandle(r),this.forceSet("global_list",i)):this.setResource(r[s],s)},loadResource:function(e){var t,n,r;return g=e,t=this.getResourceFromCache("complex",e),r=this.getResourceFromCache("raw",e),n=this.getResourceFromCache("info",e),t&&n?(this.forceSet("cur_region_resource_info",n),this.forceSet("cur_region_resource",t)):r?this.setResource(r,e):this.describeAWSResourcesService(e)},forceSet:function(e,t){return _.isEqual(t,this.get(e))?this.trigger("change:"+e):this.set(e,t)},cacheResource:function(e,t,n){var r;return r=this.getResourceFromCache(e)||{},n?r[n]=t[n]||t:_.each(t,function(e,t){return r[t]=e,null}),this.setResourceCache(e,r)},getResourceFromCache:function(e,t){var n;return n=this.getResourceCache(e),t&&n?n[t]:n},getResourceCacheKey:function(e){switch(e){case"raw":return"cached_resources";case"complex":return"cached_complex_resources";case"info":return"cached_resource_info";default:return"cached_resources"}},setResourceCache:function(e,t){var n;return n=this.getResourceCacheKey(e),this.set(n,t)},getResourceCache:function(e){return this.get(this.getResourceCacheKey(e))},globalRegionhandle:function(e){var t,n,i,s;return t=i={},n=_.keys(r.REGION_LABEL),s=["DescribeInstances","DescribeAddresses","DescribeVolumes","DescribeLoadBalancers","DescribeVpnConnections"],_.each(n,function(n){var r;return r=e[n]||{},_.each(s,function(e){var i;return i=r[e]||{},e==="DescribeInstances"&&(i=_.filter(i,function(e){return e.instanceState.name==="running"})),t[e]||(t[e]={}),t[e][n]=i,null})}),_.each(t,function(e,t){return i[t]={data:[],total:0},_.each(e,function(e,n){var s;return s=e&&e.length||0,s&&(i[t].total+=s),i[t].data.push({region:n,city:r.REGION_SHORT_LABEL[n],area:r.REGION_LABEL[n],total:s})})}),_.each(i,function(e,t){return e.data=_.sortBy(e.data,function(e){return-e.total}),null}),i},regionHandel:function(e){var t;return t={},_.each(e,function(e,n){return t[n]={data:e,total:e&&e.length||0},null}),t},reRenderRegionResource:function(e){return this.trigger("REGION_RESOURCE_CHANGED",e,this.get("cur_region_resource"))},_fillAppFiled:function(e){var t,n,r;return t=atob($.cookie("usercode")),e.tagSet&&(n=e.tagSet,n["Created by"]===t&&((r=e.instanceState)!=null?r.name:void 0)!=="terminated"&&(e.clickAble=!0),n.app&&(e.app=n.app,e.host=n.name,e.owner=n["Created by"])),e},setResource:function(n,r){var i,s,o,u,p,d,v,m,y,b;if(!n)return;return v=this,u={ELB:0,EIP:0,Instance:0,VPC:0,VPN:0,Volume:0,AutoScalingGroup:0,SNS:0,CW:0},u.Not_Used={EIP:0,Volume:0,SNS:0,CW:0},m=atob($.cookie("usercode")),n.DescribeLoadBalancers&&(u.ELB=n.DescribeLoadBalancers.length,y=/app-\w{8}/,_.map(n.DescribeLoadBalancers,function(e,r){var i;return e.detail=v.parseSourceValue("DescribeLoadBalancers",e,"detail",null),e.CreatedTime=t.dateFormat(new Date(e.CreatedTime),"yyyy-MM-dd hh:mm:ss"),e.Instances?f.DescribeInstanceHealth({sender:v},$.cookie("usercode"),$.cookie("session_id"),g,e.LoadBalancerName,null,function(e){var t,r,i,s,o,u;if(!e.is_error&&e&&e.resolved_data&&e.resolved_data.length){i=e.resolved_data.length,t=0,u=e.resolved_data;for(s=0,o=u.length;s<o;s++)r=u[s],r.state==="InService"&&t++;return _.map(n.DescribeLoadBalancers,function(r,s){return r.LoadBalancerName===e.param[4]&&(n.DescribeLoadBalancers[s].state=""+t+" of "+i+" instances in service",n.DescribeLoadBalancers[s].instance_state=e.resolved_data),null}),v.reRenderRegionResource("DescribeLoadBalancers")}return void 0}):(e.state="0 of 0 instances in service",e.instance_state=[]),i=e.LoadBalancerName.match(y),i&&(e.app=i),null})),n.ListSubscriptions&&_.map(n.ListSubscriptions,function(e,t){return u.SNS+=1,e.detail=v.parseSourceValue("ListSubscriptions",e,"detail",null),e.SubscriptionArn==="PendingConfirmation"?(e.pending_state="PendingConfirmation",u.Not_Used.SNS+=1):e.success_state="Success",e.topic=e.TopicArn.split(":")[5],null}),n.DescribeAutoScalingGroups&&_.map(n.DescribeAutoScalingGroups,function(e,t){return u.AutoScalingGroup+=1,e.Tags&&_.map(e.Tags.member,function(t){return t.Key==="app"&&(e.app=t.Value),t.Key==="app-id"&&(e.app_id=t.Value),t.Key==="Created by"&&(e.owner=t.Value),null}),e.Instances=_.pluck(e.Instances.member,"InstanceId"),e.detail=v.parseSourceValue("DescribeAutoScalingGroups",e,"detail",null),n.DescribeScalingActivities&&$.each(n.DescribeScalingActivities,function(t,n){if(n.AutoScalingGroupName===e.AutoScalingGroupName)return e.last_activity=n.Cause,e.activity_state=n.StatusCode,!1}),null}),n.DescribeAlarms&&_.map(n.DescribeAlarms,function(e,t){return u.CW+=1,e.dimension_display=e.Dimensions.member[0].Name+":"+e.Dimensions.member[0].Value,e.threshold_display=""+e.MetricName+" "+e.ComparisonOperator+" "+e.Threshold+" for "+e.Period+" seconds",e.StateValue==="OK"?e.state_ok=!0:e.StateValue==="ALARM"?(u.Not_Used.CW+=1,e.state_alarm=!0):e.state_insufficient=!0,e.detail=v.parseSourceValue("DescribeAlarms",e,"detail",null),null}),n.DescribeAddresses&&(_.map(n.DescribeAddresses,function(e,t){return $.isEmptyObject(e.instanceId)&&(u.Not_Used.EIP++,n.DescribeAddresses[t].instanceId="Not associated"),e.detail=v.parseSourceValue("DescribeAddresses",e,"detail",null),null}),u.EIP=n.DescribeAddresses.length),d=[],p={},n.DescribeInstances&&(u.Instance=n.DescribeInstances.length,i=[],_.map(n.DescribeInstances,function(e,r){var s;return e.instanceState.name==="terminated"&&(e.isTerminated=!0),i.push(e.imageId),e.detail=v.parseSourceValue("DescribeInstances",e,"detail",null),e.launchTime=t.dateFormat(new Date(e.launchTime),"yyyy-MM-dd hh:mm:ss"),s=!1,v._fillAppFiled(e),n.DescribeInstances[r].host||(n.DescribeInstances[r].host=""),null}),_.map(n.DescribeInstances,function(e){return e.app!==void 0&&(d.push(e.instanceId),p[e.instanceId]=e.app),null}),i.length!==0&&a.DescribeImages({sender:v},$.cookie("usercode"),$.cookie("session_id"),g,i,null,null,null,function(e){var t;return e.is_error?void 0:(t={},$.type(e.resolved_data)==="array"&&_.map(e.resolved_data,function(e){return t[e.imageId]=e,null}),_.map(n.DescribeInstances,function(e,n){return e.image=t[e.imageId],null}),v.reRenderRegionResource("DescribeInstances"))})),n.DescribeVolumes&&(u.Volume=n.DescribeVolumes.length,_.map(n.DescribeVolumes,function(r,i){var s,o;return r.detail=v.parseSourceValue("DescribeVolumes",r,"detail",null),r.createTime=t.dateFormat(new Date(r.createTime),"yyyy-MM-dd hh:mm:ss"),r.status==="available"&&u.Not_Used.Volume++,v._set_app_property(r,n,i,"DescribeVolumes"),r.attachmentSet?r.tagSet===void 0&&(o=r.attachmentSet.item[0].instanceId,e.call(d,o)>=0)&&(n.DescribeVolumes[i].app=p[r.attachmentSet.item[0].instanceId],_.map(n.DescribeInstances,function(e){return e.instanceId===r.attachmentSet.item[0].instanceId&&e.owner!==void 0&&(n.DescribeVolumes[i].owner=e.owner),null})):(r.attachmentSet={item:[]},s={device:"not-attached",status:"not-attached"},r.attachmentSet.item[0]=s),null})),n.DescribeVpcs&&(u.VPC=n.DescribeVpcs.length,_.map(n.DescribeVpcs,function(e,t){return v._fillAppFiled(e),v._set_app_property(e,n,t,"DescribeVpcs"),e.detail=v.parseSourceValue("DescribeVpcs",e,"detail",null),null}),o=[],_.map(n.DescribeVpcs,function(t){var n;return(n=t.dhcpOptionsId,e.call(o,n)<0)&&t.dhcpOptionsId!=="default"&&o.push(t.dhcpOptionsId),null}),o.length!==0&&l.DescribeDhcpOptions({sender:v},$.cookie("usercode"),$.cookie("session_id"),g,o,null,function(e){return e.is_error?void 0:(o=e.resolved_data,_.map(n.DescribeVpcs,function(e){return e.dhcpOptionsId==="default"&&(e.dhcp='{"title": "default", "sub_info" : ["<dt>DhcpOptionsId: </dt><dd>None</dd>"]}'),$.type(o)==="object"?e.dhcpOptionsId===o.dhcpOptionsId&&(e.dhcp=v._genDhcp(o)):_.map(o,function(t){if(e.dhcpOptionsId===t.dhcpOptionsId)return e.dhcp=v._genDhcp(t),null}),null}),v.reRenderRegionResource("DescribeVpcs")),null})),n.DescribeVpnConnections&&(u.VPN=n.DescribeVpnConnections.length,_.map(n.DescribeVpnConnections,function(e,t){return v._set_app_property(e,n,t,"DescribeVpnConnections"),e.detail=v.parseSourceValue("DescribeVpnConnections",e,"detail",null),null}),s=[],b=[],_.map(n.DescribeVpnConnections,function(e){return v._fillAppFiled(e),s.push(e.customerGatewayId),b.push(e.vpnGatewayId)}),s.length!==0&&h.DescribeCustomerGateways({sender:v},$.cookie("usercode"),$.cookie("session_id"),g,s,null,function(e){return e.is_error?void 0:(s=e.resolved_data,_.map(n.DescribeVpnConnections,function(e){return $.type(s)==="object"?e.cgw=v.parseSourceValue("DescribeCustomerGateways",s,"bubble",null):_.map(s,function(t){return e.customerGatewayId===t.customerGatewayId&&(e.cgw=v.parseSourceValue("DescribeCustomerGateways",t,"bubble",null)),null}),null}),v.reRenderRegionResource("DescribeVpnConnections")),null}),b.length!==0&&c.DescribeVpnGateways({sender:v},$.cookie("usercode"),$.cookie("session_id"),g,b,null,function(e){return e.is_error?void 0:(b=e.resolved_data,_.map(n.DescribeVpnConnections,function(e){return $.type(b)==="object"?(e.vgw=v.parseSourceValue("DescribeVpnGateways",b,"bubble",null),null):(_.map(b,function(t){return e.vpnGatewayId===t.vpnGatewayId&&(e.vgw=v.parseSourceValue("DescribeVpnGateways",t,"bubble",null)),null}),null)}),v.reRenderRegionResource("DescribeVpnConnections")),null})),r===g&&(v.forceSet("cur_region_resource_info",u),v.forceSet("cur_region_resource",n)),this.cacheResource("complex",n,r),this.cacheResource("info",u,r)},parseSourceValue:function(e,t,n,r){var i,s,o,u,a,f,l,c,h,p,d;return u=this,s=null,d=t,f="",l="",c="",a="",o=n,y[n]?s=y[o][e]:(o="unmanaged_bubble",s=y[o][e]),s||void 0,p=s.status?s.status:null,p&&(h=p[0],i=d[h],_.map(p,function(e,t){if(i&&t>0)return i=i[e],$.type(i)==="array"&&(i=i[0]),null}),i&&(f+='"status":"'+i+'", ')),s.title&&(n!=="detail"?r?(f+='"title":"'+r,d[s.title]&&(f+="-"+d[s.title],f+='", ')):d[s.title]&&(f+='"title":"',f+=d[s.title],f+='", '):n==="detail"&&(r?(f+='"title":"'+r,d[s.title]&&(f+="("+d[s.title],f+=')", ')):d[s.title]&&(f+='"title":"',f+=d[s.title],f+='", '))),_.map(s.sub_info,function(e){var t,n,r,i;r=e.key,i=e.show_key,t=r[0],n=d[t],_.map(r,function(e,t){if(n&&t>0)return n=n[e],n});if(n){if($.type(n)==="object"||$.type(n)==="array")n=u._genBubble(n,i,!0);l+='"<dt>'+i+": </dt><dd>"+n+'</dd>", '}return null}),l&&(l='"sub_info":['+l,l=l.substring(0,l.length-2),l+="]"),s.detail_table&&(c=u._parseTableValue(s.detail_table,d),c&&(c='"detail_table":'+c,l?l=l+", "+c:l=c)),f&&(f="{"+f,l?f+=l:f=f.substring(0,f.length-2),f+="}"),f},_set_app_property:function(e,t,n,r){return e.tagSet!==void 0&&_.map(e.tagSet,function(e){return e.key==="app"&&(t[r][n].app=e.value),e.key==="Created by"&&(t[r][n].owner=e.value),null}),null},_genDhcp:function(e){var t,n;return t=this,y.unmanaged_bubble.DescribeDhcpOptions={},y.unmanaged_bubble.DescribeDhcpOptions.title="dhcpOptionsId",y.unmanaged_bubble.DescribeDhcpOptions.sub_info=[],n=y.unmanaged_bubble.DescribeDhcpOptions.sub_info,e.dhcpConfigurationSet&&_.map(e.dhcpConfigurationSet.item,function(e,t){return _.map(e.valueSet,function(r,i){return n.push({key:["dhcpConfigurationSet","item",t,"valueSet",i],show_key:e.key})})}),t.parseSourceValue("DescribeDhcpOptions",e,"bubble",null)},_genBubble:function(e,t,n){var r,i,s,o,u,a,f,l;return u=this,a="",$.isEmptyObject(e)?"":($.type(e)==="object"&&(l=[],_.map(e,function(e,n){if(e!==null)return _.isString(e)||_.isBoolean(e)?l.push('\\"<dt>'+n+": </dt><dd>"+e+'</dd>\\"'):l.push(u._genBubble(e,t,!1))}),a=l.join(","),n&&(i='<a href=\\"javascript:void(0)\\" class=\\"bubble table-link\\" data-bubble-template=\\"bubbleRegionResourceInfo\\" data-bubble-data=',r=">"+t+"</a>",a=' &apos;{\\"title\\": \\"'+t+'\\" , \\"sub_info\\":['+a+"]}&apos; ",a=i+a+r)),$.type(e)==="array"&&(l=[],f=[],s=!1,_.map(e,function(e,n){var r;r=t,e.deviceName!==void 0?r=e.deviceName:e.networkInterfaceId!==void 0?r=e.networkInterfaceId:e.InstanceId!==void 0?r=e.InstanceId:e.Listener!==void 0?r="Listener-"+n:r=t+"-"+n,f.push(r);if(e!==null)return _.isString(e)||_.isBoolean(e)?(s=!0,l.push(e)):l.push(u._genBubble(e,r,!1))}),o=[],n?s?o=l:_.map(l,function(e,t){return i='<a href=\\"javascript:void(0)\\" class=\\"bubble table-link\\" data-bubble-template=\\"bubbleRegionResourceInfo\\" data-bubble-data=',r=">"+f[t]+"</a>",e=' &apos;{\\"title\\": \\"'+f[t]+'\\" , \\"sub_info\\":['+e+"]}&apos; ",e=i+e+r,o.push(e)}):o=l,a=o.join(", ")),a)},_parseTableValue:function(e,t){var n,r,i,s,o;return r=this,i="",s="",n=[{key:["vgwTelemetry","item"],show_key:"VPN Tunnel",count_name:"tunnel"},{key:["outsideIpAddress"],show_key:"IP Address"},{key:["status"],show_key:"Status"},{key:["lastStatusChange"],show_key:"Last Changed"},{key:["statusMessage"],show_key:"Detail"}],o=t.vgwTelemetry,o&&(o=o.item,o&&(i='{ "th_set":[',_.map(e,function(e,t){return t!==0&&(i+=","),i+='"',i+=r._parseEmptyValue(e.show_key),i+='"',null}),_.map(o,function(t,n){var s,u;return s=n,u=n+1,i+='], "tr',i+=u,i+='_set":[',_.map(e,function(e,t){return t!==0?(i+=',"',i+=r._parseEmptyValue(o[s][e.key]),i+='"'):(i+='"',i+=r._parseEmptyValue(e.count_name),i+=u,i+='"'),null}),null}),i+="]}")),i},_parseEmptyValue:function(e){return e?e:""},vpcAccountAttrsReturnHandler:function(e){var i,s;return i=this,void 0,t.common.other.verify500(e),w=[],e.is_error?(e.return_code!==r.RETURN_CODE.E_SESSION&&e.return_code!==r.RETURN_CODE.E_BUSY&&(App.showSettings(App.showSettings.TAB.CredentialInvalid),n.trigger(n.SWITCH_MAIN)),i.set("region_classic_list",w)):(s=e.resolved_data,_.map(r.REGION_KEYS,function(e){var n,i;if(s[e]&&s[e].accountAttributeSet)return i=s[e].accountAttributeSet.item[0].attributeValueSet.item,i&&$.type(i)==="array"&&(i.length===2?(t.data.account_attribute[e].support_platform=i[0].attributeValue+","+i[1].attributeValue,w.push({classic:"Classic",vpc:"VPC",region_name:r.REGION_SHORT_LABEL[e],region:e})):i.length===1&&(t.data.account_attribute[e].support_platform=i[0].attributeValue,w.push({vpc:"VPC",region_name:r.REGION_SHORT_LABEL[e],region:e}))),n=s[e].accountAttributeSet.item[1].attributeValueSet.item,n&&$.type(n)==="array"&&n.length===1&&(t.data.account_attribute[e].default_vpc=n[0].attributeValue),null}),i.set("region_classic_list",w),setTimeout(function(){return i.describeAWSResourcesService()},2e3),null)},updateMap:function(n,i,s){var o,u,a,f,l,c,h,p,d,v;void 0,T=0,C=0,N=0,x.region_infos=[],b=[],t.data.stack_list={},p=r.REGION_KEYS;for(u=0,l=p.length;u<l;u++)o=p[u],t.data.stack_list[o]=[];t.data.app_list={},d=r.REGION_KEYS;for(a=0,c=d.length;a<c;a++)o=d[a],t.data.app_list[o]=[];t.data.app_thumb_list={},v=r.REGION_KEYS;for(f=0,h=v.length;f<h;f++)o=v[f],t.data.app_thumb_list[o]=[];return _.map(r.REGION_KEYS,function(e,t){return E[e]={running_app:0,stopped_app:0,stack:0,app:0},null}),_.map(i,function(n){var i;return i=n,_.map(i.region_name_group,function(n){var i;n.state===r.APP_STATE.APP_STATE_RUNNING?E[n.region].running_app+=1:n.state===r.APP_STATE.APP_STATE_STOPPED&&(E[n.region].stopped_app+=1),T+=1,E[n.region].app+=1;if(i=n.region,e.call(r.REGION_KEYS,i)>=0)t.data.app_list[n.region].push(n.name),t.data.app_thumb_list[n.region].push({id:n.id,name:n.name});return null}),null}),_.map(s,function(n){var i;return i=n,_.map(i.region_name_group,function(n){var i;return E[n.region].stack+=1,C+=1,(i=n.region,e.call(r.REGION_KEYS,i)>=0)&&t.data.stack_list[n.region].push({id:n.id,name:n.name}),null}),null}),_.map(r.REGION_KEYS,function(e,t){if(E[e].app!==0||E[e].stack!==0)x.region_infos.push({region_name:e,region_city:r.REGION_SHORT_LABEL[e],app:E[e].app,running_app:E[e].running_app,stopped_app:E[e].stopped_app,stack:E[e].stack,pointer:S[t]}),b.push(e);return null}),N=b.length,x.total_app=T,x.total_stack=C,x.total_aws=N,x.plural_app=T>1?"s":"",x.plural_aws=N>1?"s":"",x.plural_stack=C>1?"s":"",void 0,n.set("result_list",$.extend(!0,{},x)),null},getItemList:function(e,t,n){var i,s,o,u,a,f;o=this;for(a=0,f=n.length;a<f;a++)u=n[a],r.REGION_SHORT_LABEL[t]===u.region_group&&(s=u.region_name_group);i=[],_.map(s,function(t){var n;n=o.parseItemList(t,e);if(n)return i.push(n),null});if(i){i.sort(function(e,t){return e.create_time<=t.create_time?1:-1});if(e==="app"){if(_.difference(o.get("cur_app_list"),i))return o.set("cur_app_list",i)}else if(e==="stack"&&_.difference(o.get("cur_stack_list"),i))return o.set("cur_stack_list",i)}},parseItemList:function(e,n){var i,s,o,u,a,f,l,c,h,p;f=this,o=e.id,h="play",a=!0,u=!1;if(e.state===r.APP_STATE.APP_STATE_INITIALIZING)return;return e.state===r.APP_STATE.APP_STATE_RUNNING?h="play":e.state===r.APP_STATE.APP_STATE_STOPPED?(a=!1,h="stop"):(h="pending",u=!0),l={id:o,code:e.key,update_time:Math.round(+(new Date)),name:e.name,isrunning:a,ispending:u,status:h,create_time:e.time_create},n==="app"&&(i=new Date,c=null,p=null,s=!1,"property"in e&&e&&"stoppable"in e.property&&e.property.stoppable===!1&&(s=!0),e.last_start&&(i.setTime(e.last_start*1e3),c="GMT "+t.dateFormat(i,"hh:mm yyyy-MM-dd")),!a&&e.last_stop&&(i.setTime(e.last_stop*1e3),p="GMT "+t.dateFormat(i,"hh:mm yyyy-MM-dd")),l.start_time=c,l.stop_time=p,l.has_instance_store_ami=s,l.usage=e.usage,l.is_production=e.usage!=="production"?!1:!0),l},describeAccountAttributesService:function(){var e;return this.initAccountState(),e=this,i.DescribeAccountAttributes({sender:i},$.cookie("usercode"),$.cookie("session_id"),"",["supported-platforms","default-vpc"]),null},updateRecentList:function(e,t,n){var i;i=[],_.map(t,function(t){var r,s,o;return s=t,r=[],o=null,_.map(s.region_name_group,function(t){var s;o=t.region,r.push(t),s=e.parseItem(t,n);if(s)return i.push(s),null})}),i.sort(function(e,t){return e.interval<=t.interval?1:-1}),i.length>r.RECENT_NUM&&(i=i.slice(0,+(r.RECENT_NUM-1)+1||9e9));if(n==="recent_edited_stacks")return e.set("recent_edited_stacks",i);if(n==="recent_launched_apps")return e.set("recent_launched_apps",i)},parseItem:function(e,n){var i,s;i=0,n==="recent_edited_stacks"?i=e.time_update:n==="recent_launched_apps"&&(i=e.time_update);if(i)return s={id:e.id,region:e.region,region_label:r.REGION_SHORT_LABEL[e.region],name:e.name,interval:i,interval_date:t.intervalDate(i)},n==="recent_launched_apps"&&(s.usage=e.usage),s},describeAWSResourcesService:function(e){var t,n,i;return this.initAwsState(),this.trigger("AWS:LOADING:START",e),t=this,e=e||null,g=e,n=r.AWS_RESOURCE,i={},i[n.INSTANCE]={},i[n.EIP]={},i[n.VOLUME]={},i[n.VPC]={},i[n.VPN]={},i[n.ELB]={},i[n.ASG]={},i[n.CLW]={},i[n.SNS_SUB]={},s.resource({sender:t},$.cookie("usercode"),$.cookie("session_id"),e,i)},updateAppState:function(e,n){var i,s,o,u,a,f;u=this,i=$.extend(!0,[],u.get("cur_app_list"));if((e===r.APP_STATE.APP_STATE_STARTING||e===r.APP_STATE.APP_STATE_STOPPING||e===r.APP_STATE.APP_STATE_TERMINATING||e===r.APP_STATE.APP_STATE_UPDATING)&&n in t.process)for(a=0,f=i.length;a<f;a++)o=i[a],o.id===t.process[n].id&&(s=i.indexOf(o),s>=0&&i[s].status!=="pending"&&!i[s].ispending&&(i[s].status="pending",i[s].ispending=!0),u.set("cur_app_list",i));return null},importJson:function(e){var r,i;return i=v.importJson(e),_.isString(i)?i:(void 0,t.common.other.checkRepeatStackName(),i.username=$.cookie("usercode"),i.name=t.aws.aws.getDuplicateName(i.name),i.id="import-"+t.data.untitled+"-"+i.region,r={},r.resolved_data=[],r.resolved_data.push(i),void 0,n.trigger(n.OPEN_DESIGN_TAB,"IMPORT_STACK",r),null)}}),new m})}).call(this);