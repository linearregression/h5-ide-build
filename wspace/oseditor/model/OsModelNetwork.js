define(["GroupModel","constant"],function(e,t){var n;return n=e.extend({type:t.RESTYPE.OSNETWORK,newNameTmpl:"network",isRemovable:function(){return!1},serialize:function(){return{layout:this.generateLayout(),component:{name:this.get("name"),type:this.type,uid:this.id,resource:{id:this.get("appId"),name:this.get("name")}}}}},{handleTypes:t.RESTYPE.OSNETWORK,deserialize:function(e,t,r){new n({id:e.uid,name:e.resource.name,appId:e.resource.id,x:t.coordinate[0],y:t.coordinate[1],width:t.size[0],height:t.size[1]})}}),n});