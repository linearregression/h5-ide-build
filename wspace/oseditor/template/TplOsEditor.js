define(["handlebars"],function(e){var t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o;s+='<div id="OpsEditor" class="pos-r">\n  <nav class="OEPanelTop"></nav>\n  <aside class="OEPanelRight" id="OEPanelRight"></aside>\n\n<div class="OEMiddleWrap">\n  <div class="OEPanelBottom"></div>\n\n  <section class="OEPanelCenter nano"> <div class="nano-content">\n    <div class="canvas-view">\n      <button class="svg_resizer icon-resize-down tooltip" data-tooltip=\'',o=n.i18n.call(t,"CANVAS.CVS_TIP_EXPAND_H",{hash:{},data:i});if(o||o===0)s+=o;s+="'></button>\n      <button class=\"svg_resizer icon-resize-up tooltip\" data-tooltip='",o=n.i18n.call(t,"CANVAS.CVS_TIP_SHRINK_H",{hash:{},data:i});if(o||o===0)s+=o;s+="'></button>\n      <button class=\"svg_resizer icon-resize-right tooltip\" data-tooltip='",o=n.i18n.call(t,"CANVAS.CVS_TIP_EXPAND_W",{hash:{},data:i});if(o||o===0)s+=o;s+="'></button>\n      <button class=\"svg_resizer icon-resize-left tooltip\" data-tooltip='",o=n.i18n.call(t,"CANVAS.CVS_TIP_SHRINK_W",{hash:{},data:i});if(o||o===0)s+=o;return s+='\'></button>\n      <svg width="100%" height="100%"></svg>\n    </div> </div>\n    <q class="canvas-message"></q>\n  </section>\n</div>\n</div>',s};return e.template(t)});