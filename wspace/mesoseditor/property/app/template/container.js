define(["handlebars"],function(e){var t=function(e,t,n,r,i){function l(e,t){return"selected"}function c(e,t){return"hide"}function h(e,t){var n="",r;return n+='\r\n            <div class="multi-ipt-row">\r\n                <span class="ipt-controls"><a href="#" class="icon-del"></a><a href="#" class="icon-add"></a></span>\r\n                <span class="ipt-wrapper">\r\n                    <input class="input" placeholder="0" type="text" data-name="hostPort" value="'+a((r=e&&e.hostPort,typeof r===u?r.apply(e):r))+'" required/>\r\n                    <input class="input" placeholder="80/tcp" type="text" data-name="container" value="'+a((r=e&&e.containerPort,typeof r===u?r.apply(e):r))+"/"+a((r=e&&e.protocol,typeof r===u?r.apply(e):r))+'" required/>\r\n                    <input class="input" placeholder="80" type="text" data-name="servicePort" value="'+a((r=e&&e.servicePort,typeof r===u?r.apply(e):r))+'" required/>\r\n                </span>\r\n            </div>\r\n            ',n}function p(e,t){var n="",r;return n+='\r\n            <div class="multi-ipt-row">\r\n                <span class="ipt-controls"><a href="#" class="icon-del"></a><a href="#" class="icon-add"></a></span>\r\n                <span class="ipt-wrapper">\r\n                    <input class="input" placeholder="/host/path" type="text" data-name="hostPath" value="'+a((r=e&&e.hostPath,typeof r===u?r.apply(e):r))+'"required/>\r\n                    <input class="input" placeholder="/mount/point:ro" type="text" data-name="containerPath" value="'+a((r=e&&e.containerPath,typeof r===u?r.apply(e):r))+":"+a((r=e&&e.mode,typeof r===u?r.apply(e):r))+'" required/>\r\n                </span>\r\n            </div>\r\n            ',n}function d(e,t){var n="",r;return n+='\r\n            <div class="multi-ipt-row">\r\n                <span class="ipt-controls"><a href="#" class="icon-del"></a><a href="#" class="icon-add"></a></span>\r\n                <span class="ipt-wrapper">\r\n                    <input class="input" type="text" data-name="key" value="'+a((r=e&&e.key,typeof r===u?r.apply(e):r))+'" required/>\r\n                    <input class="input" type="text" data-name="value" value="'+a((r=e&&e.value,typeof r===u?r.apply(e):r))+'" required/>\r\n                </span>\r\n            </div>\r\n            ',n}function v(e,t){return'checked="checked"'}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+='<div class="container">\r\n    <div class="input-item">\r\n        <label class="left">Image</label>\r\n        <input class="input" name="image" value="'+a((o=(o=t&&t.docker,o==null||o===!1?o:o.image),typeof o===u?o.apply(t):o))+'" type="text" required disabled>\r\n    </div>\r\n    <div class="input-item">\r\n        <label class="left">Network</label>\r\n        <select name="network" class="select3">\r\n            <option value="BRIDGE" ',o=n.ifCond.call(t,(o=t&&t.docker,o==null||o===!1?o:o.network),"BRIDGE",{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+='>BRIDGE</option>\r\n            <option value="HOST" ',o=n.ifCond.call(t,(o=t&&t.docker,o==null||o===!1?o:o.network),"HOST",{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+='>HOST</option>\r\n        </select>\r\n    </div>\r\n    <div class="input-item port-mappings">\r\n        <label class="left">Port Mappings <a href="#" class="icon-add" id="add-item-outside"></a></label>\r\n        <div class="titles ',o=n.unless.call(t,(o=t&&t.docker,o==null||o===!1?o:o.portMappings),{hash:{},inverse:f.noop,fn:f.program(3,c,i),data:i});if(o||o===0)s+=o;s+='">\r\n            <span>Host</span><span>Container</span><span>Service Port</span>\r\n        </div>\r\n        <div class="multi-input">\r\n            <div class="multi-ipt-row template">\r\n                <span class="ipt-controls"><a href="#" class="icon-del"></a><a href="#" class="icon-add"></a></span>\r\n                <span class="ipt-wrapper">\r\n                    <input class="input" placeholder="0" type="text" data-name="hostPort" required/>\r\n                    <input class="input" placeholder="80/tcp" type="text" data-name="container" required/>\r\n                    <input class="input" placeholder="80" type="text" data-name="servicePort" required/>\r\n                </span>\r\n            </div>\r\n            ',o=n.each.call(t,(o=t&&t.docker,o==null||o===!1?o:o.portMappings),{hash:{},inverse:f.noop,fn:f.program(5,h,i),data:i});if(o||o===0)s+=o;s+='\r\n        </div>\r\n    </div>\r\n\r\n    <div class="input-item volumes">\r\n        <label class="left">Volumes <a href="#" class="icon-add" id="add-item-outside"></a></label>\r\n        <div class="titles ',o=n.unless.call(t,t&&t.volumes,{hash:{},inverse:f.noop,fn:f.program(3,c,i),data:i});if(o||o===0)s+=o;s+='">\r\n            <span>Host Path</span><span>Container Path</span>\r\n        </div>\r\n        <div class="multi-input">\r\n            <div class="multi-ipt-row template">\r\n                <span class="ipt-controls"><a href="#" class="icon-del"></a><a href="#" class="icon-add"></a></span>\r\n                <span class="ipt-wrapper">\r\n                    <input class="input" placeholder="/host/path" type="text" data-name="hostPath" required/>\r\n                    <input class="input" placeholder="/mount/point:ro" type="text" data-name="containerPath" required/>\r\n                </span>\r\n            </div>\r\n            ',o=n.each.call(t,t&&t.volumes,{hash:{},inverse:f.noop,fn:f.program(7,p,i),data:i});if(o||o===0)s+=o;s+='\r\n        </div>\r\n    </div>\r\n\r\n    <div class="input-item parameters">\r\n        <label class="left">Parameters <a href="#" class="icon-add" id="add-item-outside"></a></label>\r\n        <div class="titles ',o=n.unless.call(t,(o=t&&t.docker,o==null||o===!1?o:o.parameters),{hash:{},inverse:f.noop,fn:f.program(3,c,i),data:i});if(o||o===0)s+=o;s+='">\r\n            <span>Key</span><span>Value</span>\r\n        </div>\r\n        <div class="multi-input">\r\n            <div class="multi-ipt-row template">\r\n                <span class="ipt-controls"><a href="#" class="icon-del"></a><a href="#" class="icon-add"></a></span>\r\n                <span class="ipt-wrapper">\r\n                    <input class="input" type="text" data-name="key" required/>\r\n                    <input class="input" type="text" data-name="value" required/>\r\n                </span>\r\n            </div>\r\n            ',o=n.each.call(t,(o=t&&t.docker,o==null||o===!1?o:o.parameters),{hash:{},inverse:f.noop,fn:f.program(9,d,i),data:i});if(o||o===0)s+=o;s+='\r\n        </div>\r\n    </div>\r\n\r\n    <div class="input-item privileged">\r\n        <div class="checkbox">\r\n            <input type="checkbox" id="cb-privileged" ',o=n["if"].call(t,(o=t&&t.docker,o==null||o===!1?o:o.privileged),{hash:{},inverse:f.noop,fn:f.program(11,v,i),data:i});if(o||o===0)s+=o;return s+='>\r\n            <label for="cb-privileged"></label>\r\n        </div>\r\n        <label for="cb-privileged">Privileged</label>\r\n    </div>\r\n\r\n\r\n</div>',s};return e.template(t)});