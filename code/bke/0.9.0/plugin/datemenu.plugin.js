/*! Bkeditor - v0.9.0 - 2013-07-30
* https://github.com/daixianfeng/bkeditor
* Copyright (c) 2013 daixianfeng;*/
(function(e){function t(e){"string"==typeof e&&e||(e="Y-m-d");var t=new Date,n={};return n.Y=t.getFullYear(),n.m=t.getMonth()+1,n.d=t.getDate(),e.replace("Date_","").replace("Y",n.Y).replace("m",n.m).replace("d",n.d)}e.addPlugin({id:"datemenu",type:"panel",isEnable:!0,fill:function(t){var n="",r=[{name:"Y-m-d",cmd:"insertdate",param:"type_1"},{name:"Y/m/d",cmd:"insertdate",param:"type_2"},{name:"Y.m.d",cmd:"insertdate",param:"type_3"},{name:"Y年m月d日",cmd:"insertdate",param:"type_4"}];n=e.Menu.create(r),e.fillPanel("datemenu",n,t)},type_1:function(){e.utils.pasteHTML(t("Y-m-d"))},type_2:function(){e.utils.pasteHTML(t("Y/m/d"))},type_3:function(){e.utils.pasteHTML(t("Y.m.d"))},type_4:function(){e.utils.pasteHTML(t("Y年m月d日"))}})})(window.jQuery.jQEditor);