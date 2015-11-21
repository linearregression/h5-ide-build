define(["handlebars"],function(e){var t=function(e,t,n,r,i){function l(e,t){var n="",r;return n+='\r\n<dl class="dl-vertical">ID<dt></dt><dd>'+a((r=(r=e&&e.app,r==null||r===!1?r:r.id),typeof r===u?r.apply(e):r))+'</dd>\r\n    Status<dt></dt><dd class="os-status os-status-'+a((r=(r=e&&e.app,r==null||r===!1?r:r.status),typeof r===u?r.apply(e):r))+'">'+a((r=(r=e&&e.app,r==null||r===!1?r:r.status),typeof r===u?r.apply(e):r))+"</dd>\r\n    <dt>Subnet ID</dt><dd>"+a((r=(r=e&&e.app,r==null||r===!1?r:r.subnet_id),typeof r===u?r.apply(e):r))+"</dd></dl>\r\n",n}function c(e,t){return"disabled"}function h(e,t){var n="",r;return n+="\r\n    <header>"+a((r=(r=e&&e.osport,r==null||r===!1?r:r.name),typeof r===u?r.apply(e):r))+'</header>\r\n    <section class="group required">\r\n        <label class="name">Weight</label>\r\n        <input data-id="mem-weight" data-index="'+a((r=t==null||t===!1?t:t.index,typeof r===u?r.apply(e):r))+'" data-target="weight" class="selection string" value="'+a((r=e&&e.weight,typeof r===u?r.apply(e):r))+'"/>\r\n    </section>\r\n\r\n    <section class="group required">\r\n        <label class="name">Protocol Port</label>\r\n        <input data-id="mem-port" data-target="port" data-index="'+a((r=t==null||t===!1?t:t.index,typeof r===u?r.apply(e):r))+'" class="selection string" value="'+a((r=e&&e.port,typeof r===u?r.apply(e):r))+'"/>\r\n    </section>\r\n    ',n}function p(e,t){return'\r\n    <div class="os-property-message">\r\n        <h5>No Member</h5>\r\n        Connect Pool with Port or Server to register as Member\r\n    </div>\r\n    '}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;o=n["if"].call(t,t&&t.modeIsAppEdit,{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+='\r\n\r\n<div class="option-group-head expand">\r\n    Pool\r\n</div>\r\n<div class="option-group pool-details">\r\n    <section class="group required">\r\n        <label class="name">Name</label>\r\n        <input data-id="pool-name" data-target="name" class="selection string" value="'+a((o=t&&t.name,typeof o===u?o.apply(t):o))+'"/>\r\n    </section>\r\n\r\n    <section class="group">\r\n        <label class="name">Description</label>\r\n        <input data-target="description" class="selection string" value="'+a((o=t&&t.description,typeof o===u?o.apply(t):o))+'"/>\r\n    </section>\r\n\r\n    <section class="group required">\r\n        <label class="name">Protocol</label>\r\n        <select class="selection option" value="'+a((o=t&&t.protocol,typeof o===u?o.apply(t):o))+'" data-target="protocol" data-id="pool-protocol" ',o=n["if"].call(t,t&&t.modeIsAppEdit,{hash:{},inverse:f.noop,fn:f.program(3,c,i),data:i});if(o||o===0)s+=o;s+='>\r\n            <option value=\'HTTP\'>HTTP</option>\r\n            <option value=\'HTTPS\'>HTTPS</option>\r\n            <option value=\'TCP\'>TCP</option>\r\n        </select>\r\n    </section>\r\n\r\n    <section class="group required">\r\n        <label class="name">Load Balancing Method</label>\r\n        <select class="selection option" value="'+a((o=t&&t.method,typeof o===u?o.apply(t):o))+'" data-target="method" data-id="listener-method">\r\n            <option value=\'ROUND_ROBIN\'>Round Robin</option>\r\n            <option value=\'LEAST_CONNECTIONS\'>Least Connections</option>\r\n            <option value=\'SOURCE_IP\'>Source IP</option>\r\n        </select>\r\n    </section>\r\n</div>\r\n\r\n<div class="option-group-head expand">\r\n    Member('+a((o=(o=t&&t.mems,o==null||o===!1?o:o.length),typeof o===u?o.apply(t):o))+')\r\n</div>\r\n<div class="option-group" data-model="mem">\r\n    ',o=n.each.call(t,t&&t.mems,{hash:{},inverse:f.program(7,p,i),fn:f.program(5,h,i),data:i});if(o||o===0)s+=o;return s+="\r\n</div>",s};return e.template(t)});