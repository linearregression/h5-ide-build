define(["constant","../OsPropertyView","./stack","./app","CloudResources","UI.selection","../validation/ValidationBase"],function(e,t,n,r,i,s,o){return t.extend({events:{"change .selection[data-target]":"updateAttribute"},initialize:function(e){this.isApp=e.isApp,this.isApp&&(this.modelData=e.modelData)},setTitle:function(e){return this.$("h1").text(e)},toggleUrlAndCodes:function(){var e,t,n;return e=(n=this.model)!=null?n.get("type"):void 0,t=e==="PING"||e==="TCP"?!1:!0,this.$('[data-id="hm-urlpath"]').closest("section").toggle(t),this.$('[data-id="hm-expectedcodes"]').closest("section").toggle(t)},updateAttribute:function(e){var n,r;n=$(e.currentTarget),r=n.data("target"),t.prototype.updateAttribute.call(this,e);if(r==="type")return this.toggleUrlAndCodes()},render:function(){var t;return this.isApp?this.$el.html(r(this.modelData)):(t=o.getClass(e.RESTYPE.OSHM),s(this.$el,this.selectTpl,new t({model:this.model})),this.$el.html(n(this.getRenderData()))),this.isApp||this.toggleUrlAndCodes(),this}},{handleTypes:[e.RESTYPE.OSHM],handleModes:["stack","appedit"]})});