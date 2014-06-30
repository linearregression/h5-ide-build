define("component/sgrule/template",["handlebars"],function(e){var t=function(e,t,n,r,i){function l(e,t){var r="",i;r+='\r\n\r\n      <div class="selectbox" id="sg-create-sg-out">\r\n        <div class="selection"><span class="sg-create-sg-color" style="background:'+f((i=(i=(i=e&&e.owner,i==null||i===!1?i:i[0]),i==null||i===!1?i:i.color),typeof i===a?i.apply(e):i))+'"></span>'+f((i=(i=(i=e&&e.owner,i==null||i===!1?i:i[0]),i==null||i===!1?i:i.name),typeof i===a?i.apply(e):i))+'</div>\r\n        <ul class="dropdown">\r\n          ',i=n.each.call(e,e&&e.owner,{hash:{},inverse:u.noop,fn:u.program(2,c,t),data:t});if(i||i===0)r+=i;return r+='\r\n        </ul>\r\n      </div>\r\n\r\n      <div class="selectbox" id="sg-create-direction">\r\n        <div class="selection">initiate traffic to</div>\r\n        <ul class="dropdown">\r\n          <li class="item selected" data-id="outbound">initiate traffic to</li>\r\n          <li class="item" data-id="inbound">accept traffic from</li>\r\n          <li class="item" data-id="biway">have 2-way traffic with</li>\r\n        </ul>\r\n      </div>\r\n\r\n      ',r}function c(e,t){var r="",i;r+='\r\n            <li class="item ',i=n.unless.call(e,t==null||t===!1?t:t.index,{hash:{},inverse:u.noop,fn:u.program(3,h,t),data:t});if(i||i===0)r+=i;return r+='" data-id="'+f((i=e&&e.uid,typeof i===a?i.apply(e):i))+'">\r\n              <span class="sg-create-sg-color" style="background:'+f((i=e&&e.color,typeof i===a?i.apply(e):i))+'"></span>\r\n              '+f((i=e&&e.name,typeof i===a?i.apply(e):i))+"\r\n            </li>\r\n          ",r}function h(e,t){return"selected"}function p(e,t){var n="",r;return n+='\r\n\r\n      <div id="sg-create-sg-out">\r\n        <div class="sg-create-selection selected" data-id="'+f((r=(r=e&&e.owner,r==null||r===!1?r:r.uid),typeof r===a?r.apply(e):r))+'">'+f((r=(r=e&&e.owner,r==null||r===!1?r:r.name),typeof r===a?r.apply(e):r))+'</div>\r\n      </div>\r\n\r\n      <div id="sg-create-direction">\r\n        <div class="sg-create-selection selected" data-id="outbound">initiate traffic to</div>\r\n      </div>\r\n\r\n      ',n}function d(e,t){var r="",i;r+='\r\n            <li class="item truncate ',i=n.unless.call(e,t==null||t===!1?t:t.index,{hash:{},inverse:u.noop,fn:u.program(3,h,t),data:t});if(i||i===0)r+=i;return r+='" data-id="'+f((i=e&&e.uid,typeof i===a?i.apply(e):i))+'">\r\n              <span class="sg-create-sg-color" style="background:'+f((i=e&&e.color,typeof i===a?i.apply(e):i))+'"></span>\r\n              '+f((i=e&&e.name,typeof i===a?i.apply(e):i))+"\r\n            </li>\r\n          ",r}function v(e,t){return'\r\n          <li class="item" data-id="custom">Custom</li>\r\n          <li class="item" data-id="all">All</li>\r\n          '}function m(e,t){return'\r\n          <section class="sg-proto-input" id="sg-proto-ipt-custom">\r\n            <input class="input" type="text" name="protocol-custom-ranged" value="1" min="1" max="255" data-ignore="true" data-ignore-regexp="^[0-9]*$" data-required="true">\r\n          </section>\r\n\r\n          <section class="sg-proto-input" id="sg-proto-ipt-all">Port Range: 0-65535</section>\r\n    '}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this,a="function",f=this.escapeExpression;s+='<header class="modal-header sg-rule-create-h"><h3>Create Security Group Rule</h3><i class="btn-modal-close">&times;</i></header>\r\n\r\n\r\n<article class="modal-body" id="sg-rule-create-modal" data-bind="true">\r\n  <section class="sg-rule-create-add-wrap">\r\n\r\n    <section class="sg-node-wrap clearfix">\r\n      <label>Allow</label>\r\n\r\n      ',o=n["if"].call(t,(o=t&&t.owner,o==null||o===!1?o:o.length),{hash:{},inverse:u.program(5,p,i),fn:u.program(1,l,i),data:i});if(o||o===0)s+=o;s+='\r\n\r\n      <div class="selectbox" id="sg-create-sg-in">\r\n        <div class="selection truncate"><span class="sg-create-sg-color" style="background:'+f((o=(o=(o=t&&t.relation,o==null||o===!1?o:o[0]),o==null||o===!1?o:o.color),typeof o===a?o.apply(t):o))+'"></span>'+f((o=(o=(o=t&&t.relation,o==null||o===!1?o:o[0]),o==null||o===!1?o:o.name),typeof o===a?o.apply(t):o))+'</div>\r\n        <ul class="dropdown">\r\n          ',o=n.each.call(t,t&&t.relation,{hash:{},inverse:u.noop,fn:u.program(7,d,i),data:i});if(o||o===0)s+=o;s+='\r\n        </ul>\r\n      </div>\r\n    </section>\r\n\r\n    <p class="clearfix mgt10">\r\n      <label class="sg-create-proto-label">Destination Protocol</label>\r\n      <label class="sg-create-proto-label-port">Port</label>\r\n    </p>\r\n\r\n    <section class="clearfix sg-proto-option-wrap">\r\n      <div class="selectbox sg-proto-option" id="sg-create-proto" data-protocal-type="tcp">\r\n        <div class="selection">TCP</div>\r\n        <ul class="dropdown" tabindex="-1">\r\n          <li class="selected item" data-id="tcp">TCP</li>\r\n          <li class="item" data-id="udp">UDP</li>\r\n          <li class="item" data-id="icmp">ICMP</li>\r\n          ',o=n.unless.call(t,t&&t.isClassic,{hash:{},inverse:u.noop,fn:u.program(9,v,i),data:i});if(o||o===0)s+=o;s+='\r\n        </ul>\r\n      </div>\r\n\r\n      <div class="sg-create-proto-inputs">\r\n          <section class="sg-proto-input" id="sg-proto-ipt-tcp" style="display:block;">\r\n            <input class="input" type="text" placeholder="Port Range.eg.80 or 49152-65535" data-ignore="true" data-ignore-regexp="^[0-9-]*$" data-required="true"/>\r\n          </section>\r\n\r\n          <section class="sg-proto-input" id="sg-proto-ipt-udp">\r\n            <input class="input" type="text" placeholder="Port Range.eg.80 or 49152-65535" data-ignore="true" data-ignore-regexp="^[0-9-]*$" data-required="true"/>\r\n          </section>\r\n\r\n          <section class="sg-proto-input" id="sg-proto-ipt-icmp">\r\n            <div class="selectbox" id="sg-proto-icmp-sel">\r\n              <div class="selection">Echo Reply(0)</div>\r\n              <div class="dropdown scroll-wrap scrollbar-auto-hide context-wrap" style="height:300px;">\r\n                <div class="scrollbar-veritical-wrap"><div class="scrollbar-veritical-thumb"></div></div>\r\n                <ul tabindex="-1" class="scroll-content">\r\n                  <li class="item selected" data-id="0">Echo Reply(0)</li>\r\n                  <li class="item" data-id="3">Destination Unreachable(3) ...</li>\r\n                  <li class="item" data-id="4">Source Quench(4)</li>\r\n                  <li class="item" data-id="5">Redirect Message(5) ...</li>\r\n                  <li class="item" data-id="6">Alternate Host Address(6)</li>\r\n                  <li class="item" data-id="8">Echo Request(8)</li>\r\n                  <li class="item" data-id="9">Router Advertisement(9)</li>\r\n                  <li class="item" data-id="10">Router Solicitation(10)</li>\r\n                  <li class="item" data-id="11">Time Exceeded(11) ...</li>\r\n                  <li class="item" data-id="12">Parameter Problem: Bad IP header(12) ...</li>\r\n                  <li class="item" data-id="13">Timestamp(13)</li>\r\n                  <li class="item" data-id="14">Timestamp Reply(14)</li>\r\n                  <li class="item" data-id="15">Information Request(15)</li>\r\n                  <li class="item" data-id="16">Information Reply(16)</li>\r\n                  <li class="item" data-id="17">Address Mask Request(17)</li>\r\n                  <li class="item" data-id="18">Address Mask Reply(18)</li>\r\n                  <li class="item" data-id="30">Traceroute(30)</li>\r\n                  <li class="item" data-id="31">Datagram Conversion Error(31)</li>\r\n                  <li class="item" data-id="32">Mobile Host Redirect(32)</li>\r\n                  <li class="item" data-id="33">Where Are You(33)</li>\r\n                  <li class="item" data-id="34">Here I Am(34)</li>\r\n                  <li class="item" data-id="35">Mobile Registration Request(35)</li>\r\n                  <li class="item" data-id="36">Mobile Registration Reply(36)</li>\r\n                  <li class="item" data-id="37">Domain Name Request(37)</li>\r\n                  <li class="item" data-id="38">Domain Name Reply(38)</li>\r\n                  <li class="item" data-id="39">SKIP Algorithm Discovery Protocol(39)</li>\r\n                  <li class="item" data-id="40">Photuris Security Failures(40)</li>\r\n                  <li class="item" data-id="-1">All(-1)</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class="selectbox sg-proto-input-sub" id="sg-proto-input-sub-3">\r\n              <div class="selection">All(-1)</div>\r\n              <div class="dropdown scroll-wrap scrollbar-auto-hide context-wrap" style="height:300px;">\r\n                <div class="scrollbar-veritical-wrap"><div class="scrollbar-veritical-thumb"></div></div>\r\n                <ul class="scroll-content" tabindex="-1">\r\n                  <li class="item selected" data-id="-1">All(-1)</li>\r\n                  <li class="item" data-id="0">destination network unreachable(0)</li>\r\n                  <li class="item" data-id="1">destination host unreachable(1)</li>\r\n                  <li class="item" data-id="2">destination protocol unreachable(2)</li>\r\n                  <li class="item" data-id="3">destination port unreachable(3)</li>\r\n                  <li class="item" data-id="4">fragmentation required and DF flag set(4)</li>\r\n                  <li class="item" data-id="5">source route failed(5)</li>\r\n                  <li class="item" data-id="6">destination network unknown(6)</li>\r\n                  <li class="item" data-id="7">destination host unknown(7)</li>\r\n                  <li class="item" data-id="8">source host isolated(8)</li>\r\n                  <li class="item" data-id="9">network administratively prohibited(9)</li>\r\n                  <li class="item" data-id="10">host administratively prohibited(10)</li>\r\n                  <li class="item" data-id="11">network unreachable for TOS(11)</li>\r\n                  <li class="item" data-id="12">host unreachable for TOS(12)</li>\r\n                  <li class="item" data-id="13">communication administratively prohibited(13)</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class="selectbox sg-proto-input-sub" id="sg-proto-input-sub-5">\r\n              <div class="selection">All(-1)</div>\r\n              <ul class="dropdown" tabindex="-1">\r\n                <li class="selected item" data-id="-1">All(-1)</li>\r\n                <li class="item" data-id="0">redirect datagram for the network(0)</li>\r\n                <li class="item" data-id="1">redirect datagram for the host(1)</li>\r\n                <li class="item" data-id="2">redirect datagram for the TOS & network(2)</li>\r\n                <li class="item" data-id="3">redirect datagram for the TOS & host(3)</li>\r\n              </ul>\r\n            </div>\r\n            <div class="selectbox sg-proto-input-sub" id="sg-proto-input-sub-11">\r\n              <div class="selection">All(-1)</div>\r\n              <ul class="dropdown" tabindex="-1">\r\n                <li class="item selected" data-id="-1">All(-1)</li>\r\n                <li class="item" data-id="0">TTL expired transit(0)</li>\r\n                <li class="item" data-id="1">fragmentation reasembly time exceeded(1)</li>\r\n              </ul>\r\n            </div>\r\n            <div class="selectbox sg-proto-input-sub" id="sg-proto-input-sub-12">\r\n              <div class="selection">All(-1)</div>\r\n              <ul class="dropdown" role="menu">\r\n                <li class="item selected" data-id="-1">All(-1)</li>\r\n                <li class="item" data-id="0">pointer indicates the error(0)</li>\r\n                <li class="item" data-id="1">missing a required option(1)</li>\r\n                <li class="item" data-id="2">bad length(2)</li>\r\n              </ul>\r\n            </div>\r\n          </section>\r\n\r\n\r\n    ',o=n.unless.call(t,t&&t.isClassic,{hash:{},inverse:u.noop,fn:u.program(11,m,i),data:i});if(o||o===0)s+=o;return s+='\r\n      </div>\r\n    </section>\r\n    <button class="btn btn-blue sg-rule-create-add">Add Rule</button>\r\n  </section>\r\n\r\n  <section class="sg-rule-create-done-wrap">\r\n    <div>\r\n      <p id="sg-rule-create-msg" class="modal-text-major"></p>\r\n      <p id="sg-rule-self-ref" class="hide"><i class="icon-info icon-label"></i>You have created a rule referencing its own security group. This rule will not be visualized as the blue connection lines.</p>\r\n    </div>\r\n    <button class="btn sg-rule-create-readd">Create another rule</button>\r\n    <button class="btn btn-silver btn-modal-close">Close</button>\r\n  </section>\r\n</article>\r\n\r\n\r\n<aside class="sg-rule-create-sidebar">\r\n  <div class="sidebar-wrap">\r\n  <header class="sg-create-sb-h">Related Rule<span class="num-wrap" id="sgRuleCreateCount">('+f((o=t&&t.ruleCount,typeof o===a?o.apply(t):o))+')</span></header>\r\n  <section class="scroll-wrap scrollbar-auto-hide" style="max-height:358px">\r\n      <div class="scrollbar-veritical-wrap"><div class="scrollbar-veritical-thumb"></div></div>\r\n      <div class="scroll-content sg-create-rule-list" id="sgRuleCreateSidebar"></div>\r\n  </section>\r\n</div>\r\n</aside>',s};return e.template(t)}),function(){define("component/sgrule/SGRulePopupView",["./template","i18n!/nls/lang.js","Design"],function(e,t,n){var r;return r=Backbone.View.extend({events:{"click .sg-rule-create-add":"addRule","click .sg-rule-create-readd":"readdRule","OPTION_CHANGE #sg-create-proto":"onProtocolChange","click .sg-rule-delete":"deleteRule","OPTION_CHANGE #sg-proto-icmp-sel":"onICMPChange","click .btn-modal-close":"onModalClose"},render:function(){return modal(e(this.model.attributes),!0),this.setElement($("#sg-rule-create-modal").closest("#modal-wrap")),this.updateSidebar(),null},addRule:function(e){var n,r,i,s,o,u;r=this.extractRuleData(e);if(!r)return;u=this.model.addRule(r);if(u===0)return;return o=$("#sg-create-sg-out").find(".selected").text(),i=$("#sg-create-sg-in").find(".selected").text(),n=$("#sg-create-direction").find(".selected").text(),$("#sg-rule-self-ref").hide(),u===1?s=sprintf(t.ide.PROP_MSG_SG_CREATE,o,o,n,i):r.target===r.relation?(s=sprintf(t.ide.PROP_MSG_SG_CREATE_SELF,u,o,o),$("#sg-rule-self-ref").show()):s=sprintf(t.ide.PROP_MSG_SG_CREATE_MULTI,u,o,i,o,n,i),$("#sg-rule-create-msg").text(s),this.$el.find("#modal-box").toggleClass("done",!0),this.updateSidebar()},readdRule:function(){return this.$el.find("#modal-box").toggleClass("done",!1)},deleteRule:function(e){var t,n,r,i,s;return n=$(e.currentTarget).closest("li"),s={ruleSetId:n.attr("data-uid"),protocol:n.attr("data-protocol"),relation:n.attr("data-relation"),port:n.attr("data-port"),direction:n.attr("data-direction")},r=n.parent(),n.remove(),r.children().length===0&&(r.prev().remove(),r.remove()),this.model.delRule(s),t=$("#sgRuleCreateCount"),i=parseInt($("#sgRuleCreateCount").text().replace("(",""),10)-1,i<0&&(i=0),t.text("("+i+")"),!1},onDirChange:function(){return $(".sg-rule-direction").html($("#sg-rule-create-dir-i").is(":checked")?t.ide.POP_SGRULE_LBL_SOURCE:t.ide.POP_SGRULE_LBL_DEST)},onProtocolChange:function(e,t){return $(".sg-proto-input").hide(),$("#sg-proto-ipt-"+t).show(),t==="custom"?$("#sg-rule-create-modal .sg-create-proto-label-port").text("Protocol"):$("#sg-rule-create-modal .sg-create-proto-label-port").text("Port")},onICMPChange:function(e,t){return $(".sg-proto-input-sub").hide(),$("#sg-proto-input-sub-"+t).show()},updateSidebar:function(){var e,t,n,r,i,s,o,u;i=0,u=this.model.attributes.groups||[];for(s=0,o=u.length;s<o;s++)n=u[s],i+=n.rules.length,n.rules.deletable=!0,n.content=MC.template.sgRuleList(n.rules);t=$("#sgRuleCreateSidebar").html(MC.template.groupedSgRuleList(this.model.attributes)),$("#sgRuleCreateCount").text("("+i+")"),e=this.$el.find("#modal-box"),t=t.closest(".sg-rule-create-sidebar"),r=t.hasClass("shown");if(i===0){if(r)return t.removeClass("shown").animate({left:"0"}),e.animate({left:"-=100px"},300)}else if(!r)return t.addClass("shown").animate({left:"-200px"}),e.animate({left:"+=100px"},300)},onModalClose:function(){var e,t;return t=this.model.get("lineId"),e=n.instance().component(t),e?$canvas(t).select():$canvas.clearSelected(),modal.close(),!1},extractRuleData:function(e){var n,r,i,s,o,u,a,f,l,c,h;l=$("#sg-proto-ipt-tcp input"),c=$("#sg-proto-ipt-udp input"),i=$("#sg-proto-ipt-custom input"),a=$("#sg-create-proto").find(".selected").attr("data-id"),h={custom:{dom:i,method:function(e){return MC.validate.portRange(e)?Number(e)<0||Number(e)>255?t.ide.PARSLEY_THE_PROTOCOL_NUMBER_RANGE_MUST_BE_0_255:null:t.ide.PARSLEY_MUST_BE_A_VALID_FORMAT_OF_NUMBER}},tcp:{dom:l,method:function(e){var n;return n=MC.validate.portRange(e),n?MC.validate.portValidRange(n)?null:t.ide.PARSLEY_PORT_RANGE_BETWEEN_0_65535:t.ide.PARSLEY_MUST_BE_A_VALID_FORMAT_OF_PORT_RANGE}},udp:{dom:c,method:function(e){var n;return n=MC.validate.portRange(e),n?MC.validate.portValidRange(n)?null:t.ide.PARSLEY_PORT_RANGE_BETWEEN_0_65535:t.ide.PARSLEY_MUST_BE_A_VALID_FORMAT_OF_PORT_RANGE}}},a in h&&(s=h[a],s.dom.parsley("custom",s.method));if(s&&!s.dom.parsley("validate"))return;f={protocol:a,direction:$("#sg-create-direction").find(".selected").attr("data-id"),fromPort:"",toPort:"",target:$("#sg-create-sg-out").find(".selected").attr("data-id"),relation:$("#sg-create-sg-in").find(".selected").attr("data-id")},r=$("#sg-proto-ipt-"+f.protocol),n=r.find("input"),o=n.val();switch(a){case"tcp":case"udp":u=o.split("-"),f.fromPort=u[0].trim(),u.length>=2&&(f.toPort=u[1].trim());break;case"icmp":o=$("#sg-proto-icmp-sel").find(".selected").attr("data-id"),f.fromPort=o,o==="3"||o==="5"||o==="11"||o==="12"?f.toPort=$("#sg-proto-input-sub-"+o).find(".selected").attr("data-id"):f.toPort="-1";break;case"custom":f.protocol=o}return f}}),r})}.call(this),function(){define("component/sgrule/SGRulePopup",["constant","Design","./SGRulePopupView","backbone"],function(e,t,n){var r,i;return i=Backbone.Model.extend({initialize:function(){var e,n,r,i;return e=t.instance(),r=this.get("port1"),i=this.get("port2"),n=function(e){return{uid:e.id,color:e.color,name:e.get("name")}},this.set("relation",_.map(i.connectionTargets("SgAsso"),n)),_.isString(r)?this.set("owner",{name:r,uid:this.get("port1").id}):this.set("owner",_.map(r.connectionTargets("SgAsso"),n)),this.updateGroupList(),null},updateGroupList:function(){var e,n,r,i;return i=t.instance(),r=i.component(this.get("uid")),e=t.modelClassForType("SgRuleSet"),n=e.getRelatedSgRuleSets(this.get("port1"),this.get("port2")),this.set("groups",e.getGroupedObjFromRuleSets(n)),null},addRule:function(e){var n,r,i,s,o;return o=t.instance().component(e.target),i=t.instance().component(e.relation),n=t.modelClassForType("SgRuleSet"),s=new n(o,i),r=2,s.addRule(e.target,e.direction,e),e.direction==="biway"&&(r*=2),this.updateGroupList(),r},delRule:function(e){var n;return n=t.instance().component(e.ruleSetId),n.removeRuleByPlainObj(e),null}}),r=function(e,r){var s,o,u;return r?(u=e,e=""):(s=t.instance().component(e),u=s.port1Comp(),r=s.port2Comp()),o=new i({port1:u,port2:r,lineId:e}),(new n({model:o})).render()},r})}.call(this);