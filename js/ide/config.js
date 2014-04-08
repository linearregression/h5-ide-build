(function() {
  (function() {
    var l, s, scripts, version, _i, _len;
    if (!window) {
      return;
    }
    l = window.location;
    window.language = window.version = "";
    if (l.protocol === "http:" && !l.port) {
      window.location = l.href.replace("http:", "https:");
      return;
    }
    scripts = document.getElementsByTagName("script");
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      s = scripts[_i];
      version = s.getAttribute("data-main");
      if (version) {
        window.version = version.split("?")[1];
        break;
      }
    }
    if (window.version === '#{version}') {
      window.version = "dev";
    }
    window.language = document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + "lang\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || "en-us";
    return null;
  })();

  require.config({
    baseUrl: './',
    waitSeconds: 30,
    locale: language,
    urlArgs: "v=" + version,
    paths: {

      /* env:dev                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           env:dev:end */
      'base_main': 'module/base/base_main',
      'header': 'module/header/main',
      'header_view': 'module/header/view',
      'header_model': 'module/header/model',
      'navigation': 'module/navigation/main',
      'navigation_view': 'module/navigation/view',
      'navigation_model': 'module/navigation/model',
      'tabbar': 'module/tabbar/main',
      'tabbar_view': 'module/tabbar/view',
      'tabbar_model': 'module/tabbar/model',
      'dashboard': 'module/dashboard/main',
      'dashboard_view': 'module/dashboard/overview/view',
      'dashboard_model': 'module/dashboard/overview/model',
      'process': 'module/process/main',
      'process_view': 'module/process/view',
      'process_model': 'module/process/model',
      'design_module': 'module/design/main',
      'design_view': 'module/design/view',
      'design_model': 'module/design/model',
      'resource': 'module/design/resource/main',
      'property': 'module/design/property/main',
      'canvas': 'module/design/canvas/main',
      'toolbar': 'module/design/toolbar/main',
      'state_status': 'component/statestatus/main',
      'unmanagedvpc': 'component/unmanagedvpc/main',
      'unmanagedvpc_view': 'component/unmanagedvpc/view',
      'unmanagedvpc_model': 'component/unmanagedvpc/model',
      'jquery_sort': 'component/stateeditor/lib/jquery_sort',
      'markdown': 'component/stateeditor/lib/markdown',
      'ace': 'component/stateeditor/lib/ace/ace',
      'ace_ext_language_tools': 'component/stateeditor/lib/ace/ext-language_tools',
      'stateeditor': 'component/stateeditor/main',
      'stateeditor_view': 'component/stateeditor/view',
      'stateeditor_model': 'component/stateeditor/model',
      'validation': 'component/trustedadvisor/validation',
      'ta_conf': 'component/trustedadvisor/config',
      'validation_helper': 'component/trustedadvisor/lib/helper'
    },
    shim: {
      'canvon': {
        deps: ['jquery'],
        exports: 'Canvon'
      },
      'underscore': {
        exports: '_'
      },
      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      'handlebars': {
        exports: 'Handlebars'
      },
      'MC.canvas': {
        deps: ['MC', 'canvon']
      },
      'Meteor': {
        deps: ['underscore'],
        exports: 'Meteor'
      },
      'header': {
        deps: ['header_view', 'header_model', 'MC']
      },
      'navigation': {
        deps: ['navigation_view', 'navigation_model', 'MC']
      },
      'tabbar': {
        deps: ['tabbar_view', 'tabbar_model', 'MC']
      },
      'dashboard': {
        deps: ['dashboard_view', 'dashboard_model', 'MC']
      },
      'process': {
        deps: ['process_view', 'process_model', 'MC']
      },
      'jquery_sort': {
        deps: ['jquery', 'MC']
      },
      'markdown': {
        deps: ['MC']
      },
      'ace_ext_language_tools': {
        deps: ['ace']
      },
      'stateeditor': {
        deps: ['stateeditor_view', 'stateeditor_model', 'jquery_sort', 'markdown', 'ace_ext_language_tools', 'MC']
      }
    },

    /* env:prod */
    bundles: {
      "vender/requirejs/requirelib": ["i18n"],
      "vender/vender": ["jquery", "backbone", "underscore", "handlebars", "sprintf", "Meteor", "canvon", "crypto"],
      "lib/lib": ["MC", "constant", "MC.canvas", "MC.canvas.constant", 'MC.validate', "canvas_layout", "lib/handlebarhelpers", "event", "WS"],
      "lib/deprecated": ['aws_handle', 'forge_handle', 'common_handle'],
      "ui/ui": ['UI.tooltip', 'UI.scrollbar', 'UI.tabbar', 'UI.bubble', 'UI.modal', 'UI.table', 'UI.tablist', 'UI.selectbox', 'UI.searchbar', 'UI.filter', 'UI.radiobuttons', 'UI.notification', 'UI.multiinputbox', 'UI.canvg', 'UI.sortable', 'UI.parsley', 'UI.errortip', "jqpagination", 'hoverIntent', 'bootstrap-carousel'],
      "model/model": ['base_model', 'account_model', 'session_model', 'favorite_model', 'app_model', 'stack_model', 'state_model', 'ec2_model', 'vpc_model', 'aws_model', 'ami_model', 'ebs_model', 'elb_model', 'dhcp_model', 'customergateway_model', 'vpngateway_model', 'keypair_model', 'autoscaling_model', 'cloudwatch_model', 'sns_model', 'subnet_model', 'instance_model', 'result_vo', 'favorite_service', 'session_service', 'account_service', 'app_service', 'stack_service', 'aws_service', 'state_service', 'ami_service', 'ebs_service', 'ec2_service', 'eip_service', 'instance_service', 'keypair_service', 'placementgroup_service', 'securitygroup_service', 'acl_service', 'customergateway_service', 'dhcp_service', 'eni_service', 'internetgateway_service', 'routetable_service', 'subnet_service', 'vpc_service', 'vpngateway_service', 'vpn_service', 'elb_service', 'iam_service', 'autoscaling_service', 'cloudwatch_service', 'sns_service'],
      "component/sgrule/SGRulePopup": [],
      "component/exporter/exporter": ["component/exporter/Download", "component/exporter/Thumbnail", "component/exporter/JsonExporter"],
      "module/design/framework/DesignBundle": ["Design", "CanvasManager"],
      "property": []
    },
    bundleExcludes: {
      "lib/deprecated": ["Design"],
      "component/sgrule/SGRulePopup": ["Design"],
      "module/design/framework/DesignBundle": ["component/sgrule/SGRulePopup"],
      "property": ["component/sgrule/SGRulePopup"]
    }

    /* env:prod:end */
  });

  require(['./js/ide/ide'], function(ide) {
    return $(function() {
      return ide.initialize();
    });
  });

}).call(this);
