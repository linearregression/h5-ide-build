define(["ComplexResModel","constant"],function(e,t){var n;return n=e.extend({type:t.RESTYPE.OSSG,newNameTmpl:"security-group",initialize:function(){var e;e=Design.modelClassForType(t.RESTYPE.OSSGRULE),this.get("rules").push(new e)},defaults:function(){return{description:"custom security group",rules:[]}},attachSG:function(e){var t;return t=Design.modelClassForType("OsSgAsso"),new t(e,this)},unAttachSG:function(e){var t;return t=Design.modelClassForType("OsSgAsso"),(new t(e,this)).remove()},addRule:function(e){var n,r,i,s,o;o=this.get("rules");for(i=0,s=o.length;i<s;i++){r=o[i];if(r.isEqualToData(e))return!1}return n=Design.modelClassForType(t.RESTYPE.OSSGRULE),r=new n(e),this.get("rules").push(r),r.id},getRule:function(e){var t,n,r,i;i=this.get("rules");for(n=0,r=i.length;n<r;n++){t=i[n];if(t.id===e)return t}return null},removeRule:function(e){var t,n,r,i,s;s=this.get("rules");for(t=r=0,i=s.length;r<i;t=++r){n=s[t];if(n===e||n.id===e){this.get("rules").splice(t,1);break}}},getMemberList:function(){return _.filter(this.connectionTargets("OsSgAsso"),function(e){return!0})},isDefault:function(){return this.get("name")==="DefaultSG"},remove:function(){var t,n,r,i;i=this.get("rules");for(n=0,r=i.length;n<r;n++)t=i[n],t.remove();return e.prototype.remove.apply(this,arguments)},serialize:function(){var e,t;return this.getMemberList().length?(t=this.get("rules"),e=t.length,t=_.filter(t,function(n,r){var i,s,o;for(i=s=o=r+1;o<=e?s<e:s>e;i=o<=e?++s:--s)if(_.isEqual(n.toJSON(),t[i].toJSON()))return!1;return!0}),{component:{name:this.get("name"),type:this.type,uid:this.id,resource:{id:this.get("appId"),name:this.get("name"),description:this.get("description"),rules:t!=null?t.map(function(e){return e.toJSON()}):void 0}}}):null}},{handleTypes:t.RESTYPE.OSSG,deserialize:function(e,r,i){var s,o,u,a,f,l,c;s=Design.modelClassForType(t.RESTYPE.OSSGRULE),a=new n({id:e.uid,name:e.resource.name,appId:e.resource.id,description:e.resource.description}),u=e.resource.rules.map(function(e){var t;return e.remote_group_id&&(e.remote_group_id=i(MC.extractID(e.remote_group_id))),t=new s,t.fromJSON(e),t});if(u.length){c=a.get("rules");for(f=0,l=c.length;f<l;f++)o=c[f],o.remove();a.set("rules",u)}},getDefaultSg:function(){return _.find(n.allObjects(),function(e){return e.isDefault()})},attachDefaultSG:function(e){var t,r;r=n.getDefaultSg(),r&&(t=Design.modelClassForType("OsSgAsso"),new t(r,e))}}),n});