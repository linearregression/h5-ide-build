define(["ConnectionModel","constant","Design"],function(e,t,n){return e.extend({type:"OsFloatIpUsage",constructor:function(r,i,s,o){var u;return!i&&r.type!==t.RESTYPE.OSFIP&&(u=n.modelClassForType(t.RESTYPE.OSFIP),i=new u),e.call(this,r,i,s,o)}})});