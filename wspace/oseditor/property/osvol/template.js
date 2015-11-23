define(["handlebars"],function(e){var t,n={};return t=function(e,t,n,r,i){function l(e,t){var r="",i;return r+='\n<section class="group">\n    <dl class="dl-vertical">\n        <dt>ID</dt><dd>'+u(n.emptyStr.call(e,(i=e&&e.app,i==null||i===!1?i:i.id),{hash:{},data:t}))+"</dd>\n        <dt>Status</dt><dd>"+u(n.emptyStr.call(e,(i=e&&e.app,i==null||i===!1?i:i.status),{hash:{},data:t}))+"</dd>\n    </dl>\n</section>\n",r}function c(e,t){return'disabled="disabled"'}function h(e,t){var r="",i;r+='\n        <section class="group">\n            <label class="name">Snapshot ID</label>\n            <select id="property-os-volume-snapshot" data-target="snapshot" class="selection option" data-option-tpl="snapshotOption" ',i=n["if"].call(e,e&&e.modeIsAppEdit,{hash:{},inverse:a.noop,fn:a.program(3,c,t),data:t});if(i||i===0)r+=i;return r+="></select>\n        </section>\n    ",r}function p(e,t){return"true"}function d(e,t){return"false"}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a=this,f="function";o=n["if"].call(t,t&&t.modeIsAppEdit,{hash:{},inverse:a.noop,fn:a.program(1,l,i),data:i});if(o||o===0)s+=o;s+='\n<div class="option-group-head expand">\n    Volume Details\n</div>\n<div class="option-group">\n    <section class="group required">\n        <label class="name">Volume Name</label>\n        <input data-target="name" class="selection string" value="'+u((o=t&&t.name,typeof o===f?o.apply(t):o))+'"/>\n    </section>\n    <section class="group">\n        <label class="name">Description</label>\n        <input data-target="description" class="selection string" value="'+u((o=t&&t.description,typeof o===f?o.apply(t):o))+'"/>\n    </section>\n    <section class="group required">\n        <label class="name">Mount Point</label>\n        <input data-target="mountPoint" class="selection string" value="'+u((o=t&&t.mountPoint,typeof o===f?o.apply(t):o))+'" ',o=n["if"].call(t,t&&t.modeIsAppEdit,{hash:{},inverse:a.noop,fn:a.program(3,c,i),data:i});if(o||o===0)s+=o;s+='/>\n    </section>\n    <section class="group required">\n        <label class="name">Volume Size</label>\n        <input data-target="size" class="selection string" id="property-os-volume-size" value="'+u((o=t&&t.size,typeof o===f?o.apply(t):o))+'" ',o=n["if"].call(t,t&&t.modeIsAppEdit,{hash:{},inverse:a.noop,fn:a.program(3,c,i),data:i});if(o||o===0)s+=o;s+="/>\n    </section>\n    ",o=n["if"].call(t,t&&t.snapshot,{hash:{},inverse:a.noop,fn:a.program(5,h,i),data:i});if(o||o===0)s+=o;s+='\n    <section class="group">\n        <label class="name">Bootable</label>\n        <select class="selection bool" data-target="bootable" value="',o=n["if"].call(t,t&&t.bootable,{hash:{},inverse:a.program(9,d,i),fn:a.program(7,p,i),data:i});if(o||o===0)s+=o;s+='" ',o=n["if"].call(t,t&&t.modeIsAppEdit,{hash:{},inverse:a.noop,fn:a.program(3,c,i),data:i});if(o||o===0)s+=o;return s+="></select>\n    </section>\n</div>",s},n.stackTemplate=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression;return s+='<div>\n    <div class="manager-content-main">'+a((o=t&&t.name,typeof o===u?o.apply(t):o))+'</div>\n    <div class="manager-content-sub" title="'+a((o=t&&t.id,typeof o===u?o.apply(t):o))+'">'+a((o=t&&t.size,typeof o===u?o.apply(t):o))+"G | "+a((o=t&&t.id,typeof o===u?o.apply(t):o))+"</div>\n</div>",s},n.snapshotOption=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o=this.escapeExpression;return s+='<section class="group">\n    <dl class="dl-vertical">\n        <dt>ID</dt><dd>'+o(n.emptyStr.call(t,t&&t.id,{hash:{},data:i}))+"</dd>\n        <dt>Name</dt><dd>"+o(n.emptyStr.call(t,t&&t.display_name,{hash:{},data:i}))+"</dd>\n        <dt>Status</dt><dd>"+o(n.emptyStr.call(t,t&&t.status,{hash:{},data:i}))+"</dd>\n        <dt>Size</dt><dd>"+o(n.emptyStr.call(t,t&&t.size,{hash:{},data:i}))+"</dd>\n        <dt>Snapshot ID</dt><dd>"+o(n.emptyStr.call(t,t&&t.snapshot_id,{hash:{},data:i}))+"</dd>\n        <dt>Description</dt><dd>"+o(n.emptyStr.call(t,t&&t.description,{hash:{},data:i}))+"</dd>\n        <dt>Bootable</dt><dd>"+o(n.emptyStr.call(t,t&&t.bootable,{hash:{},data:i}))+"</dd>\n        <dt>Created at</dt><dd>"+o(n.emptyStr.call(t,t&&t.created_at,{hash:{},data:i}))+"</dd>\n    </dl>\n</section>",s},n.appTemplate=e.template(t),n});