define(["constant","../OsPropertyView","./stack","./app","../ossglist/view"],function(e,t,n,r,i){return t.extend({events:{"change .selection[data-target]":"updateAttribute"},initialize:function(){this.sgListView=this.reg(new i({targetModel:null}))},render:function(){var e;return e=function(){switch(!1){case this.mode()!=="app":return r;default:return n}}.call(this),this.$el.html(e(this.getRenderData())),this.$el.append(this.sgListView.render().el),this},mode:function(){var e;return e=Design.instance().mode(),e},getTitle:function(){var e;return(e=this.mode())==="app"||e==="appedit"?"App Property":"Stack Property"}},{handleTypes:["globalconfig"],handleModes:["stack","app","appedit"]})});