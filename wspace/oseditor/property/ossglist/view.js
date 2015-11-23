define(["constant","../OsPropertyView","./template","CloudResources","../ossg/view","UI.selection","../validation/ValidationBase"],function(e,t,n,r,i,s,o){return t.extend({events:{"change .selection[data-target]":"updateAttribute","select_dropdown_button_click .item-list":"addItem","click .item-list .item":"editItem","click .item-readable-list .item":"editItem","select_item_add .item-list":"attachItem","select_item_remove .item-list":"unAttachItem","click .item-list .item .item-remove":"unAttachItemClick","mousedown .item-list .item .item-remove":"unAttachItemMousedown"},initialize:function(e){var t;t=this,this.targetModel=e.targetModel,this.panel=e.panel,this.selectTpl={button:function(){return n.addButton()},sgItem:function(e){return n.item({name:e.text})},sgOption:function(e){var t;return t=Design.instance().component(e.value),n.option({name:e.text,ruleCount:t.get("rules").length,memberCount:t.getMemberList().length,description:t.get("description")})}}},render:function(){var t;return t=o.getClass(e.RESTYPE.OSSG),s(this.$el,this.selectTpl,new t({view:this})),this.refreshList(),this},refreshList:function(){var t,r,i,s,o,u;return o=Design.instance().mode(),this.targetModel&&!this.targetModel.get("appId")&&(o="stack"),t=Design.modelClassForType(e.RESTYPE.OSSG),r=t.allObjects(),u=[],_.each(r,function(e){var t,n;return t=e.get("name"),n=e.get("id"),u.push({name:t,uid:n,id:e.id,ruleCount:e.get("rules").length,memberCount:e.getMemberList().length,description:e.get("description")})}),o==="stack"||o==="appedit"?(this.targetModel?(s=this.targetModel.connectionTargets("OsSgAsso"),i=[],_.each(s,function(e){var t;return t=e.get("id"),i.push(t)}),this.$el.html(n.stack({sgList:u,attachedSGList:i.join(",")}))):this.$el.html(n.app({attachedSGList:u})),this.refreshRemoveState()):this.targetModel?(s=this.targetModel.connectionTargets("OsSgAsso"),i=[],_.each(s,function(e){return i.push({id:e.id,name:e.get("name"),ruleCount:e.get("rules").length,memberCount:e.getMemberList().length,description:e.get("description")})}),this.$el.html(n.app({attachedSGList:i}))):this.$el.html(n.app({attachedSGList:u}))},refreshRemoveState:function(){var e;if(this.targetModel)return e=this.targetModel.connectionTargets("OsSgAsso"),e.length<=1?this.$el.find(".item-list .item-remove").addClass("hide"):this.$el.find(".item-list .item-remove").removeClass("hide")},getSelectItemModel:function(e){var t,n;return t=e.data("value")||e.data("id"),n=Design.instance().component(t),n},updateAttribute:function(e){var t,n,r;t=$(e.currentTarget),n=t.data("target"),r=t.getValue()},addItem:function(t,n){var r,i,s,o;return i=Design.modelClassForType(e.RESTYPE.OSSG),n?s=new i({name:n}):s=new i({}),o=s.get("id"),this.attachItem(null,o),this.refreshList(),r=this.$el.find('.item-list .item[data-value="'+o+'"]'),r.click(),!1},editItem:function(e){var t,n,r,s;return t=$(e.currentTarget),r=this.getSelectItemModel(t),s=new i({sgModel:r,listView:this}),n=t.parents(".item-readable-list").length,n&&(t.parents(".item-readable-list").find(".item").removeClass("active"),t.addClass("active")),this.showFloatPanel(s.render().el,function(){if(n)return t.removeClass("active")}),!1},attachItem:function(e,t){var n;return n=Design.instance().component(t),n.attachSG(this.targetModel),this.refreshRemoveState()},unAttachItem:function(e,t){var n;return n=Design.instance().component(t),n.unAttachSG(this.targetModel),this.refreshRemoveState()},unAttachItemClick:function(e){var t,n,r;return n=$(e.currentTarget),t=n.parents(".item"),r=this.getSelectItemModel(t),r.unAttachSG(this.targetModel),this.refreshList(),!1}},{handleTypes:["ossglist"],handleModes:["stack","appedit","app"]})});